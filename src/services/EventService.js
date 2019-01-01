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
		mongo.connect(url, function(err, client) {
			assert.equal(null, err);
			console.log('Connected to the server');

			const db = client.db(dbName)

			console.log('Connected to ' + dbName)
			console.log(db)

			console.log('Inserting into' + dbName)
			insertDocuments(db, info, function() {
				client.close()
			})
		});
	},
	patchEvent(id) {

	}
}

// CRUD FUNCTIONS

const getAllEvents = (db, callback) => {
	const collection = db.collection('events');
	collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
};

const getOneEvent = (db, query, callback) => {
	const collection = db.collection('documents');
  // Find some documents
  collection.find(query).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

const insertDocuments = function(db, entry, callback) {
  // Get the documents collection
  const collection = db.collection('events');
  // Insert some documents
  collection.insertOne(entry, function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const updateEvent = (db, entry, updatedEntry, callback) => {
	// Get the documents collection
	const collection = db.collection('documents');
	// Update document where a is 2, set b equal to 1
	collection.updateOne(entry
		, updatedEntry, function(err, result) {
		assert.equal(err, null);
		assert.equal(1, result.result.n);
		console.log("Updated the document with the field a equal to 2");
		callback(result);
	});
}

// const mongoConnect = (url, dbName, mongo, crud) => {
// 	mongo.connect(url, function(err, client) {
// 		assert.equal(null, err);
// 		console.log('Connected to the server');

// 		const db = client.db(dbName)

// 		console.log('Connected to ' + dbName)
// 		console.log(db)

// 		console.log('Inserting into' + dbName)
// 		crud()
// 	})
// }