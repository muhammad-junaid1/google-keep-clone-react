import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const NoteModal = ({
  showModal,
  setShowModal,
  card,
  allValues,
  setValues,
  index,
}) => {
  let [input, setInput] = useState({
    title: card.title,
    note: card.note,
  });
  const closeModal = () => {
    setInput({
      title: card.title,
      note: card.note,
    });
    setShowModal(false);
  };
  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const inputValues = input;
    let newValues = [...allValues];
    newValues[index].title = inputValues.title;
    newValues[index].note = inputValues.note;
    setValues(newValues);
    setShowModal(false);
  };
  return (
    <>
      <div
        className="note-modal-overlay"
        style={{ visibility: showModal ? "visible" : "hidden" }}
      ></div>
      <Modal.Dialog
        className="note-modal"
        style={{ visibility: showModal ? "visible" : "hidden" }}
      >
        <Modal.Header>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitForm}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title here"
                value={input.title}
                onChange={changeInput}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                name="note"
                placeholder="Note here"
                rows={10}
                value={input.note}
                onChange={changeInput}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submitForm}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default NoteModal;
