import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls, OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { DungeonColumn, DungeonFloor, DungeonStairs } from "./world/Ground"
import Player from "./player/Player.js"

// The original was made by Maksim Ivanow: https://www.youtube.com/watch?v=Lc2JvBXMesY&t=124s
// This demo needs pointer-lock, that works only if you open it in a new window
// Controls: WASD + left click

export default function Game() {
  return (
    <KeyboardControls
        map={ [
            { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
            { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
            { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
            { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
            { name: 'jump', keys: [ 'Space' ] }
        ] }
    >
      <Canvas shadows camera={{ fov: 45, position: [ 10, 10, 10 ] }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>

          {/* Main Dungeon */}

            {/* Entry Hall */}
            <DungeonFloor args={ [4, 0.5, 10] } position={ [0, 0, 5] } />

            {/* Main Chamber */}
            <DungeonFloor args={ [8, 0.5, 10] } position={ [0, 0, 25] } />
            <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 0.75, 35] } />
            <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 1.25, 36] } />
            <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 1.75, 37] } />
            <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 2.25, 38] } />
            <DungeonFloor args={ [8, 0.5, 8] } position={ [0, 2, 47] } />

            {/* Side Hall */}
            <DungeonFloor args={ [10, 0.5, 2] } position={ [18, 0, 25] } />
            <DungeonFloor args={ [2, 0.5, 20] } position={ [30, 0, 30] } />
            <DungeonFloor args={ [5, 0.5, 2] } position={ [33, 0, 52] } />
            <DungeonFloor args={ [5, 0.5, 2] } position={ [23, 0, 12] } />
            <DungeonFloor args={ [5, 0.5, 2] } position={ [37, 0, 32] } />
            <DungeonFloor args={ [2, 0.5, 5] } position={ [40, 0, 25] } />
            <DungeonFloor args={ [2, 0.5, 5] } position={ [20, 0, 5] } />

          <DungeonColumn position={ [0, 2.5, 0] }/>

          <Player />
        </Physics>
        <PointerLockControls />
        {/* <OrbitControls /> */}
      </Canvas>
    </KeyboardControls>
  )
}
