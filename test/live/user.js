'use strict'

const csfd = require('../../lib/csfd')
const expect = require('chai').expect

describe('User tests', function () {

  it('Should parse base user information', function (done) {
    csfd.user.baseInfo(304220)
      .then((result) => {
        expect(result.baseInfo.username).to.be.eql('venca163')
        expect(result.baseInfo.fullName).to.be.a('string')
        done()
      })
  })

  it('Should parser first page of user\'s ratings', function (done) {
    csfd.user.ratings(304220)
      .then((result) => {
        expect(result.ratings).to.be.an('array')
        result.ratings.map((rating) => {
          rating.should.have.keys('name', 'rating')
        })
        done()
      })
  })
})
