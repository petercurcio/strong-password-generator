import React, { useState } from "react";
import Container from "./components/Container";
import NewButton from "./components/NewButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import parser from "html-react-parser";

import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState();
  const [plainPasswd, setPlainPasswd] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // console.log(
  //   "beginning values: |",
  //   "includeNumbers:",
  //   includeNumbers,
  //   "includeSymbols:",
  //   includeSymbols
  // );

  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_";

  const generatePassword = (passwordLength) => {
    let filteredChars = "";
    let plainPasswd = "";
    let passwd = "";

    // console.log(
    //   "generatePassword: |",
    //   "includeNumbers:",
    //   includeNumbers,
    //   "includeSymbols:",
    //   includeSymbols
    // );

    if (includeNumbers && !includeSymbols) {
      filteredChars = chars.match(/[^!@#$%^&*()_]+/)[0];
      // console.log("chars:", chars);
      // console.log(
      //   "chars.match(/[^!@#$%^&*()_]*/)[0]",
      //   chars.match(/[^!@#$%^&*()_]+/)[0]
      // );
      // console.log(
      //   "includeNumbers && !includeSymbols",
      //   "includeNumbers:",
      //   includeNumbers,
      //   "includeSymbols:",
      //   includeSymbols
      // );
      // console.log("filteredChars:", filteredChars);
    }
    if (!includeNumbers && includeSymbols) {
      filteredChars = chars.match(/[^\d]+/)[0];
      // console.log(
      //   "!includeNumbers && includeSymbols",
      //   "includeNumbers:",
      //   includeNumbers,
      //   "includeSymbols:",
      //   includeSymbols
      // );
      // console.log("filteredChars:", filteredChars);
    }
    if (!includeNumbers && !includeSymbols) {
      filteredChars = chars.match(/[^\d!@#$%^&*()_]+/)[0];
      // console.log(
      //   "!includeNumbers && !includeSymbols",
      //   "includeNumbers:",
      //   includeNumbers,
      //   "includeSymbols:",
      //   includeSymbols
      // );
      // console.log("filteredChars:", filteredChars);
    }
    if (includeNumbers && includeSymbols) {
      filteredChars = chars;
      // console.log(
      //   "includeNumbers && includeSymbols |",
      //   "includeNumbers:",
      //   includeNumbers,
      //   "includeSymbols:",
      //   includeSymbols
      // );
      // console.log("filteredChars:", filteredChars);
    }

    for (let i = 0; i < passwordLength; i++) {
      // console.log("random number:", Math.floor(Math.random() * chars.length));
      // passwd += chars[Math.floor(Math.random() * chars.length)];

      let entry =
        filteredChars[Math.floor(Math.random() * filteredChars.length)];

      plainPasswd += entry;

      entry = entry.match(/\d/)
        ? `<span class="number">${entry}</span>`
        : entry.match(/[!@#$%^&*()_]/)
        ? `<span class="symbol">${entry}</span>`
        : entry.match(/[a-zA-Z]/)
        ? `<span class="letter">${entry}</span>`
        : entry;
      // chars[Math.floor(Math.random() * chars.length)];

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
    setPlainPasswd(plainPasswd);

    //document.querySelector("password-display").innerHTML = parser(passwd);
    setPassword(parser(passwd));
    //setPassword(passwd);
  };

  const passwordLengthChangeHandler = (e) => {
    setPasswordLength(e.target.value);
    generatePassword(e.target.value);
  };

  const newButtonPasswordHandler = () => {
    // navigator.clipboard.writeText(password);
    navigator.clipboard.writeText(plainPasswd);
  };

  const includeNumbersHandler = () => {
    setIncludeNumbers(!includeNumbers);
    generatePassword(passwordLength);
  };

  const includeSymbolsHandler = () => {
    setIncludeSymbols(!includeSymbols);
    generatePassword(passwordLength);
  };

  const reloadHandler = () => {
    generatePassword(passwordLength);
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
          <label htmlFor="checkbox-numbers">Numbers</label>
          <input
            type="checkbox"
            name="checkbox-numbers"
            onChange={includeNumbersHandler}
            checked={includeNumbers}
          />
          <label htmlFor="checkbox-symbols">Symbols</label>
          <input
            type="checkbox"
            name="checkbox-symbols"
            onChange={includeSymbolsHandler}
            checked={includeSymbols}
          />
        </div>
        <div className="regeneratePasswordIcon">
          <FontAwesomeIcon icon={faSyncAlt} onClick={reloadHandler} />
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
