import type { ParseSelector } from './parser'

declare global {
  interface ParentNode {
    querySelector<S extends string>(selector: S): ParseSelector<S> | null

    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S>>
  }

  interface Element {
    closest<S extends string>(selector: S): ParseSelector<S> | null
  }

  interface HTMLElement {
    querySelector<S extends string>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null

    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>

    closest<S extends string>(selector: S): ParseSelector<S, HTMLElement> | null
  }

  interface Document {
    querySelector<S extends string>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null

    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
  }

  interface DocumentFragment {
    querySelector<S extends string>(
      selector: S,
    ): ParseSelector<S, HTMLElement> | null

    querySelectorAll<S extends string>(
      selector: S,
    ): NodeListOf<ParseSelector<S, HTMLElement>>
  }
}
