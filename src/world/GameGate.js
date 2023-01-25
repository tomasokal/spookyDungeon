
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import useGameStore from '../stores/useSwitches'

const switchGeometry = new THREE.OctahedronGeometry(1, 0)

export default function GameGate(props)
{

    // Get ref for switch.
    const ref = useRef()

    // Set up local state.
    const [clicked, click] = useState(false)

    // Pull in zustand state management.
    const correctOrder = useGameStore((state) => state.correctOrder)

    // Check whether need to reset switch.
    useEffect(() =>
    {
        // If sequence is of length three:
            // 1. DONE: Set sequence to nothing.
            // 2. DONE: Change all switches to be turned off.
            // 3. TODO: Give player some indication they failed.
        if(correctOrder)
        {
            click(!clicked)
        }
    }, [correctOrder])

    // Frame management for opening gate.
    // TODO: Set up some cool effect for how this opens.
    // useFrame((state) => {

    //     const t = state.clock.getElapsedTime()
    //     ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, clicked ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
    //     ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, clicked ? Math.sin(t / 10) / 4 : 0, 0.1)
    //     ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, clicked ? Math.sin(t / 10) / 10 : 0, 0.1)
    //     ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, clicked ? (4 + Math.sin(t)) / 2 : 1.5, 0.1)

    // })

    return <>
    
        <mesh
            ref={ref}
            scale={clicked ? 1.5 : 1}
            geometry={switchGeometry}
            {...props}
        >
            <meshStandardMaterial color={props.color} />
        </mesh>
    
    </>

}