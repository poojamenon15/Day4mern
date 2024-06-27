// import mongooose
const mongoose = require('mongoose');
// between / amd ? u can put db name as 'poojadb1'
mongoose.connect("mongodb+srv://poojamenon15:poojamenon@cluster0.haiibzm.mongodb.net/poojadb1?retryWrites=true&w=majority&appName=Cluster0")
// to understand if coonnection has been established
.then(()=>{
console.log("connected to db")
})
.catch((error)=>{
    console.log(errror);
})