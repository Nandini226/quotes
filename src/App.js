
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
function Apps() {
  const [currentQuote, setCurrentQuote] = useState([]);
  const [input, setInput] = useState();
  const [value, setValue] = useState();



  const handle = event => {
    setInput(event.target.value);
  }



  let database = firebase.database();
  let ref = database.ref("user");
  ref.on("value", gotData, gotErr)
  function gotData(data) {
    console.log(data);
  }
  function gotErr(data) {
    console.log("ERRO!", data);
  }
  const addToArray = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection('user').add({
      quote: input
    });
    console.log("added", input)
    setInput("");
  }
  let newQuoteList = [];
  useEffect(() => {
    const db = firebase.firestore();
    db.collection('user').get().then((snapshot) => {
      //let newQuoteList = [];
      snapshot.docs.forEach(doc => {
        newQuoteList.push(doc.data());
      })
      setCurrentQuote(newQuoteList);
    })
  }, [])
  let arr = [];
  const print =
    currentQuote.map(quote => (
      arr.push(quote.quote)

    ))

  return (
    <div className="App" >
      <h1 className=" book text-center">Quote Generator</h1>
      <div className="box text-center">
        {currentQuote && (
          <div className="box1 " id="box1">{arr[Math.floor(arr.length * Math.random())]}
          </div>
        )}
      </div>

      <div className="text-center class">
        <h5>Type your Quote in the below input field</h5>
      </div>
      <input className="input" value={input} onChange={handle} />
      <button className=" yo btn btn-primary" onClick={addToArray}>Add my quote</button>
      


    </div>
  );
}


export default Apps;