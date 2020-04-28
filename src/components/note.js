import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card, Dropdown } from "react-bootstrap";

import { deleteNote } from "../actions/notes";

class Note extends Component {
  render() {
    const { id, title, content } = this.props.note;
    const { deleteNote } = this.props;

    return (
      <Card>
        <Card.Header as="h5">
          <span>{title}</span>

          <Dropdown alignRight>
            <Dropdown.Toggle variant="Secondary"></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => deleteNote(id)}>
                Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>

        <Card.Body>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteNote,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Note);
