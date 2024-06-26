
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/fraktur_01.glb')
  return (
    <group {...props} dispose={null}>
      <points
        castShadow
        receiveShadow
        geometry={nodes.Fraktur_Mag_mesh.geometry}
        // material={nodes.Fraktur_Mag_mesh.material}
        position={[-3.5, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        >
      <pointsMaterial color="#5786F5" size={0.0015} sizeAttenuation/>
      </points>
    </group>
  )
}

useGLTF.preload('./models/fraktur_01.glb')