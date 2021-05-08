import React from "react";
import { Form, Button } from "react-bootstrap";

const NotesForm = ({
  focus,
  setFocus,
  inputValues,
  setInputValues,
  setTitleFocus,
  setNoteFocus,
  textareaHeight,
  setTextareaHeight,
  submitNote,
}) => {
  const changeInput = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const changeHeight = (e) => {
    setTextareaHeight(e.target.scrollHeight);
  };

  const cancelForm = () => {
    setFocus(false);
    setInputValues({
      title: "",
      note: "",
    });
    setTextareaHeight(30);
  };

  return (
    <>
      <Form
        autoComplete="off"
        className="mx-auto note-form"
        onSubmit={submitNote}
      >
        <Form.Group>
          {focus ? (
            <Form.Group className="border p-2 rounded">
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={changeInput}
                name="title"
                onFocus={() => setTitleFocus(true)}
                onBlur={() => setTitleFocus(false)}
                value={inputValues.title}
              />
              <Form.Control
                as="textarea"
                placeholder="Note here.."
                onChange={changeInput}
                value={inputValues.note}
                onFocus={() => setNoteFocus(true)}
                onBlur={() => setNoteFocus(false)}
                name="note"
                onInput={changeHeight}
                style={{ height: textareaHeight + "px" }}
              />
              <hr />
              <Button variant="primary" type="submit" className="mr-1">
                Save Note
              </Button>
              <Button variant="danger" onClick={cancelForm}>
                Cancel
              </Button>
            </Form.Group>
          ) : (
            <Form.Control
              type="text"
              placeholder="Take a note"
              className="border rounded"
              onFocus={() => setFocus(true)}
            />
          )}
        </Form.Group>
      </Form>
    </>
  );
};

export default NotesForm;
