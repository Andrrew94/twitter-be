const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });
let _db;

const mongoConnect = (callback) => {
    client.connect()
        .then(client => {
            console.log("connected to db");
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log("error connecting to db", err);
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'Database connection error';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

