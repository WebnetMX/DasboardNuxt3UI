export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'neutral',
    container: {
      center: true,
      constrained: "max-w-7xl lg:max-w-7xl xl:max-w-full"
    },
    presets: {
      navigation: {
        links: "flex items-center hover:text-gray-900 dark:hover:text-gray-100",
      }
    }
  }
})
