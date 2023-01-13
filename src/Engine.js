
import { Canvas } from '@react-three/fiber'
import { KeyboardControls, OrbitControls, PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

// Import Lights
import Floor from './level/Floor'
import Lights from './utilities/Lights'

export default function Engine( {children} )
{
    return <>

        <KeyboardControls
            map={ [
                { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
                { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
                { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
                { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
                { name: 'jump', keys: [ 'Space' ] }
            ] }
        >

            <Canvas shadows camera={{ fov: 45}}>

                <color args={ [ '#252731' ] } attach="background" />

                <Lights />

                <Physics gravity={[0, -9.8, 0]}>

                    {/* This is where player and level pass in. */}
                    {children}

                    <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />

                </Physics>

                <PointerLockControls />
                {/* <OrbitControls /> */}

            </Canvas>

        </KeyboardControls>

    </>
}