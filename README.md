# Grommet-Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/gr)](https://jsr.io/@preact-icons/gr)

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/grommet/grommet-icons](https://github.com/grommet/grommet-icons)

[See available icons here](https://react-icons.deno.dev/gr)

## install the module

```bash
deno add @preact-icons/gr
dnpx jsr add @preact-icons/gr
pnpm dlx jsr add @preact-icons/gr
bunx jsr add @preact-icons/gr
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { GrAccessibility } from "@preact-icons/gr"
```

## import a single icon, downloading just one icon

```ts
import { GrAccessibility } from "react-icons/gr/GrAccessibility"
```

or using default export

```ts
import GrAccessibility from "react-icons/gr/GrAccessibility.ts"
```
