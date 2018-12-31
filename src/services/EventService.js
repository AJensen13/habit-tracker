const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017'

const dbName = 'habit-app'

const mongo = MongoClient

export default {
	connectDB() {
		mongo.connect(url, function(err, client) {
			assert.equal(null, err);
			console.log('Connected to the server');

			const db = client.db(dbName)

			console.log('Connected to ' + dbName)
			console.log(db)
		});
	},
	getAllEvents() {

	},
	getEvent(id) {

	},
	postEvent(info) {

	},
	patchEvent(id) {

	}
}