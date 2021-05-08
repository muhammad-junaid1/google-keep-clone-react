import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav";
import NotesForm from "./components/NotesForm";
import Notes from "./components/Notes";

const App = () => {
  let [focus, setFocus] = useState(false);
  let [titleFocus, setTitleFocus] = useState(false);
  let [noteFocus, setNoteFocus] = useState(false);

  let [inputValues, setInputValues] = useState({
    title: "",
    note: "",
  });
  let [values, setValues] = useState([]);
  let [textareaHeight, setTextareaHeight] = useState(30);

  const submitNote = (e) => {
    e.preventDefault();
    if (!titleFocus && !noteFocus) {
      if (/\S/g.test(inputValues.title) || /\S/g.test(inputValues.note)) {
        setFocus(false);
        setValues([...values, inputValues]);
        setInputValues({
          title: "",
          note: "",
        });
        setTextareaHeight(30);
      } else {
        setFocus(false);
        setInputValues({
          title: "",
          note: "",
        });
      }
    }
  };

  return (
    <>
      <Nav />
      <Container className="mt-5">
        <NotesForm
          focus={focus}
          setFocus={setFocus}
          inputValues={inputValues}
          setInputValues={setInputValues}
          setTitleFocus={setTitleFocus}
          setNoteFocus={setNoteFocus}
          textareaHeight={textareaHeight}
          setTextareaHeight={setTextareaHeight}
          submitNote={submitNote}
        />
        <Notes values={values} setValues={setValues} />
      </Container>
    </>
  );
};

export default App;
