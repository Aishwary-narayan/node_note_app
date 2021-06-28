const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'your notes...';

const addNotes = (title,body) =>{
    const notes = loadNotes();
    const dublicateNote = notes.find(note=>note.title === title)
    //console.log(dublicateNote);
   if(!dublicateNote){
    notes.push({
        title:title,
        body: body
    })
   }else console.log('this title name is taken!');
   

    saveNotes(notes);
}

const removeNote = title=>{
    const notes = loadNotes();
    //console.log(notes)
    const notesToKeep = notes.filter(note=> note.title !== title);
    if(notesToKeep.length !== notes.length) console.log(chalk.inverse.green('Note Removed!'));
    else console.log(chalk.inverse.red('No Note Found!'));
    saveNotes(notesToKeep);
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse.blue('Your Notes!'));
    notes.forEach(note => {
       console.log(note.title); 
    });
  
}

const readNote = (title) =>{
    const notes = loadNotes();
    const note = notes.find(note=>note.title === title)
    //console.log(note);
   if(note) console.log(`${chalk.inverse.green (note.title)} \nbody: ${note.body}`)
    else console.log(chalk.inverse.red('invalid title! '));
}

const loadNotes = ()=>{
    try{
        return JSON.parse(fs.readFileSync('notes.json'))
    }
    catch(e) {
        return [];
    }
 
}

const saveNotes = notes=>{
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
