import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls, OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { DungeonColumn, DungeonTest } from "./world/Ground"
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
          <DungeonTest />
          <DungeonColumn position={ [5, 2.5, 5] }/>
          <DungeonColumn position={ [5, 2.5, -5] }/>
          <DungeonColumn position={ [-5, 2.5, 5] }/>
          <DungeonColumn position={ [-5, 2.5, -5] }/>
          <Player />
        </Physics>
        {/* <PointerLockControls /> */}
        <OrbitControls />
      </Canvas>
    </KeyboardControls>
  )
}
