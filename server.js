const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');


class User{
    constructor() {
        this.password = faker.word.adjective(10);
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.random.numeric();
    }
}

class Company{
    constructor() {
        this.id = faker.random.numeric();
        this.name = faker.random.words();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

app.get("/api/hello", (req,res)=>{
    res.json({msg:"hello"})
})

// we can create a function to return a random / fake "Product"
app.get("/api/user/new", (req, res) => {
    let newUser = new User();
    res.json({newUser});
})

app.get("/api/company/new", (req, res) => {
    let newCompany = new Company();
    res.json({newCompany});
})

app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({newUser}, {newCompany});
})


/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */


app.listen(port, ()=>console.log(`listening on port ${port}`))