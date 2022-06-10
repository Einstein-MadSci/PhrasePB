import React from "react";
import "./save.css";

export default function save() {
  return (
    <>
      <section id="saveSection">
        <h2>Saved Contacts</h2>
        <button className="save-btn" id="save" onClick={save}>
          SAVE
        </button>
      </section>
    </>
  );
}
