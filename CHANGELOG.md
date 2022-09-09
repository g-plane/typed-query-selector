# Change Log

## Unreleased

- Export "strict" parser. (Close [#25](https://github.com/g-plane/typed-query-selector/issues/25))

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
