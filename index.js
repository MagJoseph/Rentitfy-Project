const { Review } = require('./models')
const { Listing } = require('./models')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send('This is root!')
})


const listingsController = require('./controllers/ListingsController')

app.get('/listings', listingsController.getListings)
app.get('/listings/:id', listingsController.getListingById)
app.get('/search/:searchQuery', listingsController.findListing)
app.post('/listings', listingsController.postListing)
app.put('/listings/:id', listingsController.updateListing)
app.delete('/listings/:id', listingsController.deleteListing)


const reviewsController = require('./controllers/ReviewsController')

app.get('/reviews', reviewsController.getReviews)
app.put('/reviews/:id', reviewsController.updateReview)
app.post('/reviews/:id', reviewsController.postReview)
app.delete('/reviews/:id', reviewsController.deleteReview)


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})


