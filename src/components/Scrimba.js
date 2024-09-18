import React,{useState} from 'react'
import "../../src/App.css";
const Scrimba = () => {
  const [ firstCard, setFirstCard ] = useState(0);
  const [ secondCard, setSecCard ] = useState(0);
    const [message, setMessage] = useState("");
    let sum = firstCard + secondCard;
    let hasBlackJack = false;
    let isAlive = true;
    let play = false;

const startgame = () => {
  if(!play){
    if (sum <= 20) {
      setMessage( "Do you want to draw a new card? 🙂");
    } else if (sum === 21) {
     setMessage("Wohoo! You've got Blackjack! 🥳");
      hasBlackJack = true;
      play = false ;
    } else {
      isAlive = false;
      setMessage("You're out of the game! 😭");
       play = false;
    }
    
  }
     console.log(message)
   
  }
  return (
    <>
      <div className="blackjack-container">
        <div className="game-board">
          <div className="player-area">
            <h2>Player</h2>
            <div className="cards">
              <div className="card">A♠</div>
              <div className="card">10♥</div>
            </div>
            <p className="score">Score: {sum}</p>
          </div>

          <div className="dealer-area">
            <h2>Dealer</h2>
            <div className="cards">
              <div className="card">7♦</div>
              <div className="card">J♣</div>
            </div>
            <p className="score">Score:{sum}</p>
          </div>
        </div>

        <div className="controls">
          <button
            className="action-btn"
            onClick={() => {
              setFirstCard((e) => e + 5); setSecCard((e) => e + 2);}}>
            Add Card
          </button>
          <button className="action-btn" onClick={startgame}>
            check
          </button>
        </div>

        <div className="result-message">
   {message}
        </div>
      </div>
    </>
  );
}

export default Scrimba