const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Não foi possível se conectar com o servidor MongoDB');
    }
    console.log('MongoDB conectado');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Alguma coisa'}).then((results) =>{
    //     console.log(results);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Vou comer'}).then((results) =>{
    //     console.log(results);
    // })
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c1b7a81b53a3f1a88bd88cb')
    }).then((res) =>{
        console.log(res);
    })
});