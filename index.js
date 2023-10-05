const express = require('express')
const cors = require('cors')

const cloudinary = require('cloudinary')

cloudinary.v2.config({
	cloud_name: 'dsoxasi6c',
	api_key: '938933394984286',
	api_secret: '205yE__Qyf1-1Y1ofVZE3gr3nGw',
	secure: true,
})

const products = require('./products')
const сollections = require('./сollections')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('Welcome our to online shop API...')
})

app.get('/products', (req, res) => {
	res.send(products)
})

app.get('/collections', (req, res) => {
	res.send(сollections)
})

app.get('/products/:id', function (req, res) {
	const id = parseInt(req.params.id)
	const filterItem = products.find(item => item.id === id)
	if (!filterItem) res.status(404).send('Обьект не найден')
	res.send(filterItem)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on port ${port}`))
