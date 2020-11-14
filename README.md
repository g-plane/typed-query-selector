# 🏷 Typed `querySelector`

`querySelector` and `querySelectorAll` functions with better typing
by leveraging TypeScript 4.1 template literal type.

## 💿 Install

```
npm i typed-query-selector
```

## 🍉 Usage

```typescript
import { querySelector, querySelectorAll } from 'typed-query-selector'

querySelector('div#app') // ==> HTMLDivElement

querySelector('div#app > form#login') // ==> HTMLFormElement

querySelectorAll('span.badge') // ==> NodeListOf<HTMLSpanElement>
```

If you don't want to query from `document`,
pass your base element as second parameter.

```typescript
import { querySelector, querySelectorAll } from 'typed-query-selector'

querySelector('form#login', container) // ==> HTMLFormElement

querySelectorAll('span.badge', container) // ==> NodeListOf<HTMLSpanElement>
```

If you just want to use the selector parser itself, we've exported for you:

```typescript
import type { ParseSelector } from 'typed-query-selector'

type MyElement = ParseSelector<'form#login'>
```

## 💡 Supported Use Cases

### With class, ID or attribute

```typescript
import { querySelector } from 'typed-query-selector'

querySelector('div.container') // ==> HTMLDivElement

querySelector('div#app') // ==> HTMLDivElement

querySelector('input[name=username]') // ==> HTMLInputElement
```

Even mix them:

```typescript
import { querySelector } from 'typed-query-selector'

querySelector('input.form-control[name=username]') // ==> HTMLInputElement
```

### Combinators

```typescript
import { querySelector } from 'typed-query-selector'

querySelector('body div') // ==> HTMLDivElement

querySelector('body > form') // ==> HTMLFormElement

querySelector('h1 + p') // ==> HTMLParagraphElement

querySelector('h2 ~ p') // ==> HTMLParagraphElement
```

### Grouping selectors

```typescript
import { querySelector } from 'typed-query-selector'

querySelector('div, span') // ==> HTMLDivElement | HTMLSpanElement
```

### Fallback

#### Web Components

If you passed an unknown tag, it will fall back to `Element`,
but you can override it by specifying concrete type.

```typescript
import { querySelector } from 'typed-query-selector'

querySelector('my-web-component') // ==> Element

querySelector<MyComponent>('my-web-component') // ==> MyComponent
```

#### Invalid selector

When passing an invalid selector which causes parsing error,
it will fall back to `Element`.

```typescript
import { querySelector } from 'typed-query-selector'

querySelector('div#app >') // ==> Element

querySelector('div#app ?') // ==> Element
```

## 📃 License

MIT License

Copyright (c) 2020-present Pig Fang
