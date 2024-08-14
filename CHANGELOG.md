# Change Log

## Unreleased

- Fixed parsing pseudo element selectors.

## v2.11.4

- Fixed parsing unclosed attribute selector (such as `a[href`).
- Fixed parsing bare pseudo class or element selectors.

## v2.11.3

- Fixed for TypeScript 5.5.

## v2.11.2

- Fixed handling `unknown` incorrectly. (Fix [#36](https://github.com/g-plane/typed-query-selector/issues/36))

## v2.11.1

- Fixed for TypeScript 5.4. (Fix [#35](https://github.com/g-plane/typed-query-selector/issues/35))

## v2.11.0

- Added `.js` extension in import statements.

## v2.10.1

- Setup publishing on GitHub Actions. No code changes.

## v2.10.0

- Reverted to fallback to `Element`, not `HTMLElement`.

## v2.9.2

- Fixed regression of specifying fallback type. (Fix [#33](https://github.com/g-plane/typed-query-selector/issues/33))

## v2.9.1

- Fixed some cases of `:is()` and `:where()` by rewriting the expanding logic.
- Fixed template with dynamic interpolation.

## v2.9.0

- Added fallback support to strict parser.
- Fallback to `HTMLElement` for `HTMLElement`, `Document` and `DocumentFragment`. (Close [#29](https://github.com/g-plane/typed-query-selector/issues/29))

## v2.8.1

- Fixed passing `string` type as argument in strict parser.
- Fixed some cases of `:is()` and `:where()`.

## v2.8.0

- Export "strict" parser. (Close [#25](https://github.com/g-plane/typed-query-selector/issues/25))
- Removed exported private type `ParseSelectorToTagNames`.

## v2.7.0

- Require TypeScript 4.7.
- Fixed invalid result after expanding `:is` or `:where` function. (Fix [#23](https://github.com/g-plane/typed-query-selector/issues/23))

## v2.6.1

- Fixed support of TypeScript 4.5.

## v2.6.0

- Support `.closest()` method on `Element`. (Close [#16](https://github.com/g-plane/typed-query-selector/issues/16))

## v2.5.3

- Fixed a regression bug which is introduced in v2.5.2.

## v2.5.2

- Fixed attribute syntax in `:is()` and `:where()`. (Fix [#15](https://github.com/g-plane/typed-query-selector/issues/15))

## v2.5.1

- Fixed regression bug: fallback type doesn't work. (Fix [#14](https://github.com/g-plane/typed-query-selector/issues/14))

## v2.5.0

- Added support for `:is()` and `:where()` pseudo-classes. (Fix [#13](https://github.com/g-plane/typed-query-selector/issues/13))

## v2.4.1

- Fixed return type in shim can be cast.

## v2.4.0

- Fixed errors with disabled `skipLibCheck`.
- Allowed to specify custom fallback type when failed to parse selector.
  (only for `ParseSelector` type, not for `querySelector` function)

## v2.3.0

- Treat empty string as syntax error.
- Treat empty attribute `[]` as syntax error.
- Added namespace prefix support.
- Added strict mode.
- Fixed precedences between combinators and groupings.

## v2.2.4

- Process quotes separately.
- Added simple selector syntax check.

## v2.2.3

- Refactor types.

## v2.2.2

- Fixed possible OOM.
- Fixed arbitrary content in attribute.

## v2.2.1

- Fixed multiline with starting tabs or spaces.

## v2.2.0

- Support tabs in selector string.
- Support pseudo-classes in selector.

## v2.1.1

- Fixed more kinds of whitespace characters in selector.
- Fixed combinator characters in attribute of selector.

## v2.1.0

- Added `types` field to package.json.

## v2.0.0

- **Breaking change**: `querySelector` and `querySelectorAll` from this package are removed.
  You just need to import this package then use `document.querySelector` normally.
  Check out readme for detailed usage.

## v1.1.0

- Publish declaration map.

## v1.0.0

- Initial release.
