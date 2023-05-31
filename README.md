# Grommet-Icons icons for deno / Preact

**License** [Apache License Version 2.0](http://www.apache.org/licenses/)

**Project** [https://github.com/grommet/grommet-icons](https://github.com/grommet/grommet-icons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=gr)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/gr":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-gr@1.0.2/mod.ts",
    "react-icons/gr/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-gr/ico/",
  }
}
```

## Direct import sample

```ts
import { GrAccessibility } from "https://deno.land/x/react_icons_gr@1.0.2/mod.ts"
```

## import_map import sample

```ts
import { GrAccessibility } from "react-icons/gr"
```

## minimal import

```ts
import { GrAccessibility } from "react-icons/gr/GrAccessibility.ts"
```

## minimal import using default export

```ts
import GrAccessibility from "react-icons/gr/GrAccessibility.ts"
```

