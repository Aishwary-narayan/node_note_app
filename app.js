const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

//add a note
yargs.command({
    command:'add' ,
    describe:'add new note' , 
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'title body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
       notes.addNotes(argv.title,argv.body);
    }
    }
)
debugger
// remove a note
yargs.command({
    command:'remove' ,
    describe:'remove new note' , 
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})
//list the notes
yargs.command({
    command:'list' ,
    describe:'list notes' , 
    handler: function(argv){
        notes.listNotes();
    }
})
//read the notes
yargs.command({
    command:'read' ,
    describe:'read note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'

        }
    }, 
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();






//console.log (yargs.argv);

// const command = process.argv[2];
// console.log(command.toUpperCase());

// console.log(getNotes());
// console.log(chalk.inverse.bold.blue('success!'));
// console.log(process.argv[2]);

// const fs = require('fs');
// //fs.writeFileSync('notes.txt','this was created by node');
// fs.appendFileSync('notes.txt','\nthis was appended by appendFileSync method');