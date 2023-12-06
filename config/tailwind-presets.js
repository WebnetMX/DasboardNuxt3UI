import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import plugin from 'tailwindcss/plugin';
import { defu } from 'defu';

const defaultPluginOptions = {
  prefix: "yui"
};

const xooUIComponents = plugin.withOptions(
  function (options = {}) {
    const { prefix } = defu(options, defaultPluginOptions);
    return function({ addComponents }) {
      addComponents({
        [`.${prefix}-focus`]: {
          "@apply outline-1 outline-dashed outline-offset-2": {},
          "@apply outline-transparent": {},
          "&:focus-within": {
            "@apply outline-muted-300 dark:outline-muted-600": {},
            "@apply outline-dashed ring-0": {}
          },
          "&:focus-visible": {
            "@apply outline-2": {}
          }
        }
      });
    }
  },
  function(options) {
    return {};
  }
);


const xooUIPreset = {
  darkMode: "class",
  content: [],
  plugins: [typography, aspectRatio, xooUIComponents],
}

export { xooUIPreset as default };
