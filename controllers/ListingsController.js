const { Listing } = require('../models')

const getListings = async (req, res) => {
    try {
   const listings = await Listing.find({})
   return res.status(200).json({ listings })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const postListing = async (req, res) => {
    try {
        console.log('data:', req.body)
        const listing = await new Listing(req.body)
        console.log('new:', listing)
        await listing.save()
        return res.status(201).json({ listing })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getListingById = async (req, res) => {
    try {
        const listId = req.params.id
        const listing = await Listing.findById(listId)
        if (listing) {
            return res.status(200).json({ listing })
        } return res.status(404).send('Listing not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const findListing = async (req, res) => {
    try {
        let searchQuery = req.params.searchQuery
        console.log(searchQuery)
        const findList = await Listing.find({neighborhood: searchQuery})
        console.log(findList)
        if (findList) {
            return res.status(200).json({ findList })
        } return res.status(404).send('Listing not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const updateListing = async (req, res) => {
    try {
        const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(listing)
    } catch (error) {
        res.send(error.message)
    }
}
 
const deleteListing = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Listing.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Listing deleted')
        }
        throw new Error('Listing not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getListings,
    postListing,
    getListingById,
    updateListing,
    deleteListing,
    findListing

}