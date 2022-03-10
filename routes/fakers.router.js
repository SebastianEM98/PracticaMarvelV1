const express = require('express')
const router = express.Router()
const faker = require('faker')
/* npm i faker@5.5.3 --save -D */

/*  Endpoint: http://localhost:3000/api/v1/fakers */
router.get('/', (req, res) => {
    const {paginate} = req.query;
    const limit = paginate || 100;
    const faker_elements = [];

    for (let index=0; index<limit; index++){
        faker_elements.push({
            name: faker.commerce.product(),
            price: parseInt(faker.commerce.price()),
            image: faker.image.imageUrl()
        });
    }
    res.json(faker_elements)
});

module.exports = router;