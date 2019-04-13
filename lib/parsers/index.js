/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const filmParser = require('./filmParser')
const personParser = require('./personParser')
const searchParser = require('./searchParser')
const userParser = require('./userParser')

module.exports = {
  film: filmParser,
  person: personParser,
  search: searchParser,
  user: {
    baseInfo: userParser.baseInfo,
    ratings: userParser.ratings,
  },
}
