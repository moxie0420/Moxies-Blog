import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    root: true,
    extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"]
})