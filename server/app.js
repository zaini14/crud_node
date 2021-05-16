const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const createEmployeeTable = require('./db/EmployeeStorage')
const router = require('./router/router.js')
const app = express()
const port = 3000




app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/employees', router)


app.listen(port, async() => {
	try {
		await createEmployeeTable()
		console.log(`Berjalan di port ${port}`)
	} catch(e) {
		// statements
		console.log(e);
	}
})
