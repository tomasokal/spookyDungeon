// Import components needed.
// Import packages needed.

import Engine from './Engine'
import Player from './player/Player'

export default function Game()
{
    return <>

        {/* Base Game with lights, shadows, physics, and canvas */}
        <Engine> 
            
            {/* Player and controls for moving around */}
            <Player position={[0, 2, 0]} args={[0.25]} color="yellow" />

            {/* Level with environment and collidors*/}
            {/* <Level /> */}

        </Engine>
    
    </>
}
