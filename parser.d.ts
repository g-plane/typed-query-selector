type Whitespace = ' ' | '\n' | '\r' | '\f' | '\t'
type Trim<S extends string> = S extends `${infer T}${Whitespace}`
  ? Trim<T>
  : S extends `${Whitespace}${infer T}`
  ? Trim<T>
  : S

type Combinators = ' ' | '>' | '~' | '+'
type GetLastTag<I> = I extends `${string}${Combinators}${infer Right}`
  ? Right extends '' // right arm can't be empty
    ? unknown
    : GetLastTag<Right>
  : I

type PseudoClassesFirstChar =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'h'
  | 'i'
  | 'l'
  | 'n'
  | 'o'
  | 'p'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'

type Split<S> = S extends `${string},` // invalid selector
  ? unknown
  : SplitRec<S, []>
type SplitRec<S, Acc extends any[]> = S extends `${infer Left},${infer Right}`
  ? SplitRec<Right, [...Acc, Left]>
  : S extends ''
  ? Acc
  : SplitRec<'', [...Acc, S]>

type Join<Seq, Acc extends string = ''> = Seq extends [
  infer Head extends string,
  ...infer Rest,
]
  ? Join<Rest, `${Acc}${Head}`>
  : Acc

type Quotes = '"' | "'"

// DO NOT use union type like `${infer L},${Whitespace}${infer R}` here,
// or it may cause OOM when running tsc in downstream projects.
type PreprocessGrouping<I> = I extends `${infer L}, ${infer R}`
  ? PreprocessGrouping<`${L},${R}`>
  : I extends `${infer L},\n${infer R}`
  ? PreprocessGrouping<`${L},${R}`>
  : I extends `${infer L},\r${infer R}`
  ? PreprocessGrouping<`${L},${R}`>
  : I extends `${infer L},\f${infer R}`
  ? PreprocessGrouping<`${L},${R}`>
  : I extends `${infer L},\t${infer R}`
  ? PreprocessGrouping<`${L},${R}`>
  : I

type Preprocess<I> = I extends `${string}[]${string}` // invalid selector
  ? unknown
  : PreprocessUnchecked<I>
type PreprocessUnchecked<I> = I extends `${infer L}\\${Quotes}${infer R}` // remove escaped quotes
  ? PreprocessUnchecked<`${L}${R}`>
  : I extends `${infer L}"${string}"${infer R}` // remove quoted content in attribute
  ? PreprocessUnchecked<`${L}${R}`>
  : I extends `${infer L}'${string}'${infer R}` // remove quoted content in attribute
  ? PreprocessUnchecked<`${L}${R}`>
  : I extends `${infer L}[${string}]${infer R}` // process attribute
  ? PreprocessUnchecked<`${L}#x${R}`> // replace it with a fake ID selector
  : I

/** Parse `:is()` and `:where()` */
type ExpandFunctions<I> = I extends `${infer L}:is(${infer Args})${infer R}`
  ? ExpandFunctions<`${L}&${Split<Trim<Args>>[number]}${R}`>
  : I extends `${infer L}:where(${infer Args})${infer R}`
  ? ExpandFunctions<`${L}&${Split<Trim<Args>>[number]}${R}`>
  : I extends `${infer L}:${string}(${string})${infer R}`
  ? ExpandFunctions<`${L}${R}`>
  : I

/** Check whether each tag is valid or not. */
type Postprocess<
  Tags extends string[],
  R extends string[] = [],
> = Tags extends [infer H, ...infer Rest extends string[]]
  ? PostprocessEach<GetLastTag<H>> extends infer T
    ? T extends string
      ? Postprocess<Rest, [...R, T]>
      : unknown
    : never
  : R
/** Postprocess each tag with simple validation. */
type PostprocessEach<I> = I extends `${string}.` // invalid class selector
  ? unknown
  : I extends `${string}#` // invalid ID selector
  ? unknown
  : PostprocessEachUnchecked<I>
type PostprocessEachUnchecked<I> =
  I extends `${infer Tag}.${string}&${infer Rest}`
    ? PostprocessEachUnchecked<`${Tag}&${Rest}`>
    : I extends `${infer Tag}.${string}`
    ? PostprocessEachUnchecked<Tag>
    : I extends `${infer Tag}#${string}&${infer Rest}`
    ? PostprocessEachUnchecked<`${Tag}&${Rest}`>
    : I extends `${infer Tag}#${string}`
    ? PostprocessEachUnchecked<Tag>
    : I extends `${infer Tag}:${PseudoClassesFirstChar}${string}&${infer Rest}`
    ? PostprocessEachUnchecked<`${Tag}&${Rest}`>
    : I extends `${infer Tag}:${PseudoClassesFirstChar}${string}`
    ? PostprocessEachUnchecked<Tag>
    : I extends `${string}|${infer Tag}` // namespace prefix
    ? PostprocessEachUnchecked<Tag>
    : I

type ParseSelectorToTagNames<I extends string> = Trim<I> extends infer I
  ? I extends ''
    ? unknown
    : Split<
        ExpandFunctions<Preprocess<PreprocessGrouping<I>>>
      > extends infer PreprocessedTagNames
    ? PreprocessedTagNames extends string[]
      ? Postprocess<PreprocessedTagNames>
      : unknown
    : never
  : never

export type ParseSelector<
  I extends string,
  Fallback extends Element = Element,
> = ParseSelectorToTagNames<I> extends infer TagNames
  ? TagNames extends []
    ? TagNameToElement<'', Fallback>
    : TagNames extends string[]
    ? FromTagNamesToElements<TagNames, Fallback>
    : Fallback
  : never

type FromTagNamesToElements<
  Tags extends string[],
  Fallback extends Element,
  Result extends Element = never,
> = Tags extends []
  ? Result
  : Tags extends [infer Head extends string, ...infer Rest extends string[]]
  ? FromTagNamesToElements<
      Rest,
      Fallback,
      | Result
      | (Head extends `${string}&${string}`
          ? ExpandAnd<Head, Fallback>
          : TagNameToElement<Head, Fallback>)
    >
  : never
type ExpandAnd<
  I extends string,
  Fallback extends Element,
  Result extends Element | unknown = unknown,
> = I extends `${'' | '*'}&${infer Rest}`
  ? ExpandAnd<Rest, Fallback, Result>
  : I extends `${infer Tag}&${infer Rest}`
  ? ExpandAnd<Rest, Fallback, Result & TagNameToElement<Tag, Fallback>>
  : I extends '' | '*'
  ? Result
  : ExpandAnd<'', Fallback, Result & TagNameToElement<I, Fallback>>

export type TagNameToElement<
  Tag extends string,
  Fallback extends Element = Element,
> = Tag extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[Tag]
  : Tag extends keyof SVGElementTagNameMap
  ? SVGElementTagNameMap[Tag]
  : Fallback

// --------------------------------------------------------
// Strict Parser
// --------------------------------------------------------

// Specification is here: https://drafts.csswg.org/css-syntax-3/#ident-token-diagram
// but we don't plan to comply that fully,
// otherwise it will increase type-checking time and the complexity of parser.

type LowerCaseLetter =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type IdentifierFirstChar =
  | LowerCaseLetter
  | Uppercase<LowerCaseLetter>
  | '-'
  | '_'
type IdentifierChar = IdentifierFirstChar | Digit

type IsValidTags<S extends string[]> = S extends [
  infer Head extends string,
  ...infer Rest extends string[],
]
  ? IsValidTagsWithAnd<Head> extends true
    ? IsValidTags<Rest>
    : false
  : true
type IsValidTagsWithAnd<S extends string> =
  S extends `${infer Head}&${infer Rest}`
    ? IsValidTagName<Head> extends true
      ? IsValidTagsWithAnd<Rest>
      : false
    : IsValidTagName<S>
type IsValidTagName<S> = S extends '' | '*'
  ? true
  : S extends `${infer H}${infer Rest}`
  ? H extends IdentifierFirstChar
    ? IsValidRestChars<Rest>
    : false
  : string extends S
  ? true
  : false
type IsValidRestChars<S extends string> = S extends `${infer H}${infer Rest}`
  ? H extends IdentifierChar
    ? IsValidRestChars<Rest>
    : false
  : true // no characters left, so it's OK

export type StrictlyParseSelector<
  S extends string,
  Fallback extends Element = Element,
> = string extends S
  ? Fallback
  : ParseSelectorToTagNames<S> extends infer Tags
  ? Tags extends []
    ? TagNameToElement<'', Fallback>
    : Tags extends string[]
    ? IsValidTags<Tags> extends true
      ? FromTagNamesToElements<Tags, Fallback>
      : never
    : never
  : never
