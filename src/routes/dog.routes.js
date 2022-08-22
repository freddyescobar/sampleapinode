const express = require("express");

const router = express.Router();


let dogs = [
    {
        id: 1, name: "Happy", breed: "Golden Retriever"
    },
    {
        id: 2, name: "Mika", breed: "Husky"
    }
];

router.get('/dogs', (req, res) => {
    console.log("This is within the GET /dogs route");
    res.status(200).send(dogs);
});

router.get('/dog/:name', (req, res) => {
    let notFound = true;

    dogs.forEach((dog) => {
        if (dog.name == req.params.name) {
            notFound = false;
            res.status(200).send(dog);
        }
    });

    if (notFound) {
        res.sendStatus(404);
    }
});


module.exports = router;