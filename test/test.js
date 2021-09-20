const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttps = require('chai-http');
const expect = chai.expect;
const app = require('../index');
chai.should()
chai.use(chaiHttps)


describe("Store API", () =>{
let token = "";
     describe("POST REGISTER ENDPOINT",()=>{
        it("it should response an object with user succesfully message and user data with token", (done)=>{
            // Cambiar la data del usuario cada vez
            // que se corrar el test porque regresara el error 403
        
            let userRegister = {
                fullName: "Mr tester",
                email: "testeo2@gmail.com",
                password:"password1234.-"
            }
            
            chai.request(app)
            .post("/register")
            .send(userRegister)
            .end((err,response)=>{
                response.should.have.status(200)
                response.body.should.be.a("object")
                response.body.should.have.property("message")
                response.body.should.have.property("data")
            done();
            })
        })
    })
    

      describe("POST LOGIN ENDPOINT",()=>{
        it("it should response an object with user succesfully authenticated message and user data with token", (done)=>{
            // Cambiar la data del usuario cada vez
            // que se corrar el test porque regresara el error 403
           let user_object = {
            email: "testeo2@gmail.com",
            password:"password1234.-"
           }
            chai.request(app)
            .post("/login")
            .send(user_object)
            .end((err,response)=>{
                token = response.body.token
                response.should.have.status(200)
                response.body.should.be.a("object")
                response.body.should.have.property("message")
                response.body.should.have.property("data")
            done();
            })
        })
    })
    


})
