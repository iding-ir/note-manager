import React from "react";

import Note from "./note";

const Notes = (props) => {
  const { notes, deleteNote } = props;

  return Object.values(notes)
    .reverse()
    .map((note) => <Note key={note.id} note={note} deleteNote={deleteNote} />);
};

export default Notes;
