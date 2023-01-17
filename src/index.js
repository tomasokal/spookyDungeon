
import './style.css'

import { createRoot } from 'react-dom/client'

import Game from "./Game.js"

function Overlay() 
{
  return (
    <>
      <Game />
    </>
  )
}

createRoot(document.getElementById("root")).render(<Overlay />)
