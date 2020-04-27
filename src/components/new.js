import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./new.css";
import { openNewModal, closeNewModal } from "../actions/new";

class New extends Component {
  render() {
    const { visible, openNewModal, closeNewModal } = this.props;
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
              <Form.Group>
                <Form.Label>Title</Form.Label>

                <Form.Control type="text" placeholder="Note title" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Content</Form.Label>

                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Note Content"
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeNewModal}>
              Close
            </Button>

            <Button variant="success">Save</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(New);
