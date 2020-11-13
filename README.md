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

If you just want to use the selector parser itself, we exported for you:

```typescript
import type { ParseSelector } from 'typed-query-selector'

type MyElement = ParseSelector<'form#login'>
```

## 📃 License

MIT License

Copyright (c) 2020-present Pig Fang
