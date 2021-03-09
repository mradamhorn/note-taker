const fs = require('fs');
const path = require('path');

// ROUTING

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        let notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
        notes = JSON.parse(notes);
        console.log(notes);
        res.json(notes)
    })

    app.post('/api/notes', (req, res) => {
        let notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
        notes = JSON.parse(notes);
        notes.push(req.body);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), 'utf8');
        res.json(notes);
    });

};
