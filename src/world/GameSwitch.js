
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import useGameStore from '../stores/useSwitches'

const switchGeometry = new THREE.OctahedronGeometry(1, 0)

export default function GameSwitch(props)
{

    // Get ref for switch.
    const ref = useRef()

    // Set states for hover and click events.
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // Pull in zustand state management.
    const switchList = useGameStore((state) => state.switchOrder)
    const increaseSwitches = useGameStore((state) => state.increaseSwitches)
    const resetSwitches = useGameStore((state) => state.resetSwitches)
    const toggleCorrectOrder = useGameStore((state) => state.toggleCorrectOrder)

    // Function for when player interacts with switch.
    function playerClick ()
    {
        // Only execute if not already clicked.
        // Want player to go through full sequence of clicks and not reset a click.
        if(!clicked)
        {
            // Turn on if not on.
            click(!clicked)
            // Add specific switch to sequence.
            increaseSwitches(props.color)
        }
    }

    // Check whether need to reset switch.
    useEffect(() =>
    {
        // If sequence is of length three:
            // 1. DONE: Set sequence to nothing.
            // 2. DONE: Change all switches to be turned off.
            // 3. TODO: Give player some indication they failed.
        if(switchList.length === 3)
        {
            if(JSON.stringify(switchList) == JSON.stringify(['green', 'yellow', 'red']))
            {
                toggleCorrectOrder()
            }
            else 
            {
                resetSwitches()
                click(false)
            }
        }
    }, [switchList.length])

    // Frame management for floating and turn on animation.
    // TODO: Check whether can make switch fall down on ground with physics. 
    useFrame((state) => {

        const t = state.clock.getElapsedTime()
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, clicked ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, clicked ? Math.sin(t / 10) / 4 : 0, 0.1)
        ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, clicked ? Math.sin(t / 10) / 10 : 0, 0.1)
        ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, clicked ? (4 + Math.sin(t)) / 2 : 1.5, 0.1)

    })

    return <>
    
        <mesh
            ref={ref}
            onClick={playerClick}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
            geometry={switchGeometry}
            {...props}
        >
            <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </mesh>
    
    </>

}