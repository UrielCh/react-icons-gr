# Grommet-Icons icons for deno / Preact

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/grommet/grommet-icons](https://github.com/grommet/grommet-icons)

[See available icons here](https://react-icons.deno.dev/gr)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/gr":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-gr@1.0.9/mod.ts",
    "react-icons/gr/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-gr@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib gr

```ts
import { GrAccessibility } from "https://deno.land/x/react_icons_gr@1.0.9/mod.ts"
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

