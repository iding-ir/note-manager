import React, { Component } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import "./new.css";
import { openNewModal, closeNewModal } from "../actions/new";

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

  render() {
    const { visible, openNewModal, closeNewModal, valid } = this.props;

    return (
      <div className="new">
        <Button variant="success" onClick={openNewModal}>
          Add new
        </Button>

        <Modal show={visible} onHide={closeNewModal}>
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
            <Button variant="secondary" onClick={closeNewModal}>
              Close
            </Button>

            <Button variant="success" disabled={!valid}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  visible: state.newModal.visible,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      openNewModal,
      closeNewModal,
    },
    dispatch
  );

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

const formNew = reduxForm({
  form: "new",
  validate,
})(New);

export default connect(mapStateToProps, mapDispatchToProps)(formNew);
