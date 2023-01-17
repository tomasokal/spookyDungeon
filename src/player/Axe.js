

// import { useGLTF } from "@react-three/drei"
// import axeUrl from "../assets/axe.glb"
// import torchURL from '../assets/non-textured_burning_torch_1.glb'
import * as THREE from 'three'

const cylinderGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 32)

// export default function Axe(props) {
//   const { nodes, materials } = useGLTF(axeUrl)
//   return (
//     <group dispose={null} {...props}>
//       <group rotation={[0, Math.PI / 1.8, -0.3]} scale={0.5}>
//         <mesh geometry={nodes.Mesh_1001_1.geometry} material={materials.material_2} />
//         <mesh geometry={nodes.Mesh_1001_2.geometry} material={materials.material_3} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload("/axe.glb")

export function Torch(props)
{

  return <>
  
    <mesh
      geometry={cylinderGeometry}
      {...props}
    >
      <meshStandardMaterial color="limegreen" />
    </mesh>

  </>

}
