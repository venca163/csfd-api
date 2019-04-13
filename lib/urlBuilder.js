/**
 * Created by Patrik Valkovic
 * 8/8/17.
 */

'use strict'

const base = 'https://www.csfd.cz'

module.exports = {
  search: function(text){
    return encodeURI(`${base}/hledat/dalsi-filmy/?q=${text}`)
  },

  person: function(id){
    return `${base}/tvurce/${id}`
  },

  film: function(id){
    return `${base}/film/${id}`
  },

  user: {
    baseInfo: function(id) {
      return `${base}/uzivatel/${id}`
    },

    ratings: function(id) {
      return `${base}/uzivatel/${id}/hodnoceni`
    }
  }
}
