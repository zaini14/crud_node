const {Pool} = require('pg')
require('dotenv').config()


const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
})

module.exports = {
	async query(text, params) {
		// Pool Query Mengembalikan Promise Jadi Harus Di Tambahkan Await
		const start = Date.now()
		const result = await pool.query(text, params)
		const final = Date.now() - start
		console.log('Durasi Eksekusi ', {text, final, rows: result.rowCount})
		return result
	}
}