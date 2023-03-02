import type { StrictlyParseSelector } from './parser'

declare global {
  interface ParentNode {
    querySelector<S extends string, E extends StrictlyParseSelector<S>>(
      selector: S,
    ): [E] extends [never] ? never : E | null

    querySelectorAll<S extends string, E extends StrictlyParseSelector<S>>(
      selector: S,
    ): [E] extends [never] ? never : NodeListOf<E>
  }

  interface Element {
    closest<S extends string, E extends StrictlyParseSelector<S>>(
      selector: S,
    ): [E] extends [never] ? never : E | null
  }

  interface HTMLElement {
    querySelector<
      S extends string,
      E extends StrictlyParseSelector<S, HTMLElement>,
    >(
      selector: S,
    ): [E] extends [never] ? never : E | null
    querySelector<E extends Element = Element>(selector: string): E | null

    querySelectorAll<
      S extends string,
      E extends StrictlyParseSelector<S, HTMLElement>,
    >(
      selector: S,
    ): [E] extends [never] ? never : NodeListOf<E>
    querySelectorAll<E extends Element = Element>(
      selector: string,
    ): NodeListOf<E>

    closest<S extends string, E extends StrictlyParseSelector<S, HTMLElement>>(
      selector: S,
    ): [E] extends [never] ? never : E | null
  }

  interface Document {
    querySelector<
      S extends string,
      E extends StrictlyParseSelector<S, HTMLElement>,
    >(
      selector: S,
    ): [E] extends [never] ? never : E | null
    querySelector<E extends Element = Element>(selector: string): E | null

    querySelectorAll<
      S extends string,
      E extends StrictlyParseSelector<S, HTMLElement>,
    >(
      selector: S,
    ): [E] extends [never] ? never : NodeListOf<E>
    querySelectorAll<E extends Element = Element>(
      selector: string,
    ): NodeListOf<E>
  }

  interface DocumentFragment {
    querySelector<
      S extends string,
      E extends StrictlyParseSelector<S, HTMLElement>,
    >(
      selector: S,
    ): [E] extends [never] ? never : E | null
    querySelector<E extends Element = Element>(selector: string): E | null

    querySelectorAll<
      S extends string,
      E extends StrictlyParseSelector<S, HTMLElement>,
    >(
      selector: S,
    ): [E] extends [never] ? never : NodeListOf<E>
    querySelectorAll<E extends Element = Element>(
      selector: string,
    ): NodeListOf<E>
  }
}
