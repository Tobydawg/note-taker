const notes = require("../db/db.json")
const db = require("../db/db.json");

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

router.get('/notes', (req, res) => {
   
        console.log(notes);
        return res.json(notes)
   
});
// notes get all the notes from my file (can call getNotes) then append the new notes to the end of getNotes, then 
//.then writeFile all the notes 

// function addNote(note) {
    
//     const  { title, text } = note
//     const newNote = {  title, text, id:uuid   }

// Take a look at the delete route from earlier, that should give you a better idea of where to start here. 

// Your note needs 3 things an ID, title and text to be able to post. also look at the res.send  as well. 
// I understand that this assignment can be frustrating at times but build off of what you know already works. 


   
    
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
    let noteId = (req.params.id);

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      const allNotes = JSON.parse(data);
      const newAllNotes = allNotes.filter(note => note.id != noteId);

      fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
        if (err) throw err;
        res.send(db);
        console.log("Note deleted!")
      });
    });
  });

// router.delete('/notes/:id', (req, res) =>{
// const deleteNote = (req.params.id)
// console.log(deleteNote)
//    .then(() => res.json({ ok: true }))
//    .catch((err) => res.status(500).json(err));
// })

// .then(() => {
//     return res.json(notes)
// })
// .catch((err) => res.status(500).json(err))
// });




module.exports =router;