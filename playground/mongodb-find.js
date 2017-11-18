const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
        
    /*db.collection('Todos').find({
        _id: new ObjectID('5a101aae44f13d8a3d3fe607')
    }).toArray().then((docs) => {
        console.log('JSON');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
            console.log('Unable to fetch the data', err);
    });*/
    
   /* db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
            console.log('Unable to fetch the data', err);
    });*/
    
    db.collection('Users').find({name: 'Waleed Shaukat'}).count().then((count) => {
        console.log(`There are ${count} users with the name 'Waleed Shaukat'`);
    }, (err) => {
        console.log('Unable to fetch the data', err);
    });
    
    db.collection('Users').find({name: 'Waleed Shaukat'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
            console.log('Unable to fetch the data', err);
    });
    
    db.close();
});