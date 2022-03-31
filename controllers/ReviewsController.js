const { Review } = require('../models')
const { Listing } =require('../models')

const getReviews = async (req, res) => {
    try {
    const reviews = await Review.find({})
    return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message)
    }
 }



 const updateReview = async (req, res) => {
    try {
        let revId = req.params.id
        const review = await Review.findOneAndUpdate({ _id: revId }, req.body, { new: true })
         console.log(review)
         console.log(req.body)
        await review.save()
        return res.status(201).json({ review })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const postReview = async (req, res) => {
    try {
        const newReview = await new Review(req.body)
        newReview.save()
        let currentListing = await Listing.findById(req.params.id)
        let oldReviews = currentListing.reviews_id
        let newReviewId = newReview._id
        let update = oldReviews
        update.push(newReviewId)
        console.log(update)
        console.log(newReviewId)
        const listing = await Listing.findOneAndUpdate({_id: req.params.id}, {reviews_id: update}, {
            new: true
        })
        console.log(listing)
        res.json(listing)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getReviews,
    updateReview,
    postReview
}


