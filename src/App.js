import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import cardList from './components/CardData'
import Content from './components/Content';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [vis, setVis] = useState([]);

  useEffect(() => {
    shuffle(cardList); //sets cards state-variable to cardList after shuffling
    setScore(0);
    setHighScore(0);
    setVis([]);
  }, [])

  function incrementScore(){
    setScore(score + 1);
  }

  function clickCard(event){

    //check if clicked card is already visited
    let visCard = event.target.alt;
    
    if(vis.includes(visCard)){
      //game over      
      if(score > highScore){
        setHighScore(score);
      }

      setScore(0);
      setVis([]);
      shuffle(cardList);
    }
    else{
      incrementScore();

      //add current card to vis[]
      setVis([...vis, visCard]);
      shuffle(cards);
    }
  }

  function shuffle(cards){
    let currentIndex = cards.length;
    let  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }

    setCards(cards);
  }

  return (
    <>
      <Navbar curr_score={score} max_score={highScore}/>

      <Content cards={cards} clickCard={clickCard}/>
    </>
  );
}

export default App;
