const express = require('express');
const router = express.Router();
const md5 = require("md5");

const publicKey = "146fae414ecdebcc1c1bd31beed4fa8e";
const privateKey = "2fbc52745885069385b5539392bed41b8e0e5c7e";
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

router.get('/', (req, res) => {
    res.json(
        (URI = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`)
    );
});

module.exports = router;