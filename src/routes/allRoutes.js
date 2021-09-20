import controller from '../controllers/controller'
const passport = require('passport');

export default (app) => {
app.post("/register", controller.signup)
app.post("/login",controller.login)
app.post("/store-promotion", 
// passport.authenticate("jwt", {session: false}),
 controller.endpointTest)

 
}
