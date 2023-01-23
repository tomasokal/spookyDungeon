
import './style.css'

import { createRoot } from 'react-dom/client'

import Game from "./Game.js"

function Overlay() 
{
  return (
    <>
      <Game />
      <div className="user-interface-crosshair" />
    </>
  )
}

createRoot(document.getElementById("root")).render(<Overlay />)
