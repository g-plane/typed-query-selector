import type { ParseSelector } from './parser'

declare global {
  interface ParentNode {
    querySelector<S extends string, E extends Element = ParseSelector<S>>(
      selector: S
    ): E | null

    querySelectorAll<S extends string, E extends Element = ParseSelector<S>>(
      selector: S
    ): NodeListOf<E>
  }
}
