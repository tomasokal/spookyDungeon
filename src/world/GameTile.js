
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Geometries
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

// Materials
const floorMaterial = new THREE.MeshStandardMaterial({ color: '#565656', metalness: 0, roughness: 0 })
const wallMaterial = new THREE.MeshStandardMaterial({ color: '#565656', metalness: 0, roughness: 0 })
const ceilingMaterial = new THREE.MeshStandardMaterial({ color: '#565656', metalness: 0, roughness: 0 })

export default function GameTile({ position = [ 0, 0, 0 ], wallDirection = 'left' })
{

    // Create ref for tile.
    const ref = useRef()

    // Set up wallDirection of wall.
    let wallPosition = [ 1.375, 2.5, 0 ]
    let wallScale = [ 0.25, 5, 3 ]

    console.log(wallDirection)

        if(wallDirection=='right')
        {
            wallPosition = [ -1.375, 2.5, 0 ]
            wallScale = [ 0.25, 5, 3 ]
        }

    return <>

        <group position={ position }>

            {/* Floor */}

            <mesh
                geometry={boxGeometry}
                material={floorMaterial}
                scale={[ 3, 0.25, 3 ]} 
                position={[ 0, 0, 0 ]}
            />

            {/* Wall */}

            <mesh
                geometry={boxGeometry}
                material={floorMaterial}
                scale={wallScale} 
                position={wallPosition}
            />

            {/* Ceiling */}

            <mesh
                geometry={boxGeometry}
                material={ceilingMaterial}
                scale={[ 3, 0.25, 3 ]} 
                position={[ 0, 5, 0 ]}
            />

        </group>  
    
    </>

}