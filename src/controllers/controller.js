import model from '../models/index'
const {Products, Users} = model
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const jwtSecret = 'qwegh385km'

export default{
    async signup(req,res){
        let {fullName, email, password} = req.body;
        
        let find_user = await Users.findOne({where:{email: email}})
        if(find_user){
            return res.status(403).send({message: `Email already exist's`})
        }
        let new_password = await bcrypt.hashSync(password, saltRounds)

     
       let new_user =  await Users.create({
            email,
             password: new_password,
             fullName
        })
        let token =await  jwt.sign({
          id: new_user.id,
          email: new_user.email
        },
        jwtSecret
        )
        return res.status(200).send({message:"Register successfully",
        data: {
            id: new_user.id,
            email: new_user.email,
            token: token
        }
    })
    },

    async login(req,res){
        let {email, password} = req.body
        let finder_user =await  Users.findOne({where:{email:email}})

        if(!finder_user){
            return res.send({message: "User not found"})
        }
        let password_crypt = finder_user.password;
        let match = await bcrypt.compareSync(password, password_crypt)
        if(!match){
            return res.status(403).send({
                message: "Invalid password"
            })
        }
        let token = await jwt.sign({
            id: finder_user.id,
            email: finder_user.id
        },
            jwtSecret
            )

            return res.status(200).send({message: 'Login successfully', 
            data: {
                id: finder_user.id,
                email: finder_user.email,
                token
            }
        })
    },
    
    async endpointTest(req,res){
        let {arrayItems} = req.body;
        const tshirt_objects = await Products.findOne({where:{code:"TSHIRT"}})
        const tshirt_price = tshirt_objects.price;
        let objectChecker = {}
        let price = 0
        let tshirt_counter = 0;
        if(arrayItems.length > 0){
            for(let i = 0; i<arrayItems.length; i++){
                try{                    
                    let find_item = await Products.findOne({where:{code:arrayItems[i]}})
                    let item_price = find_item.price
                    if(!item_price){
                        return
                    }
                    if(arrayItems[i] !== "TSHIRT"){
                        if(objectChecker.hasOwnProperty(arrayItems[i])){
                            delete objectChecker[arrayItems[i]]
                        }else{
                            objectChecker[arrayItems[i]] = 0;
                            price = price + find_item.price
                        }
                    }else{
                        tshirt_counter = tshirt_counter + 1;
                    } 
                }catch(e){
                    console.log(e);
                }
            }

            if(tshirt_counter >= 3){
                let tshirt_prices = 19 * tshirt_counter
                price = price + tshirt_prices;
            }else{
                let tshirt_prices_2 = tshirt_price * tshirt_counter
                price = price + tshirt_prices_2;
            }
            return res.status(200).send({
                Items: arrayItems,
                Total:`$${price.toFixed(2)}`})
        }else{
            return res.status(403).send({message: 'Cant be empty'})
        }

    },
}


