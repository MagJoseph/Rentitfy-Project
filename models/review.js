const { Schema } = require('mongoose')

const Review = new Schema(
    {
        rating: { type: Number, required: true },
        comments: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Review