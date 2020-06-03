import React from "react";
import { Card, Dropdown } from "react-bootstrap";

const Note = (props) => {
  const { note, deleteNote, googleAuth2 } = props;
  const { id, title, content, user } = note;

  const renderDropdown = () => {
    if (googleAuth2.isSignedIn && user.id === googleAuth2.user.id) {
      return (
        <Dropdown alignRight>
          <Dropdown.Toggle variant="Secondary"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => deleteNote(id)}>Remove</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    return "";
  };

  return (
    <Card>
      <Card.Header as="h5">
        <span>{title}</span>

        {renderDropdown()}
      </Card.Header>

      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
