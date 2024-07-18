# Grommet-Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/gr)](https://jsr.io/@preact-icons/gr)

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/grommet/grommet-icons](https://github.com/grommet/grommet-icons)

[See available icons here](https://react-icons.deno.dev/gr)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/gr": "jsr:@preact-icons/gr@^1.0.11/mod.ts",
    "react-icons/gr/": "jsr:@preact-icons/gr@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib gr

```ts
import { GrAccessibility } from "jsr:preact-icons/gr@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { GrAccessibility } from "react-icons/gr"
```

## import a single icon, downloading just one icon

```ts
import { GrAccessibility } from "react-icons/gr/GrAccessibility.ts"
```

or using default export

```ts
import GrAccessibility from "react-icons/gr/GrAccessibility.ts"
```

