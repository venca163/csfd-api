'use strict'

const cheerio = require('cheerio')


const parseUserBaseInfo = ($) => {
  const content = $('#pg-web-user').find('.content')

  const username = $(content).find('.info > h2').text()
  const fullName = $(content).find('.info > h3').text()

  return {
    username,
    fullName
  }
}

const parseUserRatings = ($) => {
  const content = $('#pg-web-user').find('.ratings .ui-table-list tbody tr')

  const ratings = content.map((_, ratingItem) => {
    const name = $(ratingItem).find('td > a').text()
    const ratingAttr = $(ratingItem).find('.rating').attr('alt')
    let rating

    if (ratingAttr) {
      rating = ratingAttr.length
    } else {
      rating = 0
    }

    return {
      name,
      rating,
    }
  }).get()

  return ratings
}


module.exports = {
  baseInfo: (html) => {
    const $ = cheerio.load(html)

    return {
      baseInfo: parseUserBaseInfo($)
    }
  },

  ratings: (html) => {
    const $ = cheerio.load(html)

    return {
      ratings: parseUserRatings($),
    }
  }
}
