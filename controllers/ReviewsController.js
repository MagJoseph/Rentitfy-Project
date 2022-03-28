

const getReviews = async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
 }

module.exports = {
    getReviews
}