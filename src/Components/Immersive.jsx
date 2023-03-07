import { Html, ContactShadows, Environment, Float, PresentationControls, useGLTF, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useEffect, useRef } from 'react'


const Immersive = () => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const { x, y, z, xx, yy, zz } = useControls({
        x: {
            value: 0.1,
            min: 0,
            max: 1,
            step: 0.01,
        },
        y: {
            value: 0.09,
            min: 0,
            max: 1,
            step: 0.01,
        },
        z: {
            value: 0,
            min: 0,
            max: -7,
            step: 0.01,
        },

    })

    // const boxRef = useRef();

    // console.log(boxRef.current);
    // useFrame((state, delta) => {
    //     boxRef.current.rotation.y += delta
    // })

    const url1 = 'https://bruno-simon.com/html/'
    const url2 = 'https://famous-snickerdoodle-335122.netlify.app'
    const url3 = 'https://fluffy-kashata-6ab478.netlify.app'


    return (
        <>

            <Environment preset='city' />
            {/* since backfround is lighe we will use light tint */}
            <color args={["#451a02"]} attach="background" />
            {/* <ambientLight /> */}
            {/* <OrbitControls makeDefault /> */}
            {/* <mesh position={[0, 0, 2]} ref={boxRef} >
                <boxGeometry />
                <meshNormalMaterial />
            </mesh> */}

            {/* special Ojbect control */}
            <PresentationControls global rotation={[x, y, 0]} polar={[-0.42, 0.2]}
                azimuth={[-1, 0.75]} config={{ mass: 2, tension: 800 }}
                snap={{ mass: 5, tension: 800 }}>
                {/* floarting animation */}
                <Float rotationIntensity={.2}>

                    {/* Light */}
                    <rectAreaLight
                        width={2.5} height={1.6}
                        intensity={200} color={"rgb(235, 93, 16)"}
                        position={[0, 0.5, -1.1]} rotation={[-0.1, Math.PI, 0]} />

                    {/* Laptopm */}
                    <primitive position-y={-1.2} scale={0.85} object={computer.scene} >
                        {/* the webpage inside laptop */}
                        <Html transform wrapperClass='htmlview' distanceFactor={1.201}
                            position={[0, 1.54, - 1.42]} rotation-x={-0.261}>
                            <iframe src={url3} ></iframe>
                        </Html>

                    </primitive>
                    <Text font='./Aktura/WEB/fonts/Aktura-Regular.woff'
                        fontSize={1}
                        position={[1.5, 1.2, 0.5]}
                        rotation-y={-1.6}
                        maxWidth={2}
                        textAlign={'center'}
                    > Ashraful  Islam </Text>
                </Float>

            </PresentationControls>

            <ContactShadows
                position-y={-1.1}
                blur={3}
                opacity={0.5}

            />

        </>
    )
}

export default Immersive