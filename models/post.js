const getDb = require('../util/database').getDb;

class Post {
    constructor(name,description) {
        this.name = name;
        this.description = description;
    }

    save() {
        const db = getDb();
        return db.collection('posts').insertOne(this).then(res => {
            console.log("res adding new post", res)
        }).catch(err => {
            console.log("err adding new post", err)
        });
    }
}

module.exports = Post;