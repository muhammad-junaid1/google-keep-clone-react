import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import NoteModal from "./NoteModal";

const NoteCard = ({ values, index, setValues, currCard, allCards }) => {
  let [showModal, setShowModal] = useState(false);
  const cardClicked = () => {
    setShowModal(true);
  };
  const deleteIconClicked = (e) => {
    e.stopPropagation();
    let newArr = [...allCards];
    newArr.splice(index, 1);
    setValues(newArr);
  };
  const reqCard = currCard;
  return (
    <>
      <Card className="note-card" onClick={cardClicked}>
        <Card.Header>
          <Card.Text className="text-secondary font-weight-bold">
            {values.title}
          </Card.Text>
        </Card.Header>
        <Card.Body>
          {values.note.length > 100 ? (
            <pre>
              {values.note.slice(0, 100).trim()} <br />
              <span className="font-weight-bold">...</span>
            </pre>
          ) : (
            <pre>{values.note.trim()}</pre>
          )}
        </Card.Body>
        <Trash className="delete-icon" onClick={deleteIconClicked} />
      </Card>
      <NoteModal
        showModal={showModal}
        setShowModal={setShowModal}
        card={reqCard}
        setValues={setValues}
        allValues={allCards}
        index={index}
      />
    </>
  );
};

export default NoteCard;
