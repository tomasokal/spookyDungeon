
import { usePlane } from '@react-three/cannon'

export default function Floor( props )
{

    const [ref] = usePlane((index) => ({ 

        type: "Static", 
        mass: 0, 
        ...props,

    }))

    return <>

        <mesh rotation={ props.rotation } ref={ ref }>
            <planeGeometry args={ [ 10, 10 ] } />
            <meshStandardMaterial color={ props.color } />
        </mesh>

    </>

}