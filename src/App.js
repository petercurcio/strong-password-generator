import React, { useState } from "react";
import Container from "./components/Container";
import NewButton from "./components/NewButton";

import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState();

  const passwordLengthChangeHandler = (e) => {
    e.preventDefault();
    setPasswordLength(e.target.value);
    generatePassword(e.target.value);
  };

  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_";

  const generatePassword = (passwordLength) => {
    let passwd = "";
    for (let i = 0; i < passwordLength; i++) {
      // console.log("random number:", Math.floor(Math.random() * chars.length));
      // passwd += chars[Math.floor(Math.random() * chars.length)];

      let entry = chars[Math.floor(Math.random() * chars.length)];
      // console.log(typeof entry, entry);
      // console.log(isNaN(entry), entry);

      passwd += entry;

      // passwd += isNaN(entry)
      //   ? `<span class="letter">${entry}</span>`
      //   : `<span class="number">${entry}</span>`;

      // console.log(passwd);
      // document.querySelector(".password-display").value = passwd;
    }
    // let newArr = [];
    // const newPasswd = passwd.split("").forEach((p) => {
    //   if (p.match(/\d/g)) {
    //     newArr.push(`<span class="p-number">${p}</span>`);
    //   }
    // });
    // console.log(newPasswd);

    //console.log(passwd);
    setPassword(passwd);
  };

  const newButtonPasswordHandler = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Container>
      <h1 className="main-title">
        Need a password? Try the Strong Password Generator.
      </h1>
      <div className="password-display">
        {password ? password : generatePassword(12)}
      </div>
      <div className="row">
        <div className="password-display__length">
          <label htmlFor="Password Length">Password Length: </label>
          <span>{passwordLength}</span>
          <br />
          <input
            className="password-length-range-input"
            type="range"
            name="Password Length"
            min="1"
            max="100"
            onChange={passwordLengthChangeHandler}
            value={passwordLength}
          />
        </div>
        <NewButton
          onClick={newButtonPasswordHandler}
          title="Copy To Clipboard"
        />
      </div>
    </Container>
  );
}

export default App;
