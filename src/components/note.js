import React from "react";
import { Card, Dropdown } from "react-bootstrap";

const Note = (props) => {
  const { note, deleteNote } = props;
  const { id, title, content } = note;

  return (
    <Card>
      <Card.Header as="h5">
        <span>{title}</span>

        <Dropdown alignRight>
          <Dropdown.Toggle variant="Secondary"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => deleteNote(id)}>Remove</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>

      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
