// panda.config.ts
plugins: [
  {
    name: 'Remove Panda Preset Colors',
    hooks: {
      'preset:resolved': ({ utils, preset, name }) =>
        name === '@pandacss/preset-panda'
          ? utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
          : preset,
    },
  },
],
