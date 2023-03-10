import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useHelper, useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, Debug, RigidBody, useRapier } from "@react-three/rapier"
import Axe from "./Axe"
import { Torch } from './Axe'

const SPEED = 10
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

export default function Player({ lerp = THREE.MathUtils.lerp }) 
{
  const axe = useRef()
  const light = useRef()
  const ref = useRef()
  const rapier = useRapier()
  const [, get] = useKeyboardControls()

  // Player Light
  const playerLight = useRef()
  // useHelper(playerLight, THREE.PointLightHelper, 1)

  useFrame((state) => {
    const { forward, backward, leftward, rightward, jump } = get()
    const velocity = ref.current.linvel()
    // update camera
    state.camera.position.set(...ref.current.translation())
    // update axe
    axe.current.children[0].rotation.z = lerp(axe.current.children[0].rotation.z, Math.sin((velocity.length() > 1) * state.clock.elapsedTime * 10) / 6, 0.1)
    axe.current.rotation.copy(state.camera.rotation)
    axe.current.position.copy(state.camera.position).add(state.camera.getWorldDirection(rotation).multiplyScalar(1))
    // // movement
    frontVector.set(0, 0, backward - forward)
    sideVector.set(leftward - rightward, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
    // jumping
    const world = rapier.world.raw()
    const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }))
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 10, z: 0 })
  })
  return <>
      <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 3, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
      {/* <Debug /> */}
      <group 
        ref={axe} 
        // onClick={(e) => (axe.current.children[0].rotation.x = -0.5)}
      >
        {/* <Torch position={[0.3, -0.35, 0.5]} /> */}
        <pointLight 
          ref={playerLight}
          color={0xfff2cc}
          intensity={0.25}
          distance={10}
          decay={1}
          position={[0, 0, 0]}
        />
      </group>
  </>
}
