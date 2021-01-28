import './strict'
import type { Equal, Expect } from '@type-challenges/utils'

const e1 = document.querySelector('#app')
const e2 = document.querySelector('.container')
const e3 = document.querySelector('[data-test]')
const e4 = document.querySelector('[data-test=""]')
const e5 = document.querySelector('#')
const e6 = document.querySelector('.')
const e7 = document.querySelector('[]')
const e8 = document.querySelector('')
const e9 = document.querySelector('*')
const e10 = document.querySelector('li > *')
const e11 = document.querySelector('div#')
const e12 = document.querySelector('div.')
const e13 = document.querySelector('div[]')
const e14 = document.querySelector('div#app')
const e15 = document.querySelector('div.container')
const e16 = document.querySelector('div[data-test]')
const e17 = document.querySelector('div > span')
const e18 = document.querySelector('[')
const e19 = document.querySelector('a6')
const e20 = document.querySelector('a?')
const e21 = document.querySelector('--')
const e22 = document.querySelector('a-b')
const e23 = document.querySelector('a-1-b')
const e24 = document.querySelector('A-1-B')
const e25 = document.querySelector('a_1-B')
const e26 = document.querySelector('div >')
const e27 = document.querySelector('^_^')
const e28 = document.querySelector('div, span')
const e29 = document.querySelector('div[, span')
const e30 = document.querySelector('div, span[')
const e31 = document.querySelector('div,')
const e32 = document.querySelector('div, .badge')
const e33 = document.querySelector('div, .')

type Tests = [
  Expect<Equal<typeof e1, Element | null>>,
  Expect<Equal<typeof e2, Element | null>>,
  Expect<Equal<typeof e3, Element | null>>,
  Expect<Equal<typeof e4, Element | null>>,
  Expect<Equal<typeof e5, never>>,
  Expect<Equal<typeof e6, never>>,
  Expect<Equal<typeof e7, never>>,
  Expect<Equal<typeof e8, never>>,
  Expect<Equal<typeof e9, Element | null>>,
  Expect<Equal<typeof e10, Element | null>>,
  Expect<Equal<typeof e11, never>>,
  Expect<Equal<typeof e12, never>>,
  Expect<Equal<typeof e13, never>>,
  Expect<Equal<typeof e14, HTMLDivElement | null>>,
  Expect<Equal<typeof e15, HTMLDivElement | null>>,
  Expect<Equal<typeof e16, HTMLDivElement | null>>,
  Expect<Equal<typeof e17, HTMLSpanElement | null>>,
  Expect<Equal<typeof e18, never>>,
  Expect<Equal<typeof e19, Element | null>>,
  Expect<Equal<typeof e20, never>>,
  Expect<Equal<typeof e21, Element | null>>,
  Expect<Equal<typeof e22, Element | null>>,
  Expect<Equal<typeof e23, Element | null>>,
  Expect<Equal<typeof e24, Element | null>>,
  Expect<Equal<typeof e25, Element | null>>,
  Expect<Equal<typeof e26, never>>,
  Expect<Equal<typeof e27, never>>,
  Expect<Equal<typeof e28, HTMLDivElement | HTMLSpanElement | null>>,
  Expect<Equal<typeof e29, never>>,
  Expect<Equal<typeof e30, never>>,
  Expect<Equal<typeof e31, never>>,
  Expect<Equal<typeof e32, HTMLDivElement | Element | null>>,
  Expect<Equal<typeof e33, never>>,
]

// @ts-expect-error
const a1: HTMLAnchorElement | null = document.querySelector('div')
// @ts-expect-error
const a2: HTMLAnchorElement | null = document.querySelector('div#app')

const results: Array<HTMLAnchorElement | null> = []
// @ts-expect-error
results.push(document.querySelector('div'))
// @ts-expect-error
results.push(document.querySelector('div#app'))
