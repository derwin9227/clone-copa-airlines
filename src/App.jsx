import './App.css';
import {default as chat} from "./img/SVG/chat.svg"
import {default as copa} from "./img/copa-logo-white.svg"

function App() {

  return (
    <>
      <h1>hola</h1>
      <div style={{backgroundColor:"red"}}>
      <svg>
        <use xlinkHref="img/sprite.svg#icon-medkit" style={{height:"40px", width:"20px"}} alt="a"></use>
      </svg>
      <img src={copa} alt="ho" style={{height:"5rem", width:"15rem", filter:"brightness(0) saturate(100%) invert(11%) sepia(89%) saturate(597%) hue-rotate(26deg) brightness(102%) contrast(104%)"}}/>
      </div>
    </>
  )
}

export default App
