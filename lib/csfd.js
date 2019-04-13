'use strict'
const fs = require('fs')
const got = require('got')
const parsers = require('./parsers')
const builder = require('./urlBuilder')

/**
 * Main csfd object
 * @type {object}
 */
const csfd = module.exports = {
  /**
   * Configuration
   * @type {Object}
   */
  config: {},
  user: {},
}

csfd.config = {}


/**
 * Search films and people on csfd.cz
 * @param {string} text Text to search
 * @returns {Promise.<SearchResult>}
 */
csfd.search = async (text) => {
  const html = await got(builder.search(text))
  return parsers.search(html.body)
}

/**
 * Find film by ID
 * @param {number} id ID of person
 * @returns {Promise.<Film>}
 */
csfd.film = async (id) => {
  const html = await got(builder.film(id))
  return parsers.film(html.body)
}

/**
 * Find person by id
 * @param {number} id ID of person
 * @returns {Promise.<Person>}
 */
csfd.person = async (id) => {
  let html = await got(builder.person(id))
  return parsers.person(html.body)
}

/**
 * Find user by id
 * @param {number} id ID of user
 * @returns {Promise.<User>}
 */
csfd.user.baseInfo = async (id) => {
  const html = await got(builder.user.baseInfo(id))
  return parsers.user.baseInfo(html.body)
}

/**
 * Get user ratings by id
 * @param {number} id ID of user
 * @returns {Promise.<User>}
 */
csfd.user.ratings = async (id) => {
  const html = await got(builder.user.ratings(id))
  return parsers.user.ratings(html.body)
}
