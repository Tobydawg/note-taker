const router = require("express").Router();
const path = require("path");
// an html route for home page and for viewing the notes (adding them/deleting them)
// html route for /notes

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// html route for home page which is the main banner 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;