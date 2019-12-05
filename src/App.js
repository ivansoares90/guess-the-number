import React, { useState, useEffect } from 'react';
import './App.css'
const App = () => {
    const [playerAnswer, setPlayerAnswer] = useState(0);
    const [rightAnswer, setRightAnswer] = useState(0);
    const [hint, setHint] = useState('');

    useEffect(() => {
        setRightAnswer(((Math.random() * 100) + 1).toFixed(0));
    }, []);

    const handleGoClick = () => {
        let hint = '';
        
        console.log(rightAnswer, playerAnswer);

        if (playerAnswer > rightAnswer) {
            hint = 'The number is lower than ';
        } else if (playerAnswer < rightAnswer) {
            hint = 'The number is higher than ';
        } else {
            document.querySelector("#userInput").remove();
            hint = 'Congratulations! The number is: ';
        }

        setHint(hint + playerAnswer);
    }

    const onChangeUserAnswer = (e) => {
        setPlayerAnswer(Number(e.target.value));
    }

    return (
        <div>
            <header>
                <h2>Guess the Number!</h2>
                <p>Try to guess whats the number the computer is thinking!</p>
            </header>
            <main>
                <div id="userInput">
                    <input type="number" id="answer" onChange={onChangeUserAnswer} value={playerAnswer} placeholder="Type a number" />
                    <button onClick={handleGoClick}>GO!</button>
                </div>

                <div id="hint">{hint}</div>
            </main>
        </div>
    );
}
export default App;