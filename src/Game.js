
import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Player from "./player/Player.js"
import GameSwitch from './world/GameSwitch.js'
import GameGate from './world/GameGate.js'
import { DungeonColumn, DungeonFloor, DungeonStairs } from "./world/Ground"
import GameTile from './world/GameTile.js'

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
        {/* <ambientLight intensity={0.3} /> */}
        {/* <pointLight castShadow intensity={0.8} position={[100, 100, 100]} /> */}
        <Physics gravity={[0, -30, 0]}>

          {/* Main Dungeon */}

            {/* Tiles */}

            {/* First Hallway */}
              <GameTile position={[0, 0, 0]} rotationY = {Math.PI} tileType = 'corner' />
              <GameTile position={[3, 0, 0]} rotationY = {Math.PI / 2} tileType = 'corner' />
              <GameTile position={[0, 0, 3]} rotationY = {Math.PI} tileType = 'wall' />
              <GameTile position={[3, 0, 3]} rotationY = {2 * Math.PI} tileType = 'wall' />
              <GameTile position={[0, 0, 6]} rotationY = {Math.PI} tileType = 'wall' />
              <GameTile position={[3, 0, 6]} rotationY = {2 * Math.PI} tileType = 'wall' />
              <GameTile position={[0, 0, 9]} rotationY = {Math.PI} tileType = 'wall' />
              <GameTile position={[3, 0, 9]} rotationY = {2 * Math.PI} tileType = 'wall' />
              <GameTile position={[0, 0, 12]} rotationY = {Math.PI} tileType = 'wall' />
              <GameTile position={[3, 0, 12]} rotationY = {2 * Math.PI} tileType = 'wall' />
              <GameTile position={[0, 0, 15]} rotationY = {Math.PI} tileType = 'wall' />
              <GameTile position={[3, 0, 15]} rotationY = {2 * Math.PI} tileType = 'wall' />

            {/* Main Hall */}

            <GameTile position={[0, 0, 18]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[3, 0, 18]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-3, 0, 18]} rotationY = {Math.PI / 2} tileType = 'wall' />
            <GameTile position={[6, 0, 18]} rotationY = {Math.PI / 2} tileType = 'wall' />
            <GameTile position={[-6, 0, 18]} rotationY = {Math.PI} tileType = 'corner' />
            <GameTile position={[9, 0, 18]} rotationY = {Math.PI / 2} tileType = 'wall' />
            <GameTile position={[12, 0, 18]} rotationY = {Math.PI / 2} tileType = 'wall' />
            <GameTile position={[15, 0, 18]} rotationY = {Math.PI / 2} tileType = 'corner' />

            <GameTile position={[15, 0, 21]} rotationY = {0} tileType = 'wall' />
            <GameTile position={[12, 0, 21]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[9, 0, 21]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[6, 0, 21]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[3, 0, 21]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[0, 0, 21]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-3, 0, 21]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-6, 0, 21]} rotationY = {Math.PI} tileType = 'wall' />
            
            <GameTile position={[15, 0, 24]} rotationY = {0} tileType = 'wall' />
            <GameTile position={[12, 0, 24]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[9, 0, 24]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[6, 0, 24]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[3, 0, 24]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[0, 0, 24]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-3, 0, 24]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-6, 0, 24]} rotationY = {Math.PI} tileType = 'wall' />

            <GameTile position={[15, 0, 27]} rotationY = {0} tileType = 'wall' />
            <GameTile position={[12, 0, 27]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[9, 0, 27]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[6, 0, 27]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[3, 0, 27]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[0, 0, 27]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-3, 0, 27]} rotationY = {0} tileType = 'ceiling' />
            <GameTile position={[-6, 0, 27]} rotationY = {Math.PI} tileType = 'wall' />

            <GameTile position={[15, 0, 30]} rotationY = {0} tileType = 'corner' />
            <GameTile position={[12, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'wall' />
            <GameTile position={[9, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'wall' />
            <GameTile position={[6, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'wall' />
            <GameTile position={[3, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'wall' />
            <GameTile position={[0, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'wall' />
            <GameTile position={[-3, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'wall' />
            <GameTile position={[-6, 0, 30]} rotationY = {3 / 2 * Math.PI} tileType = 'corner' />
            


            {/* Entry Hall */}
            {/* <DungeonFloor args={ [4, 0.5, 10] } position={ [0, 0, 5] } /> */}

            {/* Main Chamber */}
            {/* <DungeonFloor args={ [8, 0.5, 10] } position={ [0, 0, 25] } /> */}
            {/* <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 0.75, 35] } /> */}
            {/* <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 1.25, 36] } /> */}
            {/* <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 1.75, 37] } /> */}
            {/* <DungeonStairs args={ [8, 0.25, 1] } position={ [0, 2.25, 38] } /> */}
            {/* <DungeonFloor args={ [8, 0.5, 8] } position={ [0, 2, 47] } /> */}

            {/* Side Hall */}
            {/* <DungeonFloor args={ [10, 0.5, 2] } position={ [18, 0, 25] } /> */}
            {/* <DungeonFloor args={ [2, 0.5, 20] } position={ [30, 0, 30] } /> */}
            {/* <DungeonFloor args={ [5, 0.5, 2] } position={ [33, 0, 52] } /> */}
            {/* <DungeonFloor args={ [5, 0.5, 2] } position={ [23, 0, 12] } /> */}
            {/* <DungeonFloor args={ [5, 0.5, 2] } position={ [37, 0, 32] } /> */}
            {/* <DungeonFloor args={ [2, 0.5, 5] } position={ [40, 0, 25] } /> */}
            {/* <DungeonFloor args={ [2, 0.5, 5] } position={ [20, 0, 5] } /> */}

          {/* Test Asset */}
          {/* <DungeonColumn position={ [0, 2.5, 0] }/> */}

          {/* Toggles */}
          {/* <GameSwitch position={ [40, 1.5, 22] } color="green" /> */}
          {/* <GameSwitch position={ [20, 1.5, 2] } color="yellow" /> */}
          {/* <GameSwitch position={ [36, 1.5, 52] } color="red" /> */}

          {/* Gate */}
          {/* <GameGate position={ [0, 5, 50] } color="purple" /> */}

          <Player />
        </Physics>
        <PointerLockControls />
        {/* <OrbitControls /> */}
      </Canvas>
    </KeyboardControls>
  )
}
