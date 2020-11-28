const { nextI18NextRewrites } = require('next-i18next/rewrites')

<<<<<<< HEAD
const localeSubpaths = {
    en: 'en',
    id: 'id',
}

module.exports = {
    rewrites : async () => nextI18NextRewrites(localeSubpaths)
=======
const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
>>>>>>> Copywriting Added
}