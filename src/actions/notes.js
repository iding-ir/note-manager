import notes from "../apis/notes";
import {
  NOTE_CREATE,
  NOTE_DELETE,
  NOTE_EDIT,
  NOTE_FETCH,
  NOTES_FETCH,
} from "../constants";

export const createNote = (note) => async (dispatch, getState) => {
  const user = getState().googleAuth2.user;

  const response = await notes.post("/notes", { ...note, user });

  dispatch({ type: NOTE_CREATE, payload: response.data });
};

export const deleteNote = (id) => async (dispatch) => {
  await notes.delete(`/notes/${id}`);

  dispatch({ type: NOTE_DELETE, payload: id });
};

export const editNote = (id, note) => async (dispatch) => {
  const response = await notes.put(`/notes/${id}`, note);

  dispatch({ type: NOTE_EDIT, payload: response.data });
};

export const fetchNote = (id) => async (dispatch) => {
  const response = await notes.get(`/notes/${id}`);

  dispatch({ type: NOTE_FETCH, payload: response.data });
};

export const fetchNotes = () => async (dispatch) => {
  const response = await notes.get("/notes");

  dispatch({ type: NOTES_FETCH, payload: response.data });
};
