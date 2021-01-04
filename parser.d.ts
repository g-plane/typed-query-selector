type Whitespace = ' ' | '\n' | '\r' | '\f' | '\t'
type Trim<S extends string> = S extends `${infer T}${Whitespace}`
  ? Trim<T>
  : S extends `${Whitespace}${infer T}`
  ? Trim<T>
  : S

type Combinators = ' ' | '>' | '~' | '+'

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

type Split<S, R = never> = S extends `${string},` // invalid selector
  ? unknown
  : S extends `${infer Left},${infer Right}`
  ? Split<Right, R | Left>
  : R | S

type Quotes = '"' | "'"

// DO NOT use union type like `${infer L},${Whitespace}${infer R}` here,
// or it may cause OOM when running tsc in downstream projects.
type PreprocessGrouping<I extends string> = I extends `${infer L}, ${infer R}`
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

type Preprocess<I extends string> = I extends `${infer L}\\${Quotes}${infer R}` // remove escaped quotes
  ? Preprocess<`${L}${R}`>
  : I extends `${infer L}"${string}"${infer R}` // remove quoted content in attribute
  ? Preprocess<`${L}${R}`>
  : I extends `${infer L}'${string}'${infer R}` // remove quoted content in attribute
  ? Preprocess<`${L}${R}`>
  : Trim<I>

type Postprocess<I> = I extends `${string}.` // invalid selector
  ? unknown
  : I extends `${string}#` // invalid selector
  ? unknown
  : I extends `${infer Tag}.${string}`
  ? Postprocess<Tag>
  : I extends `${infer Tag}#${string}`
  ? Postprocess<Tag>
  : I extends `${infer Tag}:${PseudoClassesFirstChar}${string}`
  ? Postprocess<Tag>
  : I extends `${infer L}[${string}]${infer R}` // remove attribute
  ? Postprocess<`${L}${R}`>
  : I extends `${string}|${infer R}` // namespace prefix
  ? Postprocess<R>
  : I

export type ParseSelectorToTagName<I extends string> = Preprocess<
  PreprocessGrouping<I>
> extends infer I
  ? I extends ''
    ? unknown
    : I extends `${string}${Combinators}${infer Right}`
    ? ParseSelectorToTagName<Right>
    : Split<I> extends infer Tags
    ? Postprocess<Tags>
    : never
  : never

export type ParseSelector<
  I extends string
> = ParseSelectorToTagName<I> extends infer Tags
  ? Tags extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Tags]
    : Tags extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[Tags]
    : Element
  : never
