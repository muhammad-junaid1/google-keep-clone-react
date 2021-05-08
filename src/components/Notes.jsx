import React from "react";
import NoteCard from "./NoteCard";

const Notes = ({ values, setValues }) => {
  return (
    <>
      <div className="d-flex flex-wrap align-items-start py-5">
        {values.length > 0 ? (
          [
            values.map((item, index, arr) => {
              return (
                <NoteCard
                  values={{ title: item.title, note: item.note }}
                  index={index}
                  setValues={setValues}
                  currCard={arr[index]}
                  allCards={values}
                  key={index}
                />
              );
            }),
          ]
        ) : (
          <h4 className="nothing-yet-text">Nothing yet</h4>
        )}
      </div>
    </>
  );
};

export default Notes;
