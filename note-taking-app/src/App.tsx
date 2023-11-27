import React, {useState} from "react";
import './App.css';

interface Note {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>('');

  const addNote = () => {
    if (newNote) {
      const newNoteObj: Note = { id: Date.now(), text: newNote };
      setNotes([...notes, newNoteObj]);
      setNewNote('');
    }
  };

  const deleteNote = (noteId: number) => {
    const updateNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updateNotes);
  };
  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">
        Note Taking App
      </h1>
      <div className="mb-4">
        <textarea 
        placeholder="Enter your note" 
        className="border p-2 rounded w-full h-24 resize-none" 
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        />
      </div>
      <button 
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={addNote}
      >
        Add Note
      </button>
      <ul className="mt-4 w-full max-w-md">
        {notes.map((note) => (
          <li 
          key={note.id}
          className="border rounded p-2 flex justify-between items-center mb-2"
          >
            {note.text}
            <button 
            className="text-red-500"
            onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;