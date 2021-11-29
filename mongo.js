/* !NOT IN USE, ONLY FOR TESTING

const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)




if (process.argv.length<3) {
    console.log('give password as argument');
    process.exit(1)
}  else if (process.argv.length === 5) {
    const person = new Person ({
        name: process.argv[3],
        number: process.argv[4]
    })    
    const password = process.argv[2]

    const url = `mongodb+srv://fullstack:${password}@cluster0.tkcxf.mongodb.net/person-app?retryWrites=true&w=majority`
    mongoose.connect(url)

    person.save().then(result => {
        console.log('Person saved');
        mongoose.connection.close()
    })
} else if (process.argv.length === 3) {
    // print phonebook
    const password = process.argv[2]

    const url = `mongodb+srv://fullstack:${password}@cluster0.tkcxf.mongodb.net/person-app?retryWrites=true&w=majority`
    mongoose.connect(url)


    console.log('phonebook:');

    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person.name, person.number)
        })
        mongoose.connection.close()
      })
} else {
    console.log('Invalid launch arguments!')
    process.exit(1)
}





const person = new Person ({
    name: 'Onni Elonen',
    number: '123 4567891'
})

*/