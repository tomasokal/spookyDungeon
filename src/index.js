
import './style.css'

import { Suspense } from 'react'
import * as ReactDOM from 'react-dom/client'

import Game from './Game.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Suspense fallback={null}>
        <Game />
    </Suspense>  
)