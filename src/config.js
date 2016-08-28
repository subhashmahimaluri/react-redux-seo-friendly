require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Travel + Leisure',
    description: 'Travel + Leisure is a one-stop resource for sophisticated travelers who crave travel tips, news and information about the most exciting destinations in the world.',
    head: {
      titleTemplate: '%s',
      meta: [
        {name: 'description', content: 'Travel + Leisure is a one-stop resource for sophisticated travelers who crave travel tips, news and information about the most exciting destinations in the world.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Example'},
        {property: 'og:image', content: 'http://www.travelandleisure.com/sites/all/themes/tnl_redesign/templates/etr/assets/img/sprites/tl-logo.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Travel + Leisure'},
        {property: 'og:description', content: 'Travel + Leisure is a one-stop resource for sophisticated travelers who crave travel tips, news and information about the most exciting destinations in the world.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: 'Travel + Leisure'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:image', content: 'http://www.travelandleisure.com/%5Bfield_images%5D'},
        {property: 'og:type', content: 'website'}
      ]
    }
  },

}, environment);
