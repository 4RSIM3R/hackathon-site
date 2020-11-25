const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    localeSubpaths: {
        id: 'id',
        en: 'en',
    },
    otherLanguages : ['en', 'id'],
    defaultNS : 'common',
    localePath : 'public/static/locales'
})