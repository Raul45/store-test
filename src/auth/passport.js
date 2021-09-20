const passport = require('passport');
const passportJwt = require('passport-jwt');
const extractJwt = passportJwt.ExtractJwt;
const strategyJwt = passportJwt.Strategy;
const jwtSecret = 'qwegh385km'
import model from '../models/index'
const {Users} = model

passport.use(
    
    new strategyJwt({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), 
    secretOrKey: jwtSecret
},
function (jwtPayload, done) {
    return Users.findOne({where:{id: jwtPayload.id}}).then((result) => {
        return done(null, result)
    }).catch((err) => {
            return done(err)
    });

}   
), 

)





