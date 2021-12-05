const express = require('express');
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'prime_feedback', 
    host: 'localhost', 
});

router.post('/', (req, res) => {
    console.log('POST /feedback');
    console.log('req.body:', req.body);
    let finalFeedback = req.body;
    let sqlText = `
    INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
    VALUES
        ($1, $2, $3, $4);
    `;
    const sqlValues = [
    finalFeedback.feeling,
    finalFeedback.understanding,
    finalFeedback.support,
    finalFeedback.comments
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