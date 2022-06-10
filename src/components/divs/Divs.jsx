import React from "react";
import { useState } from "react";
import "./divs.css";

function Divs() {
  const [entries, setEntries] = useState([]);

  const addEntryToBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.contactLastName.toLowerCase() > b.contactLastName.toLowerCase()
          ? 1
          : 1
      )
    );
  };

  return (
    <div className="containerflex">
      <EntryForm addEntryToBook={addEntryToBook} />
      <DisplayEntries entries={entries} />
    </div>
  );
}

function EntryForm({ addEntryToBook }) {
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToBook({ contactFirstName, contactLastName, contactPhoneNumber });
  };

  function save() {
    console.log("clicked");
    <EntryForm addEntryToBook={addEntryToBook} />;
    console.log(EntryForm);
  }

  return (
    <div>
      <div id="leftDiv">
        <div className="formCard">
          <div id="formStyle">
            <h2>Enter Details</h2>
            <div className="form-control">
              <form id="contact-form" onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={contactFirstName}
                    onChange={(e) => setContactFirstName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={contactLastName}
                    onChange={(e) => setContactLastName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={contactPhoneNumber}
                    onChange={(e) => setContactPhoneNumber(e.target.value)}
                    required
                  />
                </label>
                <button type="submit" className="btn">
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisplayEntries({ entries }) {
  return (
    <div id="rightDiv">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr>
              <td>{entry.contactFirstName}</td>
              <td>{entry.contactLastName}</td>
              <td>{entry.contactPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Divs;
