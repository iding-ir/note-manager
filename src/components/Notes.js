import React from "react";

import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNote, googleAuth2 } = props;

  return Object.values(notes)
    .reverse()
    .map((note) => (
      <Note
        key={note.id}
        note={note}
        deleteNote={deleteNote}
        googleAuth2={googleAuth2}
      />
    ));
};

export default Notes;
