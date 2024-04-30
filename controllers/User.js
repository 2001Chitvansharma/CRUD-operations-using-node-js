const james=require("../model.js/User")
const getuser = async(req,res) => {
    try {
      let user = await james.find({})
      return res.send(user)
    } catch (error) {
      return res.send(error.message)
    }
  }
   const createuser = async(req,res) =>{
       try {
      const {name, email , password} = req.body
    const user = await james.create({
      username:name,
      password,
       email
     })
     return res.send(user)
   } catch (error) {
     return res.send(error.message)
    }
   }
  
  const deleteuser = async(req,res) =>{
     try {
     let {id} = req.params
      await james.deleteOne({_id:id})
      return res.send("user deleted successfully")
   } catch (error) {
      return res.send(error.message)
    }
  }
  
  
  const updateuser= async(req,res) =>{
    try {
      const{name,password,id}=req.body
      const update = await james.updateOne({_id:id},{
        $set:{password:password}
      })
      res.send(update)
    } catch (error) {
      res.send(error.message)
      
    }
  }
  const updateuser1=async(req,res)=>{
    try {
      const{name,password,id}=req.body
      const update = await james.updateMany({_id:id},{
        $set:{name:name,
      password:password}
  
      }
      )
      res.send(update)
    } catch (error) {
      res.send(error.message)
      
    }
  }
 module.exports ={
    getuser,
    createuser,
    deleteuser,
    updateuser,
    updateuser1


 }