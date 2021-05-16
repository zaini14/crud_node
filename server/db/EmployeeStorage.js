const db = require('./index')
const TABLE_NAME = 'employees'


async function createEmployeeTable() {
	try {
		const sql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
						id SERIAL,
						name varchar(50) NOT NULL,
						gender varchar(7) NOT NULL,
						department varchar(50) NOT NULL,
						about text,
						PRIMARY KEY (id)
					)`
		await db.query(sql);
	} catch(e) {
		// statements
		console.log(e);
	}	
}

module.exports = createEmployeeTable