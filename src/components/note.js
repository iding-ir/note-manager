import React, { Component } from "react";
import { Card, Dropdown } from "react-bootstrap";

import "./note.css";

class Note extends Component {
  render() {
    const { title, content } = this.props.note;

    return (
      <Card>
        <Card.Header as="h5">
          <span>{title}</span>

          <Dropdown alignRight>
            <Dropdown.Toggle variant="Secondary"></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Remove</Dropdown.Item>
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

export default Note;
