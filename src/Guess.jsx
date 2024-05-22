import { useState, useEffect } from "react";

function getRandomColor(){
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join('');

  return `#${color}`
}

export default function Guess(){
 
  
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswerColor] = useState('');
  const [isWrongSelection, setIsWrongSelection] = useState(false);
  const [counter, setCounter] = useState(0);

  function pickColor(){
    getRandomColor();
    const actualColor = getRandomColor();
    setAnswerColor(actualColor);
    setColor(getRandomColor())

    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(()=> Math.random() > 0.5));
  }

  

  useEffect(()=>{
   pickColor();
  }, [])

  
  function handleAnswerClick(selectedAnswer){
    console.log(answer);
    if (selectedAnswer === answer){
      setIsWrongSelection(false);
      setCounter(counter + 1);
      pickColor();


    }else{
      setIsWrongSelection(true);
      setCounter(0);
    }
  }

  
  

  
  return(
    <div className="main-section">
      <div className="color-section" style={{backgroundColor: answer}}>
    
      </div>
      <div className="button-section">
        {answers.map((answer) =>{
          return(
            <button onClick={() => handleAnswerClick(answer)} key={answer}>{answer}</button>
          )
        })}
      </div>
      <div>
        {isWrongSelection ? <p>Incorrect.</p> : <p>Correct.</p> }
        <p className="counter">{counter}</p>
      </div>

      
    </div>
  )
}