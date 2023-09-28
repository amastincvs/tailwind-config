# tailwind-config

> Extensible Tailwind CSS configurations

This package supplies a number of Tailwind configurations to the entire monorepo.
Configuration files should be scoped by concern, and are imported as needed by dependent projects.
By using predefined configurations, it ensures that styling is consistent across projects.

## Adding new configurations

First, create a new `.ts` file in this directory.
The name of the file, as well as its named export, should match the name of the configuration you want to create.
For example, if you want to create a configuration for a color palette, you would create a file called `colors.ts` and export a variable called `colors`.

Next, add the following to the file:

```ts
import { type Config } from 'tailwindcss'

const configName = {
  // ...
} satisfies Config

export { configName }
```

Finally, add any additional configuration options you want to add to the file.


## Using configurations

To use a predefined configuration, import it from this package and add it to the `presets` array in your Tailwind config file.

It should look something like this:
```ts
import { type Config } from 'tailwindcss'
import { configName } from 'tailwind-config'

export default {
  presets: [configName]
} satisfies Config
```


For more information on configuring Tailwind, see the [docs](https://tailwindcss.com/docs/configuration).
