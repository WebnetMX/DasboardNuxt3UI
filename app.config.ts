export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'neutral',
    container: {
      center: true,
      constrained: "max-w-7xl lg:max-w-7xl xl:max-w-full"
    },
    accordion: {
      transition: {
        enterActiveClass: "overflow-hidden transition-[height] duration-200 ease-out",
        leaveActiveClass: "overflow-hidden transition-[height] duration-200 ease-out"
      },
    },
    navigation: {
      links: {
        base: "hover:text-primary dark:hover:bg-gray-800/50 rounded-r-md",
      },
    },
  }
})
