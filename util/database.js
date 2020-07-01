const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://andrei:cluster0pass@cluster0.zvif5.mongodb.net/twitter?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
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

