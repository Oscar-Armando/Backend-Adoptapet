/* Pet model */
const mongoose  = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Error de name"]},
    kind: {type: String, required: [true, "Error de kind"]},
    dateOfBirth: Date,
    adopted:{type: String, required: [true, "Requiere definicion de adopcion"]}
});

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;