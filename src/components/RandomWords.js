import React, { useState, useEffect } from "react";

const RandomWords = (props) => {
  const [wordCount, setWordCount] = useState(4);
  const [randomWords, setRandomWords] = useState([]);
  const API_KEY = process.env.REACT_APP_WORDNIK_API_KEY;

  useEffect(() => {
    fetch(
      `http://api.wordnik.com/v4/words.json/randomWords?api_key=${API_KEY}&limit=4`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const list = data.map((obj) => obj.word);
        console.log(list);
        console.log(list.join("-"));
        const fixedList = list.map((item) => item.toLowerCase());
        console.log(fixedList);
        // setRandomWords(data);
      });
  }, []);

  return (
    <>
      <div>{randomWords ? randomWords : "Nothing yet"}</div>
    </>
  );
};

export default RandomWords;
