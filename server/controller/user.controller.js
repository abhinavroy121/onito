const UserModel = require("../model/User");


const postFormData = async (req,res )=> {
    const {name, sex, age} = req.body;
    
    if(!name || !sex || !age) {
        return res.send('Please Fill the required Credentials')
    }

    try{
        console.log(req.body)

     let userForm =  new UserModel(req.body) ;
       userForm.save().then(()=> {
        res.status(201).send('Form data added')
       }).catch(err => {console.log(err)})

    }
    catch(err){
        return res.status(500).send({message:"Server Down found"})
 }
}

const getUserData =async (req, res) => {
    try{
      let userdata = await UserModel.find()
      return res.status(200).send(userdata)
    }
    catch(err){
        console.log(err)
        return res.status(400).send({message: "Data not found"})
    }
}

module.exports = {postFormData, getUserData}