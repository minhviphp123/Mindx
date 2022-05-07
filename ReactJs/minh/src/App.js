import styled from "styled-components";
import birdImg from '../src/bird.jpg';
import { useState, useEffect } from "react";

const bird_size = 44;
const game_space_width = 500;
const game_space_height = 500;
const gravity = 5;
const jump_height = 100;
const obstacle_width = 40;
const obstacle_gap = 200;

function App () {

  const [birdPosition, setBirdPosition] = useState(game_space_height/2);
  const [gameStarted, setGameStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(0)  ;
  const [obstacleLeft, setObstacleLeft] = useState(game_space_width - obstacle_width);
  const [score, setScore] = useState(0);
  const bottomObstacleHeight = game_space_height - obstacle_gap - obstacleHeight
 
  //bird falling
  useEffect( () => {
    let timeID;
    if(birdPosition < game_space_height - bird_size) {
      timeID = setInterval( () => {
        setBirdPosition(birdPosition => birdPosition + gravity)
      }, 40)
    }

    return ( () => {
      clearInterval(timeID);
    })

  }, [birdPosition, gameStarted]);

  //obstacle run
  useEffect(()=> {
    let obstacleId; 
    if(gameStarted && obstacleLeft >= 0) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft => obstacleLeft - 5))
      },24)

      return () => {
        clearInterval(obstacleId)
      }
     } else {
       setObstacleLeft(game_space_width - obstacle_width)
       setObstacleHeight(Math.floor(Math.random() * (game_space_height - obstacle_gap)));
       setScore(score => score + 1)
     }
   },[gameStarted, obstacleLeft]);

  // ==== render ==== //
  return (
      <Div>
        <GameBox height={game_space_height} width={game_space_width}>
            <Bird src={birdImg} height={bird_size} width={bird_size} top={birdPosition}/>
        </GameBox>
      </Div>
  );
}

export default App;

const GameBox = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background: rgb(0, 102, 255);
`

const Bird = styled.img`
  border-radius: 50%;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  position: absolute;
  top: ${props => props.top}px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;

const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: green;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`;