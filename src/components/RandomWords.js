import React, { useState, useEffect } from "react";

const RandomWords = (props) => {
  const [wordCount, setWordCount] = useState(4);
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    fetch(`https://random-words-api.herokuapp.com/w?n=${wordCount}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRandomWords(data);
      });
  }, []);

  return (
    <>
      <div>{randomWords ? randomWords : "Nothing yet"}</div>
    </>
  );
};

export default RandomWords;
