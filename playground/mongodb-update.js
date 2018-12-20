const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Não foi possível se conectar com o servidor MongoDB');
    }
    console.log('MongoDB conectado');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c1b7a47870fe94570fc984c')
    },{
        $set: {
            name: 'Barbosa',
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((res) =>{
        console.log(res);
    });
});