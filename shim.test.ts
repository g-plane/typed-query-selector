import './shim'
import type { Equal, Expect } from '@type-challenges/utils'

const el = document.querySelector(
  '.container > #sign-up-form > div#notice, span.tip',
)
type TestEl = Expect<Equal<typeof el, HTMLDivElement | HTMLSpanElement | null>>

const link = document.querySelector<HTMLAnchorElement>(prompt()!)
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

const closest = el!.closest('button.btn-confirm, a.link')
type TestClosest = Expect<
  Equal<typeof closest, HTMLButtonElement | HTMLAnchorElement | null>
>
