export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'neutral',
    container: {
      center: true,
      constrained: "max-w-7xl lg:max-w-7xl xl:max-w-full"
    },
    navigation: {
      links: {
        base: "hover:text-primary dark:hover:bg-gray-800/50 rounded-r-md",
      },
    },
  }
})
