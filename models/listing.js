const { Schema } = require('mongoose')

const Listing = new Schema(
    {
        city: { type: String, required: true },
        neighborhood: { type: String, required: true },
        bedrooms: { type: Number, required: true },
        price: { type: Number, required: true },
        reviews_id: { type: Schema.Types.ObjectId, ref: 'reviews_id' }
    }
)

module.exports = Listing