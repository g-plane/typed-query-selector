import type { Equal, Expect } from '@type-challenges/utils'
import type { ParseSelector, ParseSelectorToTagNames } from './parser'

type _Tests = [
  Expect<Equal<ParseSelectorToTagNames<''>, unknown>>,
  Expect<Equal<ParseSelectorToTagNames<'*'>, ['*']>>,
  Expect<Equal<ParseSelector<''>, Element>>,
  Expect<Equal<ParseSelector<'*'>, Element>>,
  Expect<Equal<ParseSelector<string>, Element>>,
  Expect<Equal<ParseSelector<'my-web-component'>, Element>>,
  Expect<Equal<ParseSelector<'.text-center'>, Element>>,
  Expect<Equal<ParseSelector<'#submit'>, Element>>,
  Expect<Equal<ParseSelector<'[type=email]'>, Element>>,
  Expect<Equal<ParseSelector<'body div'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'body section'>, HTMLElement>>,
  Expect<Equal<ParseSelector<'form > button'>, HTMLButtonElement>>,
  Expect<Equal<ParseSelector<'h1 ~ p'>, HTMLParagraphElement>>,
  Expect<Equal<ParseSelector<'h1 + p'>, HTMLParagraphElement>>,
  Expect<Equal<ParseSelector<' h2 '>, HTMLHeadingElement>>,
  Expect<Equal<ParseSelector<'\th2 '>, HTMLHeadingElement>>,
  Expect<Equal<ParseSelector<'\nh2 '>, HTMLHeadingElement>>,
  Expect<Equal<ParseSelector<'\r\nh2 '>, HTMLHeadingElement>>,
  Expect<
    Equal<
      ParseSelector<`
    h2
  `>,
      HTMLHeadingElement
    >
  >,
  Expect<Equal<ParseSelector<'div, span'>, HTMLDivElement | HTMLSpanElement>>,
  Expect<Equal<ParseSelector<'span.text-center'>, HTMLSpanElement>>,
  Expect<Equal<ParseSelector<'button#submit'>, HTMLButtonElement>>,
  Expect<Equal<ParseSelector<'input[type=email]'>, HTMLInputElement>>,
  Expect<Equal<ParseSelector<'.wrapper div.box'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div.box >'>, Element>>,
  Expect<Equal<ParseSelector<'div.box +'>, Element>>,
  Expect<Equal<ParseSelector<'div.box ~'>, Element>>,
  Expect<Equal<ParseSelector<'div.box ?'>, Element>>,
  Expect<
    Equal<ParseSelector<'.wrapper div.box, .sidebar div.alert'>, HTMLDivElement>
  >,
  Expect<
    Equal<
      ParseSelector<`
				input,
				button.js-comment-cancel-button
			`>,
      HTMLInputElement | HTMLButtonElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<`\n  input,\n  button.js-comment-cancel-button\n  `>,
      HTMLInputElement | HTMLButtonElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'.container > #sign-up-form > div#notice, span.tip'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<Equal<ParseSelector<'div[data-key~=value]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[data-key|=value]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[data-key^=value]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[data-key$=value]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[data-key*=value]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[data-key="value"i]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[data-key="value"s]'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'div[]'>, Element>>,
  Expect<
    Equal<ParseSelector<'link[type="application/atom+xml"]'>, HTMLLinkElement>
  >,
  Expect<
    Equal<ParseSelector<'input[aria-label="Full name"]'>, HTMLInputElement>
  >,
  Expect<
    Equal<ParseSelector<`input[aria-label='Full name']`>, HTMLInputElement>
  >,
  Expect<Equal<ParseSelector<'input:last-child'>, HTMLInputElement>>,
  Expect<Equal<ParseSelector<'input:not([type=email])'>, HTMLInputElement>>,
  Expect<
    Equal<ParseSelector<'textarea[name="comment[body]"]'>, HTMLTextAreaElement>
  >,
  Expect<
    Equal<
      ParseSelector<'textarea[name="comment[[[[body]]]]"]'>,
      HTMLTextAreaElement
    >
  >,
  Expect<
    Equal<ParseSelector<'textarea[name="comment[\\"]"]'>, HTMLTextAreaElement>
  >,
  Expect<
    Equal<ParseSelector<"textarea[name='comment[body]']">, HTMLTextAreaElement>
  >,
  Expect<
    Equal<ParseSelector<"textarea[name='comment[\\']']">, HTMLTextAreaElement>
  >,
  Expect<Equal<ParseSelector<'div[data-d] button[data-b]'>, HTMLButtonElement>>,
  Expect<Equal<ParseSelector<'div.'>, Element>>,
  Expect<Equal<ParseSelector<'div#'>, Element>>,
  Expect<Equal<ParseSelector<'div:'>, Element>>,
  Expect<Equal<ParseSelector<'div,'>, Element>>,
  Expect<Equal<ParseSelector<'|div'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'a|div'>, HTMLDivElement>>,
  Expect<Equal<ParseSelector<'*|div'>, HTMLDivElement>>,
  Expect<
    Equal<
      ParseSelector<'div#test > span, div > button.test'>,
      HTMLSpanElement | HTMLButtonElement
    >
  >,
  Expect<Equal<ParseSelector<'abc', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'div#', HTMLElement>, HTMLElement>>,
  Expect<
    Equal<ParseSelector<':is(div, span)'>, HTMLDivElement | HTMLSpanElement>
  >,
  Expect<
    Equal<
      ParseSelector<':is(div#id, span.cls)'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':is(div[key], span[key=value])'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'body :is(div, span)'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'body :is(div#id, span.cls)'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<Equal<ParseSelector<':is(div, span) p'>, HTMLParagraphElement>>,
  Expect<Equal<ParseSelector<':is(div, span) p.cls#id'>, HTMLParagraphElement>>,
  Expect<
    Equal<ParseSelector<':is(div, span) p[key=value]'>, HTMLParagraphElement>
  >,
  Expect<
    Equal<
      ParseSelector<'main.container :is(div, span) p[key=value]'>,
      HTMLParagraphElement
    >
  >,
]
