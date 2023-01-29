
import { RigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Geometries
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

// Materials
const floorMaterial = new THREE.MeshStandardMaterial({ color: '#111111' })
const wallMaterial = new THREE.MeshStandardMaterial({ color: '#333333', })
const ceilingMaterial = new THREE.MeshStandardMaterial({ color: '#555555' })

export default function GameTile({ 
    position = [ 0, 0, 0 ], 
    rotationY = Math.PI,
    tileType = 'wall',
    decoration = 'none' 
})
{

    // Create ref for tile.
    const ref = useRef()

    // Check if need wall.
    const hasWall = !(tileType=='ceiling')

    // Check if corner
    const hasCorner = !!(tileType=='corner')
    console.log(hasWall)
    console.log(hasCorner)

    // Set up wallDirection of wall.
    let wallPositionOne = [ 1.475, 2.5, 0 ]
    let wallScaleOne = [ 0.05, 5, 3 ]
    let wallPositionTwo = [ 0, 2.5, 1.475 ]
    let wallScaleTwo = [ 3, 5, 0.05 ]

    return <>

        <group 
            position={ position }
            rotation-y={rotationY}
        >

            {/* Floor */}
            <RigidBody
                type="kinematicPosition" 
            >
                <mesh
                    geometry={boxGeometry}
                    material={floorMaterial}
                    scale={[ 3, 0.25, 3 ]} 
                    position={[ 0, 0, 0 ]}
                />
            </RigidBody>

            {/* Wall 1 */}
            {
                hasWall && 
                <RigidBody
                    type="kinematicPosition" 
                >
                    <mesh
                        geometry={boxGeometry}
                        material={wallMaterial}
                        scale={wallScaleOne} 
                        position={wallPositionOne}
                    />
                </RigidBody>
            }

            {/* Wall 2 */}
            {
                hasCorner && 
                <RigidBody
                    type="kinematicPosition" 
                >
                    <mesh
                        geometry={boxGeometry}
                        material={wallMaterial}
                        scale={wallScaleTwo} 
                        position={wallPositionTwo}
                    />
                </RigidBody>
            }

            {/* Ceiling */}
            <RigidBody
                type="kinematicPosition" 
            >
                <mesh
                    geometry={boxGeometry}
                    material={ceilingMaterial}
                    scale={[ 3, 0.25, 3 ]} 
                    position={[ 0, 5, 0 ]}
                />
            </RigidBody>

        </group>  
    
    </>

}