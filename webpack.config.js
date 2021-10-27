module.exports = {
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.js']
  },
  module: {
    rules: [
      // ... other rules omitted
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to `<template lang="pug">` in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // this applies to pug imports inside JavaScript
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      }
    ]
  }
  // ... plugin omitted
}
