const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
   
    db.collection('Users').findOneAndUpdate({_id: 123}, 
                                           {$set: {name: 'Waleed'}}, 
                                           {returnOriginal: false}).then((doc) => {
        console.log(doc);
    }, (err) => {
        console.log('Unable to update the document', err);
    });
    
    db.collection('Users').findOneAndUpdate({_id: 123}, 
                                           {$inc: {age: 1}}, 
                                           {returnOriginal: false}).then((doc) => {
        console.log(doc);
    }, (err) => {
        console.log('Unable to update the document', err);
    });
    db.close();
});