import antfu from "@antfu/eslint-config"

export default antfu({
  files: ["*.vue", "*.js", "*.ts"],
  rules: {
    "vue/multiword-component-names": "off",
    "style/quotes": "off",
    "style/comma-dangle": "off",
    "node/prefer-global/process": "off",
  },
})
