const { Review } = require('../models')

const getReviews = async (req, res) => {
    try {
    const reviews = await Review.find({})
    return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message)
    }
 }

 const postReview = async (req, res) => {
    try {
        let newReview = req.params.num
        const review = await Review.findOneAndUpdate({ reviews: newReview }, { new: true })
        await review.save()
        return res.status(201).json({ review })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}



module.exports = {
    getReviews,
    postReview
}


