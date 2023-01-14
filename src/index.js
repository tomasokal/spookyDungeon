
import './style.css'

import { Suspense } from 'react'
import * as ReactDOM from 'react-dom/client'

import Game from './Game.js'
import UI from './utilities/UI'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Suspense fallback={null}>
        <Game />
        <UI />
    </Suspense>  
)