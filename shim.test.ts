import './shim'
import type { Equal, Expect } from '@type-challenges/utils'

const htmlEl = document.querySelector(
  '.container > #sign-up-form > div#notice, span.tip',
)
type TestEl = Expect<
  Equal<typeof htmlEl, HTMLDivElement | HTMLSpanElement | null>
>

declare let selector: string
const link = document.querySelector<string, HTMLAnchorElement>(selector)
type TestLink = Expect<Equal<typeof link, HTMLAnchorElement | null>>

// @ts-expect-error
const a1: HTMLAnchorElement | null = document.querySelector('div')
// @ts-expect-error
const a2: HTMLAnchorElement | null = document.querySelector('div#app')

const results: Array<HTMLAnchorElement | null> = []
// @ts-expect-error
results.push(document.querySelector('div'))
// @ts-expect-error
results.push(document.querySelector('div#app'))

const closest = htmlEl!.closest('button.btn-confirm, a.link')
type TestClosest = Expect<
  Equal<typeof closest, HTMLButtonElement | HTMLAnchorElement | null>
>

const unknownEl = document.querySelector('unknown')
type TestElement = Expect<Equal<typeof unknownEl, HTMLElement | null>>

declare let btn: HTMLButtonElement
const elementOfBtn = btn.querySelector('unknown')
type TestElementOfBtn = Expect<Equal<typeof elementOfBtn, HTMLElement | null>>

declare let element: Element
const elementOfElement = element.querySelector('unknown')
type TestElementOfElement = Expect<
  Equal<typeof elementOfElement, Element | null>
>
