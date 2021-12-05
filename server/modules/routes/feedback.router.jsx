const express = require('express');
const router = express.Router();
const pool = require('../routes/pool');

router.post('/', (req, res) => {
    console.log('POST /feedback');
    console.log('req.body:', req.body);
    const newKoala = req.body;
    const sqlText = `
    INSERT INTO "feedback"
        ("name", "gender", "age", "ready_to_transfer", "notes")
    VALUES
        ($1, $2, $3, $4, $5);
    `;
    const sqlValues = [
    newKoala.name,
    newKoala.gender,
    newKoala.age,
    newKoala.transferStatus,
    newKoala.notes
    ];
    pool.query(sqlText, sqlValues)
        .then((dbResult) => {
        console.log('\tINSERT succeeded.');
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    });
}); 

module.exports = router;