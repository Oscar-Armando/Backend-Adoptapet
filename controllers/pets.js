/* Pets controller */
const Pet = require('../models/Pet');

function getPets(request, response)
{
        const adoptedValue = req.query.adopted;
        const adopted = adoptedValue === "1";

        Pet.find({adopted: adopted}).then(function (pets) {
        response.send(pets);
    });
}

function createPet(req, res)
{
    const body = req.body;
    const pet = new Pet(body);
    Pet.create(pet).then(function (pet){
    res.status(201).send(pet)
    })
}

function updatePet(request, response) 
{
    const id = request.params.id;
    const body = request.body;
    User.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then(function (pet) {
        response.status(200).send(user);
    })
    .catch(function (error) {
        response.status(400).send({"message": error.message, "type": error.name});
    });
};

module.exports = 
{
    getPets,
    createPet,
    updatePet
}