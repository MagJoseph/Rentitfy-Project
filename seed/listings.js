const db = require('../db')
const { Listing, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const reviews = await Review.find()

    const listings = [
        {
            city: 'NYC',
            neighborhood: 'Financial District',
            bedrooms: 3,
            price: 4000,
            img: 'https://images.realty.mx/101bd02a7aa65f2ab001de00375f4fb8/images/assets/854247_3216685.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'Dumbo',
            bedrooms: 2,
            price: 3500,
            img: 'https://thumbs.nestseekers.com/PdrrXIvk314cxsJ.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'Flatiron',
            bedrooms: 2,
            price: 3000,
            img: 'https://untappedcities.com/wp-content/uploads/2018/09/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_50.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'Upper West Side',
            bedrooms: 4,
            price: 8000,
            img: 'https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Dakota-Apartments-Upper-West-Side-72nd-Street-Central-Park-West-Secrets-NYC-014.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'SoHo',
            bedrooms: 1,
            price: 3100,
            img: 'http://homeworlddesign.com/wp-content/uploads/2017/09/Sophisticated-Masculine-Loft-Apartment-in-Soho-New-York-City-1.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'Midtwon',
            bedrooms: 1,
            price: 2800,
            img: 'https://images1.apartments.com/i2/4oYLypqUcAjZRm4sW2m2RzuPtL8__nrqwW8-X8oeT84/117/image.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'Hudson Yards',
            bedrooms: 2,
            price: 3700,
            img: 'https://i.pinimg.com/originals/3a/1b/3a/3a1b3a49f23ac992cf80ad0e364b7e9c.jpg',
            reviews_id: reviews[0]._id
        },
        {
            city: 'NYC',
            neighborhood: 'East Village',
            bedrooms: 3,
            price: 3100,
            img: 'http://media-cdn.tripadvisor.com/media/photo-s/01/d2/72/2b/penthouse.jpg',
            reviews_id: reviews[0]._id
        },
    ]

    await Listing.insertMany(listings)
    console.log('Created listings!')
  }
  const run = async () => {
    await main()
    db.close()
  }
  
  run()