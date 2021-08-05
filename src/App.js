import React, { useState } from "react";
import Container from "./components/Container";
import Button from "./components/Button";
// import Checkbox from "./components/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import parser from "html-react-parser";

import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(18);
  const [password, setPassword] = useState(null);
  const [plainPasswd, setPlainPasswd] = useState(null);
  const [numbersIsChecked, setNumbersIsChecked] = useState(true);
  const [symbolsIsChecked, setSymbolsIsChecked] = useState(true);

  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_";

  const generatePassword = (
    passwordLength,
    num = numbersIsChecked,
    sym = symbolsIsChecked
  ) => {
    let filteredChars = chars;
    let plainPasswd = "";
    let passwd = "";

    if (!num && !sym) {
      filteredChars = chars.match(/[^\d!@#$%^&*()_]+/)[0];
    }
    if (num && !sym) {
      filteredChars = chars.match(/[^!@#$%^&*()_]+/)[0];
    }
    if (!num && sym) {
      filteredChars = chars.match(/[^\d]+/)[0];
    }

    for (let i = 0; i < passwordLength; i++) {
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

      passwd += entry;
    }
    setPlainPasswd(plainPasswd);
    setPassword(parser(passwd));
  };

  const passwordLengthChangeHandler = (e) => {
    setPasswordLength(e.target.value);
    generatePassword(e.target.value);
  };

  const copyPasswordButtonHandler = () => {
    navigator.clipboard.writeText(plainPasswd);
  };

  const numbersIsCheckedHandler = () => {
    const num = !numbersIsChecked;
    setNumbersIsChecked(num);
    generatePassword(passwordLength, num, symbolsIsChecked);
  };

  const symbolsIsCheckedHandler = () => {
    const sym = !symbolsIsChecked;
    setSymbolsIsChecked(sym);
    generatePassword(passwordLength, numbersIsChecked, sym);
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
        {password ? password : generatePassword(passwordLength)}
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
          {/* <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox-numbers"
              onChange={numbersIsCheckedHandler}
              checked={numbersIsChecked}
            />
            <label htmlFor="checkbox-numbers">Numbers</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox-symbols"
              onChange={symbolsIsCheckedHandler}
              checked={symbolsIsChecked}
            />
            <label htmlFor="checkbox-symbols">Symbols</label>
          </div> */}
          {/* <div className="checkbox">
            <label className="checkbox-wrapper">
              Numbers
              <input
                type="checkbox"
                checked={numbersIsChecked}
                onChange={numbersIsCheckedHandler}
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
          <div className="checkbox">
            <label className="checkbox-wrapper">
              Check
              <input
                type="checkbox"
                checked={symbolsIsChecked}
                onChange={symbolsIsCheckedHandler}
              />
              <span className="custom-checkbox"></span>
            </label>
          </div> */}
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox-element-1"
              checked={numbersIsChecked}
              onChange={numbersIsCheckedHandler}
            />
            <label htmlFor="checkbox-element-1">
              <span className="indicator"></span>
              <span className="label-text">Numbers</span>
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox-element-2"
              checked={symbolsIsChecked}
              onChange={symbolsIsCheckedHandler}
            />
            <label htmlFor="checkbox-element-2">
              <span className="indicator"></span>
              <span className="label-text">Symbols</span>
            </label>
          </div>
        </div>
        <div className="regeneratePasswordIcon">
          <FontAwesomeIcon icon={faSyncAlt} onClick={reloadHandler} />
        </div>
        <Button onClick={copyPasswordButtonHandler} title="Copy To Clipboard" />
      </div>
    </Container>
  );
}

export default App;
