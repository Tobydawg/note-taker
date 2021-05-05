const notes = require("../db/db.json")
const util = require("util")
const fs = require("fs");
const router = require("express").Router();

const { v4: uuid } = require("uuid");

// 
// function getNotes() {
//     const readFile = util.promisify(fs.readFile);
//     return readFile("../db/db.json", "utf8" )
//     .then((notes) =>{
//         return JSON.parse(notes)

//     }  )
// }

router.get('/get', (req, res) => {
   
        console.log(notes);
        return res.json(notes)
   
});
// notes get all the notes from my file (can call getNotes) then append the new notes to the end of getNotes, then 
//.then writeFile all the notes 

// function addNote(note) {
    
//     const  { title, text } = note
//     const newNote = {  title, text, id:uuid   }
   
    
// }

router.post('/notes', (req, res) => {
    
    const newNote = {...req.body, id:uuid()}
    
    console.log(newNote)
    notes.push(newNote)
    
    fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
        if (err){
            return res.json({error: "unable to write file"})
        }
        return res.json(newNote)
    })

});



router.delete('/notes/:id', (req, res) =>{
const deleteNote = req.params.id


.then((notes) => {
    return res.json(notes)
})
.catch((err) => res.status(500).json(err))
});




module.exports =router;