- compiler vs non: messing up "Show Code" pos
- dev mode validate tokens, theme, font
- could do a pass on generated classnames to dedupe would help benchmarks
- static compilation can go further with variants because it knows they always only accept certain values... see mount-deep-tree
- <Theme name> needs to accept stripped `-light` `-dark` type
- basic styled() extraction => work liek props => <YStack />
- space => gap?
- fix parent variant types
- [number] (test Text numberOfLines)
- create small kitchen sink in expo to test
- fix kitchen sink
  - media query
  - hover/press
  - themes
  - shorthands
  - change theme

- escape hatch for html props `htmlProps` ?
- optimize regular styled() usage
- add: dev mode can add data-is to properties if you want
- pressStyle test
- variants [number] [any] would be nice
  - instead of any variant: { size: (x: typed) => {} } could be inferred? fully dynamic basically
- createComponent move most hooks into dynamic loaded features, see useFeatures
  - pressable, responderEvents, layout, press events, usePlatformMethods
- onLayout
- make styled() accept any component (see Input.tsx)
- fix // TODO comments
- gzip stuff on site
- use new react insert stylesheet hook
- [perf] no need to concat classname at compile className={} if not flattening because it happens in createComponent
- media based hoverStyle/pressStyle may need runtime equivalent!
- babel add displayname
- font weight tokens
- a way for font token size/weight/etc to be per-font

- make colors tree shakeable
