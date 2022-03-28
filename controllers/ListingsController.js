const getListings = async (req, res) => {
   const listings = await Listing.find({})
   res.json(listings)
}




module.exports = {
    getListings
}