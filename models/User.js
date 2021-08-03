/* User model definition */

const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    isAdopting: {type: Boolean, required: true}
});

UserSchema.path("email").validate(function (value){
     return this.model("user").count({email: value}).them(function(count){
     return count < 1;
    })
}, "Email is already")

const User = mongoose.model("user", UserSchema);

module.exports = User;