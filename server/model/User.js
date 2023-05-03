const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: String, required: true},
    sex: {type: String, required: true},
    mobile: {type: String},
    issueid: {type: String},
    govtid: {type: String},
    guardianlabel: {type: String},
    guardian: {type: String},
    email: {type: String},
    contact: {type: String},
    address: {type: String},
    state: {type: String},
    city: {type: String},
    country: {type: String},
    pincode: {type: String},
    occupation: {type: String},
    religion: {type: String},
    maritalStatus: {type: String},
    bloodgroup: {type: String},
    nationality: {type: String},
});

const UserModel = mongoose.model("UserModel", Schema);

module.exports = UserModel;
