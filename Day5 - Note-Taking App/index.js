const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the path for the notes file (JSON)
const notesFilePath = path.join(__dirname, 'notes.json');

// Read the notes from the JSON file (or create a new file if it doesn't exist)
function readNotes() {
  try {
    if (fs.existsSync(notesFilePath)) {
      const data = fs.readFileSync(notesFilePath, 'utf-8');
      return JSON.parse(data);
    } else {
      return [];
    }
  } catch (err) {
    console.error('Error reading notes file:', err);
    return [];
  }
}

// Save notes to the JSON file
function saveNotes(notes) {
  try {
    fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving notes:', err);
  }
}

// Add a new note
function addNote(note) {
  const notes = readNotes();
  notes.push({ id: Date.now(), note });
  saveNotes(notes);
  console.log('Note added!');
}

// View all notes with ID for easy deletion
function viewNotes() {
  const notes = readNotes();
  if (notes.length === 0) {
    console.log('No notes available.');
  } else {
    console.log('Your Notes:');
    notes.forEach((note) => {
      console.log(`[ID: ${note.id}] - ${note.note}`);
    });
  }
}

// Delete a note by ID
function deleteNote() {
  rl.question('Enter the note ID to delete: ', (id) => {
    const notes = readNotes();
    const noteToDelete = notes.find((note) => note.id == id);

    if (noteToDelete) {
      const updatedNotes = notes.filter((note) => note.id != id);
      saveNotes(updatedNotes);
      console.log(`Note with ID: ${id} deleted.`);
    } else {
      console.log('Note not found with that ID.');
    }
    startCLI();
  });
}

// Start the CLI menu
function startCLI() {
  rl.question('Choose an option:\n1. Add Note\n2. View Notes\n3. Delete Note\n4. Exit\nEnter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter your note: ', (note) => {
          addNote(note);
          startCLI();
        });
        break;
      case '2':
        viewNotes();
        startCLI();
        break;
      case '3':
        viewNotes();
        deleteNote(); // Call delete function after viewing notes
        break;
      case '4':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        startCLI();
        break;
    }
  });
}

// Start the CLI
console.log('\nWelcome to the Note-Taking CLI!');
startCLI();
