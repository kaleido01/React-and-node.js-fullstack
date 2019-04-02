const mongoose=("mongoose")
const { Scheama }=mongoose

const recipientSchema=new Scheama({
  email:String,
  respond:{type:Boolean,default:false}
})

module.exports=recipientSchema