const NextI18Next = require('next-i18next').default
<<<<<<< HEAD
=======
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')
>>>>>>> Copywriting Added

module.exports = new NextI18Next({
    localeSubpaths: {
        id: 'id',
        en: 'en',
    },
    otherLanguages : ['en', 'id'],
    defaultNS : 'common',
    localePath : 'public/static/locales'
})