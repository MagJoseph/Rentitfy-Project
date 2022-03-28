const { Listing } = require('../models')
const getListings = async (req, res) => {
    try {
   const listings = await Listing.find({})
   return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    getListings
}