import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

// export function Ground(props) {
//   const texture = useTexture(grass)
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping
//   return (
//     <RigidBody {...props} type="fixed" colliders={false}>
//       <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
//         <planeGeometry args={[1000, 1000]} />
//         <meshStandardMaterial map={texture} map-repeat={[240, 240]} color="green" />
//       </mesh>
//       <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
//     </RigidBody>
//   )
// }

// const floorMaterial
// const wallMaterial
// const stairMaterial
// const columnMaterial

const columnGeometry = new THREE.CylinderGeometry(1.5, 1.5, 5, 32)
const wallGeometry = new THREE.PlaneGeometry(1.5, 1.5, 5, 32)

export function DungeonTest()
{

  return <>
  
    <RigidBody type="fixed" colliders={false} >

      <CuboidCollider args={ [10, 0.5, 10] } position={ [0, 0, 0] } />

    </RigidBody>
  
  </>

}

// export function DungeonFloor()
// {

//   return <>
  
//     <mesh>

//     </mesh>
  
//   </>

// }

// export function DungeonWall()

// export function DungeonColumn()

export function DungeonColumn(props) {

  return <>
  
    <mesh
      geometry={columnGeometry}
      {...props}
    >
      <meshStandardMaterial color="red" />
    </mesh>
  
  </>

}