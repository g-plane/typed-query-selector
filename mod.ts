type Trim<S extends string> =
  S extends `${infer T} ` ? Trim<T> :
  S extends ` ${infer T}` ? Trim<T> : S

type Combinators = ' ' | '>' | '~' | '+'

type Split<S, R = never> =
  S extends `${infer Left},${infer Right}` ?
  Split<Right, R | Left> : R | S

type Preprocess<I extends string> =
  I extends `${infer L}, ${infer R}` ?
  Preprocess<`${L},${R}`> : Trim<I>

type Postprocess<I> =
  I extends `${infer Tag}.${infer _}` ? Postprocess<Tag> :
  I extends `${infer Tag}#${infer _}` ? Postprocess<Tag> :
  I extends `${infer Tag}[${infer _}` ? Postprocess<Tag> : I

export type ParseSelector<I extends string> =
  string extends I ? Element :
  Preprocess<I> extends infer I ?
  I extends `${infer _}${Combinators}${infer Right}` ?
  ParseSelector<Right> :
  Split<I> extends infer Tags ?
  Postprocess<Tags> extends infer Tags ?
  Tags extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[Tags] :
  Tags extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[Tags] :
  Element : never : never : never

export function querySelector<
  S extends string,
  E extends Element = ParseSelector<S>
>(selector: S, element: Element | Document = document) {
  return element.querySelector<E>(selector)
}

export function querySelectorAll<
  S extends string,
  E extends Element = ParseSelector<S>
>(selector: S, element: Element | Document = document) {
  return element.querySelectorAll<E>(selector)
}
