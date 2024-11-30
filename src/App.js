import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    timer ? setTimeout(() => setSeconds(seconds + 1), 1000) : null;

    if (seconds > 5) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  });

  //setTime(2);

  const startTimer = () => {
    setTimer(true);
  };
  const stopTimer = () => {
    setTimer(false);
  };
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {minutes} mins </span>
      <span> {seconds} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
