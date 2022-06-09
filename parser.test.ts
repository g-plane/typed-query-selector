import type { Equal, Expect, NotEqual } from '@type-challenges/utils'
import type { ParseSelector, ParseSelectorToTagNames } from './parser'

declare class DefinedWebComponent extends HTMLElement {
  #brand
}

declare global {
  interface HTMLElementTagNameMap {
    'defined-web-component': DefinedWebComponent
  }
}

type _Tests = [
  Expect<Equal<ParseSelectorToTagNames<''>, unknown>>,
  Expect<Equal<ParseSelectorToTagNames<'*'>, ['*']>>,
  Expect<Equal<ParseSelector<''>, Element>>,
  Expect<Equal<ParseSelector<'*'>, Element>>,
  Expect<Equal<ParseSelector<string>, Element>>,
  Expect<Equal<ParseSelector<'my-web-component'>, Element>>,
  Expect<Equal<ParseSelector<'defined-web-component'>, DefinedWebComponent>>,
  Expect<NotEqual<ParseSelector<'defined-web-component'>, HTMLElement>>,
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
  Expect<
    Equal<
      ParseSelector<'a[href*="/issues"][href*="is%3Apr"]'>,
      HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<`
		a[href*="/issues"]:not([href*="sort%3A"]):not(.issues-reset-query),
    a[href*="/pulls" ]:not([href*="sort%3A"]):not(.issues-reset-query)
	`>,
      HTMLAnchorElement
    >
  >,
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
  Expect<
    Equal<ParseSelector<':where(div, span)'>, HTMLDivElement | HTMLSpanElement>
  >,
  Expect<
    Equal<
      ParseSelector<':where(div#id, span.cls)'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':where(div[key], span[key=value])'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'body :where(div, span)'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'body :where(div#id, span.cls)'>,
      HTMLDivElement | HTMLSpanElement
    >
  >,
  Expect<Equal<ParseSelector<':where(div, span) p'>, HTMLParagraphElement>>,
  Expect<
    Equal<ParseSelector<':where(div, span) p.cls#id'>, HTMLParagraphElement>
  >,
  Expect<
    Equal<ParseSelector<':where(div, span) p[key=value]'>, HTMLParagraphElement>
  >,
  Expect<
    Equal<
      ParseSelector<'main.container :where(div, span) p[key=value]'>,
      HTMLParagraphElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':is(button.btn, a.btn):not([key=value]):not(.class)'>,
      HTMLButtonElement | HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':is(div.cls, span#id) :is(button.btn, a.btn)'>,
      HTMLButtonElement | HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':is(div.cls, span#id) :where(button.btn, a.btn)'>,
      HTMLButtonElement | HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':where(div.cls, span#id) :is(button.btn, a.btn)'>,
      HTMLButtonElement | HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<':where(div.cls, span#id) :where(button.btn, a.btn)'>,
      HTMLButtonElement | HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'p :is(div.cls, span#id) :is(button.btn, a.btn) h1'>,
      HTMLHeadingElement
    >
  >,
  Expect<Equal<ParseSelector<'p:is(.a, .b)'>, HTMLParagraphElement>>,
  Expect<Equal<ParseSelector<'p:is(.a, .b):is(.c, .d)'>, HTMLParagraphElement>>,
  Expect<
    Equal<ParseSelector<'p:not(.a, .b):is(.c, .d)'>, HTMLParagraphElement>
  >,
  Expect<
    Equal<ParseSelector<'p:is(.a, .b):not(.c, .d)'>, HTMLParagraphElement>
  >,
  Expect<Equal<ParseSelector<'a:is([data-a], [data-b])'>, HTMLAnchorElement>>,
  Expect<
    Equal<
      ParseSelector<'a:is([data-selected-links~="pulse"], [data-selected-links~="security"])'>,
      HTMLAnchorElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'input:is([name="commit_title"], [name="rgh-pr-check-waiter"])'>,
      HTMLInputElement
    >
  >,
  Expect<Equal<ParseSelector<'a:has(> img)'>, HTMLAnchorElement>>,
  Expect<Equal<ParseSelector<'h1:has(+ p)'>, HTMLHeadingElement>>,
  Expect<Equal<ParseSelector<'', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'abc', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'div#', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'#id', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'.class', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'.class[k=v]', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'div .class', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'span + .class', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'span ~ .class', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'span > .class', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<'[key=value]', HTMLElement>, HTMLElement>>,
  Expect<Equal<ParseSelector<':scope > :not(a)', HTMLElement>, HTMLElement>>,
  Expect<
    Equal<ParseSelector<'[aria-checked="true"]', HTMLElement>, HTMLElement>
  >,
  Expect<Equal<ParseSelector<'[data-scope]', HTMLElement>, HTMLElement>>,
  Expect<
    Equal<
      ParseSelector<':is(a, button).x'>,
      HTMLAnchorElement | HTMLButtonElement
    >
  >,
  Expect<
    Equal<
      ParseSelector<'.x:is(a, button)'>,
      HTMLAnchorElement | HTMLButtonElement
    >
  >,
  Expect<Equal<ParseSelector<'div .x:is(a, button) h2'>, HTMLHeadingElement>>,
  Expect<
    Equal<
      ParseSelector<'div:where(.a, .b), .x:is(a, button), h2#x'>,
      | HTMLDivElement
      | HTMLAnchorElement
      | HTMLButtonElement
      | HTMLHeadingElement
    >
  >,
]
