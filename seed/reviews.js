const db = require('../db')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const reviews = [
        {
            rating: 5,
            comments: 'This building is awesome!'
        },
        {
            rating: 4,
            comments: 'Great location but noisy'
        },
        {

           rating: 5,
           comments: 'My cat loves it!'
        },
         {
             rating: 2,
             comments: 'No dog park.'

         } 
    ]


await Review.insertMany(reviews)
console.log('created reviews')
}

const run = async () => {
    await main()
    db.close
}

run()

//reviews first