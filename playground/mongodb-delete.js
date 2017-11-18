const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
   
    /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to execute the task', err);
    });*/
    
    /*db.collection('Users').deleteMany({name: 'Waleed Shaukat'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to execute the task', err);
    });*/
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a1015744bd2431e48e0023c')}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to execute the task', err);
    });
    
    db.close();
});