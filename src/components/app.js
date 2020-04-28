import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reset } from "redux-form";

import Header from "./header";
import Modal from "./modal";
import Notes from "./notes";
import Footer from "./footer";
import { openModal, closeModal } from "../actions/modal";
import { createNote, fetchNotes, deleteNote } from "../actions/notes";

class App extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;

    fetchNotes();
  }

  render() {
    const {
      visible,
      title,
      content,
      openModal,
      closeModal,
      createNote,
      reset,
      notes,
      deleteNote,
    } = this.props;

    return (
      <>
        <Header />

        <div className="app container-fluid bg-light">
          <Modal
            visible={visible}
            title={title}
            content={content}
            openModal={openModal}
            closeModal={closeModal}
            createNote={createNote}
            reset={reset}
          />

          <Notes notes={notes} deleteNote={deleteNote} />
        </div>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  visible: state.modal.visible,
  title:
    state.form.modal && state.form.modal.values
      ? state.form.modal.values.title
      : "",
  content:
    state.form.modal && state.form.modal.values
      ? state.form.modal.values.content
      : "",
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      openModal,
      closeModal,
      createNote,
      reset,
      fetchNotes,
      deleteNote,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
