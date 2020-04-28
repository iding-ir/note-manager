import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchNotes } from "../actions/notes";
import Note from "./note";

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;

    fetchNotes();
  }

  render() {
    const { notes } = this.props;

    return Object.values(notes).map((note) => (
      <Note key={note.id} note={note} />
    ));
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchNotes,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
