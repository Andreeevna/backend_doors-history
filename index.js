const express = require('express')
const cors = require('cors')

const products = require('./products')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('Welcome our to online shop API...')
})

app.get('/products', (req, res) => {
	res.send(products)
})

app.get('/products/:id', function (req, res) {
	const id = parseInt(req.params.id)
	const filterItem = products.find(item => item.id === id)
	if (!filterItem) res.status(404).send('Обьект не найден')
	res.send(filterItem)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on port ${port}`))
