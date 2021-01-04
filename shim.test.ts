import './shim'
import type { Equal, Expect } from '@type-challenges/utils'

const el = document.querySelector(
  '.container > #sign-up-form > div#notice, span.tip',
)
type TestEl = Expect<Equal<typeof el, HTMLDivElement | HTMLSpanElement | null>>

const link = document.querySelector<HTMLAnchorElement>(prompt()!)
type TestLink = Expect<Equal<typeof link, HTMLAnchorElement | null>>
