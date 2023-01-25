
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

import useGameStore from '../stores/useSwitches'

const switchGeometry = new THREE.OctahedronGeometry(1, 0)
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: '#111111', metalness: 0, roughness: 0 })

export default function GameGate(props)
{

    // Get ref for switch.
    const ref = useRef()

    // Set up start for gate.
    const gateY = props.position[1]

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
    useFrame((state) => {

        ref.current.setNextKinematicTranslation({
            x: props.position[0], 
            y: props.position[1] = THREE.MathUtils.lerp(
                    props.position[1], 
                    clicked 
                        ? gateY + 5
                        : gateY, 
                    0.01
                ),
            z: props.position[2] 
        })

    })

    return <>

        <RigidBody 
            ref={ref} 
            type="kinematicPosition" 
            restitution={ 0.2 } 
            friction={ 0 }
            {...props}
        >
            <mesh 
                geometry={ boxGeometry } 
                material={ obstacleMaterial } 
                scale={ [ 16, 5, 1 ] } 
            />
        </RigidBody>
    
        {/* <mesh
            ref={ref}
            scale={clicked ? 1.5 : 1}
            geometry={switchGeometry}
            {...props}
        >
            <meshStandardMaterial color={props.color} />
        </mesh> */}
    
    </>

}