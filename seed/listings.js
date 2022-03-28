const db = require('../db')
const { Listing, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

