import { useAnimations, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { useEffect } from 'react'

export default function Molly()
{
    const zz = useGLTF("./molly.glb")
    const animations = useAnimations(zz.animations, zz.scene)

    const { animationName } = useControls({
        animationName: { options: animations.names }
    })
    
    useEffect(() =>
    {
        const action = animations.actions.eyeAction
    
        action
            .reset()
            // .fadeIn(1)
            .play()

        // return () =>
        // {
        //     action.fadeOut(1)
        // }
    }, [ "eyeAction" ])

    return <primitive
        object={ zz.scene }
        scale={ 0.5 }
    />
}
