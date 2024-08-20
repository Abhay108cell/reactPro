import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt=""  />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  )
  
  
}

export default StartGame;

 const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;
 `;


 const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius : 5px;
  min-width: 220px;
  border: none;

 `