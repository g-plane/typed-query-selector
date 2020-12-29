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

type Split<S, R = never> = S extends `${infer Left},${infer Right}`
  ? Split<Right, R | Left>
  : R | S

type Preprocess<I extends string> = I extends `${infer L},${Whitespace}${infer R}`
  ? Preprocess<`${L},${R}`>
  : I extends `${infer L}[${string}]${infer R}`
  ? Preprocess<`${L}${R}`>
  : Trim<I>

type Postprocess<I> = I extends `${infer Tag}.${string}`
  ? Postprocess<Tag>
  : I extends `${infer Tag}#${string}`
  ? Postprocess<Tag>
  : I extends `${infer Tag}:${PseudoClassesFirstChar}${string}`
  ? Postprocess<Tag>
  : I

export type ParseSelector<I extends string, Fallback extends Element = Element> = string extends I
  ? Fallback
  : Preprocess<I> extends infer I
  ? I extends `${string}${Combinators}${infer Right}`
    ? ParseSelector<Right>
    : Split<I> extends infer Tags
    ? Postprocess<Tags> extends infer Tags
      ? Tags extends keyof HTMLElementTagNameMap
        ? HTMLElementTagNameMap[Tags]
        : Tags extends keyof SVGElementTagNameMap
        ? SVGElementTagNameMap[Tags]
        : Fallback
      : never
    : never
  : never
