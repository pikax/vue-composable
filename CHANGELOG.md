# [1.0.0-beta.15](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2021-01-16)

### Bug Fixes

- **i18n:** do not import default when importing a json as a module ([#732](https://github.com/pikax/vue-composable/issues/732)) ([1ef0912](https://github.com/pikax/vue-composable/commit/1ef09126e507d1464176f0ad059fc6a01d1eda4c))

# [1.0.0-beta.14](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2021-01-06)

### Features

- **refDebounced:** support passing a ref as a value ([f8a26b9](https://github.com/pikax/vue-composable/commit/f8a26b96ac1ac4c043283c73cd557223a842c954))
- **useValidation:** add `toObject` ([#723](https://github.com/pikax/vue-composable/issues/723)) ([28e9fd3](https://github.com/pikax/vue-composable/commit/28e9fd3d00d96293ec8bca0b9a8f1aa85072fb25))

# [1.0.0-beta.13](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2021-01-01)

### Bug Fixes

- **cancellablePromise:** `cancelled` not set to false when executing ([d1b9ef9](https://github.com/pikax/vue-composable/commit/d1b9ef9437d5f2d20e6ea8d9af2f8377477533b3)), closes [#704](https://github.com/pikax/vue-composable/issues/704)

### Features

- **useClipboard:** added a new composable ([#709](https://github.com/pikax/vue-composable/issues/709)) ([e2d12c9](https://github.com/pikax/vue-composable/commit/e2d12c95e10536e012974c0d250ba1d469c70c02))

# [1.0.0-beta.12](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2020-10-31)

### Features

- add `useRefDebounced` ([#579](https://github.com/pikax/vue-composable/issues/579)) ([42c027a](https://github.com/pikax/vue-composable/commit/42c027ab5cba7f2c27fc3d979287f10b7fb352b0))
- **injectFactory:** use `inject` with treatDefaultAsFactory: true ([2b378c0](https://github.com/pikax/vue-composable/commit/2b378c0c11d4c1afadc69c7586fd9b09dd4be1d8))
- **onScroll:** add `scrollBy` and `scrollIntoView` methods ([3f6e559](https://github.com/pikax/vue-composable/commit/3f6e559e5b21751d391691ee61c3af1f434e561e)), closes [#640](https://github.com/pikax/vue-composable/issues/640)

# [1.0.0-beta.11](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2020-10-11)

### Features

- add `useMouseDistanceFromElement` ([#578](https://github.com/pikax/vue-composable/issues/578)) ([a09cb69](https://github.com/pikax/vue-composable/commit/a09cb69d1b847f5824ad395309867c41205bd5b3))
- **onMouseMove:** add `pageX` and `pageY` properties ([ed4788d](https://github.com/pikax/vue-composable/commit/ed4788d99376b550cd2e17578895ecb9637a5c91))
- remove devtools code from production build ([916187e](https://github.com/pikax/vue-composable/commit/916187efc823032afb6bea31b0123b034b0b8ce5))

# [1.0.0-beta.10](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.8...v1.0.0-beta.10) (2020-09-15)

### Features

- **devtools:** add `useDevtoolsComponentState` ([#570](https://github.com/pikax/vue-composable/issues/570)) ([aff632e](https://github.com/pikax/vue-composable/commit/aff632eb9297c2207367d307a2aae99b86f615d6))

# [1.0.0-beta.8](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2020-09-14)

### Bug Fixes

- typo on `useDevtoolsInspector` ([#565](https://github.com/pikax/vue-composable/issues/565)) ([11274ac](https://github.com/pikax/vue-composable/commit/11274ac200e991165f6a534675b360f8220c33ae))

# [1.0.0-beta.7](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2020-09-13)

### Bug Fixes

- **devtools:** return the new created callback ([9ef375a](https://github.com/pikax/vue-composable/commit/9ef375ac546705ad26f1395e4410eef1b1a1fdaa))

# [1.0.0-beta.6](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2020-09-13)

### Bug Fixes

- **valueSync:** `vue3` prevent recursive error when assigning a new `ref` to a list ([3350183](https://github.com/pikax/vue-composable/commit/3350183d784a215a354c0614fbca39d5eb3d0df4))

### Features

- devtools support ([#563](https://github.com/pikax/vue-composable/issues/563)) ([f726bf4](https://github.com/pikax/vue-composable/commit/f726bf4d9a7585e816d8429104d87beec6ac7fee))

# [1.0.0-beta.5](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2020-08-28)

### Bug Fixes

- **axios:** add postinstall script for @vue-composable/axios ([8f7dab4](https://github.com/pikax/vue-composable/commit/8f7dab40695798a0039be0acb29b9ff236c2f918))

# [1.0.0-beta.4](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2020-08-15)

### Features

- **cancellablePromise:** automatically cancel promise on unmount ([#517](https://github.com/pikax/vue-composable/issues/517)) ([b18b21d](https://github.com/pikax/vue-composable/commit/b18b21da4741fc53a8755cf3a81bd3484bc93fca))
- **fetch:** automatically cancel on going request on unmount ([#516](https://github.com/pikax/vue-composable/issues/516)) ([a030179](https://github.com/pikax/vue-composable/commit/a030179c472459f3d33e8f8adba3641009c8f223))
- **validation:** add to $errors if the validator has $message ([#521](https://github.com/pikax/vue-composable/issues/521)) ([7e79920](https://github.com/pikax/vue-composable/commit/7e79920a9f09c5bba00a482340d0f47d665d05d8))

### Reverts

- build(deps-dev): bump @vue/\* ([6dc3650](https://github.com/pikax/vue-composable/commit/6dc3650003f5873bf316c39e4d4f6a892f09c09d))

# [1.0.0-beta.3](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-07-27)

### Features

- **useInterval:** add `useInterval` composable ([#343](https://github.com/pikax/vue-composable/issues/343)) ([499908e](https://github.com/pikax/vue-composable/commit/499908eb053c78c1eabfc9856a977f43ae312c83))
- **useOnOutsidePress:** add `useOnOutsidePress` composable ([#383](https://github.com/pikax/vue-composable/issues/383)) ([b8fa41f](https://github.com/pikax/vue-composable/commit/b8fa41f2ffaecd6133562aab77285d559830e032))
- **useScrollLock:** add useScrollLock composable ([#330](https://github.com/pikax/vue-composable/issues/330)) ([0da2f44](https://github.com/pikax/vue-composable/commit/0da2f44adaaecedcc6336d08264d4984b5d23333))
- **useTimeline:** add `useTimeline` composable ([#342](https://github.com/pikax/vue-composable/issues/342)) ([618842b](https://github.com/pikax/vue-composable/commit/618842be6aeb3d195dd57b31e1586f550655104b))
- **useValueSync:** add `useValueSync` composable ([#348](https://github.com/pikax/vue-composable/issues/348)) ([04f4bbf](https://github.com/pikax/vue-composable/commit/04f4bbf5ea211419ed729a9cd506ed5ea553956d))

# [1.0.0-beta.2](https://github.com/pikax/vue-composable/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-07-24)

### Features

- add `current` when tailwindcss config contains only number bp ([#475](https://github.com/pikax/vue-composable/issues/475)) ([202f53a](https://github.com/pikax/vue-composable/commit/202f53a7d738c541b6678e3781fc72bb9455021b))

# [1.0.0-beta.1](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.37...v1.0.0-beta.1) (2020-07-18)

### Features

- single package v2 and v3 ([#456](https://github.com/pikax/vue-composable/issues/456)) ([bb7eaff](https://github.com/pikax/vue-composable/commit/bb7eaff8be43ddf1a9d2b37f9b3fcbf3bc003922))

# [1.0.0-dev.37](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.36...v1.0.0-dev.37) (2020-07-18)

### Bug Fixes

- **breakpointTailwindCSS:** generate correct matchMedia when using tailwindconfig ([#455](https://github.com/pikax/vue-composable/issues/455)) ([c2d3549](https://github.com/pikax/vue-composable/commit/c2d354965ac85d99d865c9b6f516c91df88f183d))

### Features

- **useIntlDateTimeFormat:** add useIntlDateTimeFormat composable ([#329](https://github.com/pikax/vue-composable/issues/329)) ([8ab953f](https://github.com/pikax/vue-composable/commit/8ab953fe9512515d7fa208ca954b1415de46c47a))

# [1.0.0-dev.36](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.35...v1.0.0-dev.36) (2020-06-14)

### Bug Fixes

- **useOnResize:** allow to retrieve the size on mount if ref is passed ([e52dadb](https://github.com/pikax/vue-composable/commit/e52dadbb28293b1ae4e9c2e93c528afaa923535a)), closes [#364](https://github.com/pikax/vue-composable/issues/364)

# [1.0.0-dev.35](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.34...v1.0.0-dev.35) (2020-06-13)

### Features

- **@vue/composition-api:** update to 0.6.2 ([0a24556](https://github.com/pikax/vue-composable/commit/0a24556c5234cce57a12751210eedf0c0b9961d5))
- **@vue/composition-api:** updated to 0.6.0 ([c554c55](https://github.com/pikax/vue-composable/commit/c554c55942a8730a9ff1b764c610e7589c419db9))
- **useUndo:** add `useUndo` composable ([#347](https://github.com/pikax/vue-composable/issues/347)) ([63aa3f0](https://github.com/pikax/vue-composable/commit/63aa3f0bf4a7ba2f76c13df876ff0c02cc599eda))

# [1.0.0-dev.34](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.33...v1.0.0-dev.34) (2020-06-03)

### Features

- **useBreakpointTailwind:** use injectFactory instead of inject ([e8d0e9c](https://github.com/pikax/vue-composable/commit/e8d0e9c338a46ec940ef5b3a2c9d2251ff38a3a4))
- **vmodel:** add useVModel composable ([#337](https://github.com/pikax/vue-composable/issues/337)) ([f703908](https://github.com/pikax/vue-composable/commit/f703908731c0925cb16e89f24df533e1b9ddfa21))
- add `injectFactory` composable ([#324](https://github.com/pikax/vue-composable/issues/324)) ([f571463](https://github.com/pikax/vue-composable/commit/f5714633553d7b5fe39b2c910bad504d292ee874))
- **useHydration:** add useHydration composable ([5af0bc7](https://github.com/pikax/vue-composable/commit/5af0bc759dd582ab9a480cba3c96da8625481acb))

# [1.0.0-dev.33](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.32...v1.0.0-dev.33) (2020-05-31)

### Features

- **useTitle:** useTitle composable ([#331](https://github.com/pikax/vue-composable/issues/331)) ([42670d3](https://github.com/pikax/vue-composable/commit/42670d3d1ec416f1a36e418789428817b36d4070))
- add `__SSR__` from `process.env.SSR === 'true'` ([ebe2f43](https://github.com/pikax/vue-composable/commit/ebe2f4365fd63b0b555a01cb75ddd00180cbffac))
- improve return types and update deps, fixing outstanding PRs ([#316](https://github.com/pikax/vue-composable/issues/316)) ([c2e0afc](https://github.com/pikax/vue-composable/commit/c2e0afc016e983e4b88b1799ee399cd7de58ef80))

# [1.0.0-dev.32](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.29...v1.0.0-dev.32) (2020-04-22)

### Bug Fixes

- Build wrongly outputting `__VUE_2__` env variable instead of replacing

### Features

- Export `COMMIT`, `VERSION` and `VUE_VERSION` in the `index.ts`

# [1.0.0-dev.29](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.21...v1.0.0-dev.29) (2020-04-22)

### Bug Fixes

- 3.0.0-dev.26 fix build ([6e9380b](https://github.com/pikax/vue-composable/commit/6e9380b0c71558637aa51085a0afab5e0df8f0b6))
- typings and publish script ([ac9e78f](https://github.com/pikax/vue-composable/commit/ac9e78f3de623852953c04f3497fddeb3ce0e247))

### Features

- add makeAxios ([#248](https://github.com/pikax/vue-composable/issues/248)) ([4ae8cc5](https://github.com/pikax/vue-composable/commit/4ae8cc5989f836a9ed079a5408b75f04e8d155b7))
- add useShare composable ([#253](https://github.com/pikax/vue-composable/issues/253)) ([8d842fc](https://github.com/pikax/vue-composable/commit/8d842fcf41d1ced0a8818c9040afe1f93c982ef6))
- merge packages and build and test for composition-api plugin and v3 ([#239](https://github.com/pikax/vue-composable/issues/239)) ([36c8b57](https://github.com/pikax/vue-composable/commit/36c8b571365c066cac48d5a689a678f34df91d5f)), closes [#75](https://github.com/pikax/vue-composable/issues/75)

# [1.0.0-dev.21](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.20...v1.0.0-dev.21) (2020-04-13)

### Features

- intl added numberformat and currencyFormat ([#191](https://github.com/pikax/vue-composable/issues/191)) ([5e5ff20](https://github.com/pikax/vue-composable/commit/5e5ff20b1a6e0b992635cc994a12faa5f9c0a114))

# [1.0.0-dev.20](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.18...v1.0.0-dev.20) (2020-04-06)

## Types

- fixed return type for [useWorkerFunction](https://pikax.me/vue-composable/composable/web/workerFunction)

# [1.0.0-dev.18](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.17...v1.0.0-dev.18) (2020-04-06)

### Features

- webWorkerFunction ([#203](https://github.com/pikax/vue-composable/issues/203)) ([e4c9da9](https://github.com/pikax/vue-composable/commit/e4c9da97a8c58a1854f069a61121aa439693b6e8))

# [1.0.0-dev.17](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.16...v1.0.0-dev.17) (2020-04-05)

## Changes

- [fetch](https://pikax.me/vue-composable/composable/web/fetch) - fix parameter typing and tweak API
- [event][https://pikax.me/vue-composable/composable/event/event.html] - improve typing
- [path](https://pikax.me/vue-composable/composable/format/path) - Improve [array path access](https://pikax.me/vue-composable/composable/format/path.html#access) and add dev warnings
- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Allow to have factory based locale messages
- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Added console warnings when removing locales
- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Improve overriding locales
- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Setting new locale if the current locale is removed
- update peer dependency to [composition-api@0.5.0](https://github.com/vuejs/composition-api)

## Added

- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Added `$tc`, same as `$t` but returns a string, sugar for usage in the template.

## Fixes

- [useValidation] - Fix tracking of `$value` when is not `ref`
- [TailwindCSS](https://pikax.me/vue-composable/composable/breakpoint/breakpointTailwindCSS) - improve typings and fix bug when sending custom breakpoints

# [1.0.0-dev.16](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.15...v1.0.0-dev.16) (2020-03-27)

### Bug Fixes

- stop force-updating css variables ([#178](https://github.com/pikax/vue-composable/issues/178)) ([3b606c7](https://github.com/pikax/vue-composable/commit/3b606c7117fba3870fffb0719e9da017f387b7fa))

### Features

- execute promise immediately **BREAKING CHANGE** ([#197](https://github.com/pikax/vue-composable/issues/197)) ([57c24d1](https://github.com/pikax/vue-composable/commit/57c24d1febc0d48b8625b248792d1793a6a2aa02)), closes [#194](https://github.com/pikax/vue-composable/issues/194)
- Only update usePromise.result when the promise is complete ([#190](https://github.com/pikax/vue-composable/issues/190)) ([dcfbd9c](https://github.com/pikax/vue-composable/commit/dcfbd9cbfeb70c74d2fae25a688df5c90e93358c))

# [1.0.0-dev.15](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.14...v1.0.0-dev.15) (2020-03-09)

### Bug Fixes

- **i18n:** bug loading the default locale correctly ([8c2ee07](https://github.com/pikax/vue-composable/commit/8c2ee07d0cd20c57c5117318236bfee947e528f9)), closes [#167](https://github.com/pikax/vue-composable/issues/167)

# [1.0.0-dev.14](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.13...v1.0.0-dev.14) (2020-03-05)

### Features

- cssVariables ([#160](https://github.com/pikax/vue-composable/issues/160)) ([f9049dd](https://github.com/pikax/vue-composable/commit/f9049dd01b7f9ccae662c69dd5d1dfb98f36d638))

# [1.0.0-dev.13](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.12...v1.0.0-dev.13) (2020-02-27)

## Breaking change

- [localStorage](https://pikax.me/vue-composable/composable/storage/localStorage): can only keep one `ref` per key!

# [1.0.0-dev.12](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.11...v1.0.0-dev.12) (2020-02-27)

### Features

- **onScroll:** add scrollTopTo and scrollLeftTo functions and watch scrollTop and ScrollLeft refs ([c003669](https://github.com/pikax/vue-composable/commit/c0036694fcecd8485fad8c3daef27545a6f48a33))

# [1.0.0-dev.11](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.10...v1.0.0-dev.11) (2020-02-24)

### Features

- **core:** add i18n ([#152](https://github.com/pikax/vue-composable/issues/152)) ([8cfa77b](https://github.com/pikax/vue-composable/commit/8cfa77b2bdcb1281a805c8c059efe08a7812d50c))

# [1.0.0-dev.10](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.9...v1.0.0-dev.10) (2020-02-23)

### Features

- added project logo ([#147](https://github.com/pikax/vue-composable/issues/147)) ([122fb18](https://github.com/pikax/vue-composable/commit/122fb18e2fb48a9ea6edfb85cf2cfa4b00f26ff4))
- **format:** add useFormat ([#141](https://github.com/pikax/vue-composable/issues/141)) ([f3d4a31](https://github.com/pikax/vue-composable/commit/f3d4a318ce25aa3384b9b63d83bb9c1d879a7b59))
- **web:** added breakpointChrome and breakpointTailwindCSS ([#132](https://github.com/pikax/vue-composable/issues/132)) ([923e7de](https://github.com/pikax/vue-composable/commit/923e7de0d545e4bb8a66bb28b67135aa3e90ecda))
- **web:** improve tailwind breakpoints ([42b12be](https://github.com/pikax/vue-composable/commit/42b12be796f4145cf1f5931315bb1f552a60793e))

# [1.0.0-dev.9](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.8...v1.0.0-dev.9) (2020-02-07)

### Features

- **fetch:** add abortController and allow execute when called with options ([#130](https://github.com/pikax/vue-composable/issues/130)) ([275df33](https://github.com/pikax/vue-composable/commit/275df336e46c93722b9fbf1b065227b8f7dc7bd2))
- **web:** allow onScroll to default to window, if no argument is passed and expose scrollTO ([27bd03b](https://github.com/pikax/vue-composable/commit/27bd03bf20e04b16e7aae341ba8004376df93833))

# [1.0.0-dev.8](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.7...v1.0.0-dev.8) (2020-02-04)

### Bug Fixes

- **docs:** remove setInterval when bulding docs ([23ed997](https://github.com/pikax/vue-composable/commit/23ed9971a4c51ac161e2d8981cac71ae6a3f0ef3))

### Features

- add geolocation API ([#86](https://github.com/pikax/vue-composable/issues/86)) ([7ebf12d](https://github.com/pikax/vue-composable/commit/7ebf12d1bfbc2cd72eee47ab812dcec348915f8a))
- add nuxtJS and SSR support ([#109](https://github.com/pikax/vue-composable/issues/109)) ([4d73885](https://github.com/pikax/vue-composable/commit/4d73885e065994a3ad46998345ebe3a14cfcaa17))
- useBroadcastChannel, refShared and useSharedRef ([#104](https://github.com/pikax/vue-composable/issues/104)) ([ebf33e1](https://github.com/pikax/vue-composable/commit/ebf33e19295c6c7fc92046da14413c0793e437ff))
- **axios:** allow calling useAxios.exec with string ([58b11ba](https://github.com/pikax/vue-composable/commit/58b11bad4c363c028468d0e832c72518e56387ef))

# [1.0.0-dev.7](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.6...v1.0.0-dev.7) (2020-01-19)

## Bug Fixes

- Fix readme storage links

# [1.0.0-dev.6](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.4...v1.0.0-dev.6) (2020-01-19)

### Features

- add language ([#87](https://github.com/pikax/vue-composable/issues/87)) ([a48af30](https://github.com/pikax/vue-composable/commit/a48af30a68c19891e95cb7739276e6f0b7b09a48))
- add online ([#89](https://github.com/pikax/vue-composable/issues/89)) ([c47b7e7](https://github.com/pikax/vue-composable/commit/c47b7e7a15aeaa7de0aae1ef2768029b233fc6b5))
- add visibilityState ([#88](https://github.com/pikax/vue-composable/issues/88)) ([3b86c6b](https://github.com/pikax/vue-composable/commit/3b86c6b56160ce65750bd1357d8b07f0b3ec145b))
- Improve storage and add sessionStorage and webStorage ([#98](https://github.com/pikax/vue-composable/issues/98)) ([2618f52](https://github.com/pikax/vue-composable/commit/2618f52e5503ce1882401e8717b9ad6868d3d1cb))

# [1.0.0-dev.4](https://github.com/pikax/vue-composable/compare/v1.0.0-dev.2...v1.0.0-dev.4) (2020-01-13)

### Features

- useNetworkInformation ([#70](https://github.com/pikax/vue-composable/issues/70)) ([d64ff2a](https://github.com/pikax/vue-composable/commit/d64ff2a1e0601021e5938749ace1dd837d20271c))

# [1.0.0-dev.2](https://github.com/pikax/vue-composable/compare/0.2.2...v1.0.0-dev.2) (2019-12-28)

### Features

- add useIntersectionObserver ([#27](https://github.com/pikax/vue-composable/issues/27)) ([a7b3e79](https://github.com/pikax/vue-composable/commit/a7b3e796f54426616b6be0a77af5f460b6fa5ea6))
- add useMatchMedia and useBreakpoint ([#14](https://github.com/pikax/vue-composable/issues/14)) ([a519c45](https://github.com/pikax/vue-composable/commit/a519c45a975ec5709f29bcc016fd9939a0fbf66f))
- Monorepo project ([#55](https://github.com/pikax/vue-composable/issues/55)) ([b225f62](https://github.com/pikax/vue-composable/commit/b225f620fcf5136b26a0987802ebeaff862f4b1f))

## [0.2.2](https://github.com/pikax/vue-composable/compare/0.2.0...0.2.2) (2019-12-10)

### Bug Fixes

- deps, axios ([#47](https://github.com/pikax/vue-composable/issues/47)) ([021ed96](https://github.com/pikax/vue-composable/commit/021ed96aef07ce74004b69ce3a09aa1f4535bd7e))

### Reverts

- Revert "chore: use optional chaining" ([e96ca76](https://github.com/pikax/vue-composable/commit/e96ca76ece75639eb3a51c83265f0141f74bc313))

# [0.2.0](https://github.com/pikax/vue-composable/compare/0.1.0...0.2.0) (2019-11-03)

### Bug Fixes

- axios build ([11f99e0](https://github.com/pikax/vue-composable/commit/11f99e0375e1a818cd8a5bf61a4fa018077cab17))

### Features

- add useAxios support ([ebb1331](https://github.com/pikax/vue-composable/commit/ebb13310958a1415bc5e18346a6e5f8982323070))
- Add vuepress Docs ([#13](https://github.com/pikax/vue-composable/issues/13)) ([2648d97](https://github.com/pikax/vue-composable/commit/2648d977e90ed3791e5c65879527f98138f0aa26))
- added webSocket composable ([51e92dc](https://github.com/pikax/vue-composable/commit/51e92dc7ab97d3ef6b003bdf43eece62e1d556ce))
- useLocalStorage ([#10](https://github.com/pikax/vue-composable/issues/10)) ([d0b0aeb](https://github.com/pikax/vue-composable/commit/d0b0aeb6b759729d944002a5c99a09dd2e3828e6))
- useRetry Composable ([#9](https://github.com/pikax/vue-composable/issues/9)) ([6a0dae8](https://github.com/pikax/vue-composable/commit/6a0dae8d1e40bf5ee88daa8e4bb8380fdb4e15d0))

# [0.1.0](https://github.com/pikax/vue-composable/compare/9172dd594e7b9fc0b0d1de815d1bc14be8df035d...0.1.0) (2019-10-23)

### Bug Fixes

- cicle ci and removing lodash.debounce depency ([9172dd5](https://github.com/pikax/vue-composable/commit/9172dd594e7b9fc0b0d1de815d1bc14be8df035d))
- circle.ci config test ([2f3568e](https://github.com/pikax/vue-composable/commit/2f3568e2285f881f8468024c9f62bf37f7276d70))

### Features

- add examples, TODO tests and fix readme ([da3411b](https://github.com/pikax/vue-composable/commit/da3411bfb993f7043a51a65077ba7003a2210e51))
- added licence and readme ([6585b14](https://github.com/pikax/vue-composable/commit/6585b14c770775680ec0f8f885bf8400a6e674ed))
- coveralls setup ([b2d2a0a](https://github.com/pikax/vue-composable/commit/b2d2a0ae6579151fc37e671eb07979685b6a922b))
- rolllup config improvements, adding tests, circle ci ([e5a190d](https://github.com/pikax/vue-composable/commit/e5a190d558a39c41d1f562cad7806706fa65dc7d))
