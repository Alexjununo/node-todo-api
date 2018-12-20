const {MongoClient} = require('mongodb');

var user = {
    name: 'Brenda',
    age: 18
}

var {name} = user;

console.log (name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Não foi possível se conectar com o servidor MongoDB');
    }
    console.log('MongoDB conectado');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Alguma coisa',
    //     completed: 'false'
    // }, (err, result) => {
    //     if(err){
    //         console.log('Não foi possível inserir', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Sombra',
        age: 17,
        location: 'Canoas'
    }, (err, result) => {
        if(err){
            console.log('Não foi possível inserir', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();
});