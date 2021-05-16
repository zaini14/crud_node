const express = require('express')
const router = express.Router()
const db = require('../db/index.js')



router.get('', async(req, res, next) => {
	try {
		let sql = 'SELECT * FROM employees'
		let result = await db.query(sql)
		res.send(result.rows)
	} catch(e) {
		// statements
		console.log(e);
		next(e)
	}
})
router.get('/:id', async (req,res,next) => {
	try {
		let sql = 'SELECT * FROM employees WHERE id=$1'
		let idParams = [req.params.id]
		const result = await db.query(sql, idParams)
		res.send(result.rows)
	} catch(e) {
		console.log(e);
		next()
	}
})

router.post('/', async (req,res,next) => {
	try {
		let sql = 'insert into employees (name, gender, department, about) values ($1,$2,$3,$4)'
		let reqBody = req.body
		let reqParams =[reqBody.name, reqBody.gender, reqBody.department, reqBody.about]
		const result = await db.query(sql, reqParams)
		res.json(result)

	} catch(e) {
		console.log(e);
		next()
	}
})

router.put('/:id', async(req,res,next) => {
	try {
		let sql = `update employees set name=$1, gender=$2, department=$3, about=$4 where id=$5 returning *`
		let reqBody = req.body
		let reqParams =[reqBody.name, reqBody.gender, reqBody.department, reqBody.about, req.params.id]
		const result = await db.query(sql, reqParams)
		res.json(result.rows)
	} catch(e) {
		console.log(e);
		next()
	}
})


router.delete('/:id', async(req,res,next) => {
	try {
		let sql = `delete from employees where id=$1 returning *`
		let reqParams = [req.params.id]
		const result = await db.query(sql, reqParams)
		res.json(result.rows)
	} catch(e) {
		console.log(e);
		next()
	}
})

module.exports = router
