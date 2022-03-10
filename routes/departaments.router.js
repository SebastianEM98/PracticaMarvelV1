const express = require('express');
const router = express.Router();
const departaments_json = require('../json/api_departaments.json');

/* Listar todos los departamentos con sus municipios */
router.get('/', (req, res) => {
    res.json(departaments_json);
});

/* Activity 1: Listar los municipios del departamento que el usuario
ingrese como parametro de busqueda */
/* Endpoint: http://localhost:3000/api/v1/departaments/5 */
router.get('/:departamentId', (req, res) => {
    const { departamentId } = req.params;
    const municipalities = departaments_json.filter(
        (departament) =>
            departament['c_digo_dane_del_departamento'] === departamentId
    );
    res.json(municipalities);
});

module.exports = router;