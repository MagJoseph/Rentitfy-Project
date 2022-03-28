const mongoose = require('mongoose')
const ListingSchema = require('./listing')
const ReviewSchema = require('./review')

const Listing = mongoose.model('Listing', ListingSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
    Listing,
    Review
}