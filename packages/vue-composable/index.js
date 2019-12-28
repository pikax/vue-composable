'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-composable.cjs.prod.js')
} else {
  module.exports = require('./dist/vue-composable.cjs.js')
}
