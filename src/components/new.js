import React, { Component } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm, reset } from "redux-form";

import "./new.css";
import { openNew, closeNew } from "../actions/new";
import { createNote } from "../actions/notes";

class New extends Component {
  renderError = (meta) => {
    const { error, touched } = meta;

    if (error && touched) {
      return <Alert variant="danger">{error}</Alert>;
    }
  };

  renderTextfield = (props) => {
    const { input, label, placeholder, meta } = props;

    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>

        {this.renderError(meta)}

        <Form.Control
          {...input}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
        />
      </Form.Group>
    );
  };

  renderTextarea = (props) => {
    const { input, label, placeholder, meta } = props;

    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>

        {this.renderError(meta)}

        <Form.Control
          {...input}
          as="textarea"
          rows="3"
          placeholder={placeholder}
        />
      </Form.Group>
    );
  };

  handleCreateNote = async () => {
    const { createNote, title, content, closeNew, reset } = this.props;

    await createNote({ title, content });

    closeNew();

    reset();
  };

  render() {
    const { visible, openNew, closeNew, valid } = this.props;

    return (
      <div className="new">
        <Button variant="success" onClick={openNew}>
          Add new
        </Button>

        <Modal show={visible} onHide={closeNew}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new note</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Field
                name="title"
                label="Enter title"
                placeholder="Note title"
                component={this.renderTextfield}
              />

              <Field
                name="content"
                label="Enter content"
                placeholder="Note content"
                component={this.renderTextarea}
              />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeNew}>
              Close
            </Button>

            <Button
              variant="success"
              disabled={!valid}
              onClick={this.handleCreateNote}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title cannot be empty.";
  } else if (formValues.title.length < 3) {
    errors.title = "Enter a longer title.";
  }

  if (!formValues.content) {
    errors.content = "Content cannot be empty.";
  } else if (formValues.content.length < 3) {
    errors.content = "Enter a longer content.";
  }

  return errors;
};

const wrappedNew = reduxForm({
  form: "new",
  destroyOnUnmount: false,
  validate,
})(New);

const mapStateToProps = (state) => ({
  visible: state.new.visible,
  title:
    state.form.new && state.form.new.values ? state.form.new.values.title : "",
  content:
    state.form.new && state.form.new.values
      ? state.form.new.values.content
      : "",
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      openNew,
      closeNew,
      createNote,
      reset,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(wrappedNew);
