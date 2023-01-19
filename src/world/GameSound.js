import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { extend, useLoader, useThree } from '@react-three/fiber'

import bop from '../assets/bop.mp3'

export default function({ url })
{
    const sound = useRef()
    const { camera } = useThree()
    const [listener] = useState(() => new THREE.AudioListener())
    const buffer = useLoader(THREE.AudioLoader, bop)
    useEffect(() => {
        sound.current.setBuffer(buffer)
        sound.current.setRefDistance(1)
        sound.current.setLoop(true)
        sound.current.play()
        camera.add(listener)
        return () => camera.remove(listener)
    }, [])

    return <positionalAudio ref={sound} args={[listener]} />

}