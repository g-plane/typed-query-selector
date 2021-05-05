# 🏷 Typed `querySelector`

`querySelector` and `querySelectorAll` functions with better typing
by leveraging TypeScript 4.1 template literal type.

## 💿 Install

```
npm i -D typed-query-selector
```

## 🍉 Usage

### Automatic shim

All you need to do is to import this module,
then the `querySelector` and `querySelectorAll` function will be enhanced.

This module only works at type level and doesn't have any runtime code.

```typescript
import 'typed-query-selector'

document.querySelector('div#app') // ==> HTMLDivElement

document.querySelector('div#app > form#login') // ==> HTMLFormElement

document.querySelectorAll('span.badge') // ==> NodeListOf<HTMLSpanElement>

anElement.querySelector('button#submit') // ==> HTMLButtonElement
```

The example above assumes you're using bundlers or build tools with transpilers,
however, sometimes this may not match your situation.
For example, running `tsc` or Babel out of bundlers.
In this case, you can import this library like this:

```typescript
import type {} from 'typed-query-selector'

document.querySelector('div#app') // ==> HTMLDivElement
```

This looks ugly but it works.

If you aren't going to use ES Modules you can modify your `tsconfig.json`,
however this is NOT recommended, unless you know what you're doing.

```json
{
  "compilerOptions": {
    "types": ["typed-query-selector"]
  }
}
```

### Strict mode

> Available in v2.3+

In strict mode, the selector parser will perform additional syntax checks on input string.
If there're syntax errors, return type will be `never` instead of `Element`.

Example usage:

```ts
import 'typed-query-selector/strict'

const element = document.querySelector('div[test') // return `never`
```

This feature won't be enabled by default and you can opt-in.
If you want to enable this, change import entry:

```diff
- import 'typed-query-selector'
+ import 'typed-query-selector/strict'
```

That's all. If you pass an invalid selector,
because it returns `never`, TypeScript will prevent you from
accessing properties/methods on element or using element at somewhere.

Note that it doesn't guarantee that it can detect every kind of syntax errors,
since such parser will become very complex and compilation performance may go bad.

### Use the parser

If you just want to use the selector parser itself, we've exported for you:

```typescript
import type { ParseSelector } from 'typed-query-selector/parser'

type MyElement = ParseSelector<'form#login'>
```

Please note that you should import `typed-query-selector/parser`, not `typed-query-selector`.
This is safe because this import doesn't patch to the `querySelector` and `querySelectorAll` function.

Sometimes, you may want to specify another fallback type (such as `HTMLElement`, not default `Element` type)
when failed to parse selector or failed to look up, you can pass a fallback type as the second type parameter:

> Available in v2.4+

```ts
import type { ParseSelector } from 'typed-query-selector/parser'

type MyElement = ParseSelector<'unknown-tag', HTMLElement> // ==> HTMLElement
```

## 💡 Supported Use Cases

### With class, ID, pseudo class or attribute

```typescript
import 'typed-query-selector'

document.querySelector('div.container') // ==> HTMLDivElement

document.querySelector('div#app') // ==> HTMLDivElement

document.querySelector('input[name=username]') // ==> HTMLInputElement

document.querySelector('input:first-child') // ==> HTMLInputElement
```

Even mix them:

```typescript
import 'typed-query-selector'

document.querySelector('input.form-control[name=username]') // ==> HTMLInputElement
```

And with `:is()` or `:where()`:

> Available in v2.5+

```typescript
import 'typed-query-selector'

document.querySelector(':is(div#id, span.class[k=v])') // ==> HTMLDivElement | HTMLSpanElement

document.querySelector(':where(div#id, span.class[k=v])') // ==> HTMLDivElement | HTMLSpanElement
```

### Combinators

```typescript
import 'typed-query-selector'

document.querySelector('body div') // ==> HTMLDivElement

document.querySelector('body > form') // ==> HTMLFormElement

document.querySelector('h1 + p') // ==> HTMLParagraphElement

document.querySelector('h2 ~ p') // ==> HTMLParagraphElement
```

### Grouping selectors

```typescript
import 'typed-query-selector'

document.querySelector('div, span') // ==> HTMLDivElement | HTMLSpanElement
```

### Fallback

#### Web Components

If you passed an unknown tag, it will fall back to `Element`,
but you can override it by specifying concrete type.

```typescript
import 'typed-query-selector'

document.querySelector('my-web-component') // ==> Element

document.querySelector<MyComponent>('my-web-component') // ==> MyComponent
```

#### Invalid selector

When passing an invalid selector which causes parsing error,
it will fall back to `Element`.

```typescript
import 'typed-query-selector'

document.querySelector('div#app >') // ==> Element

document.querySelector('div#app ?') // ==> Element
```

However, if you're using strict mode,
all `querySelector` calls above will return `never` type.
This can stop you from misusing it.

```ts
import 'typed-query-selector/strict'

const el = document.querySelector('div#app >')
el.className // TypeScript will report error when compiling
```

## 🔩 Technical Details

### Why returns `never` in strict mode?

In runtime, if you pass an invalid selector string to `querySelector` or
`querySelectorAll` function, it will throw an error instead of returning
`null` or `undefined` or anything else.
For details, please read [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html#never).

## 🔗 Related

- [Type Gymnastics](https://github.com/g-plane/type-gymnastics) - Collection of wonderful TypeScript type gymnastics code snippets.

## 📃 License

MIT License

Copyright (c) 2020-present Pig Fang
