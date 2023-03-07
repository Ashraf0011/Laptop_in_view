import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import './App.css'
import Immersive from './Components/Immersive';


function App() {
    const [count, setCount] = useState(0)

    return (
        <Suspense fallback={<Loading />}>
            <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [-3, 1.5, 4] }}>
                <Immersive />
            </Canvas>
        </Suspense>

    )
}

function Loading() {
    return <h2 style={{ position: 'absolute', top: "50%", left: "50%", transition: "all 1s" }} >🌀 Loading...</h2>;
}



export default App
