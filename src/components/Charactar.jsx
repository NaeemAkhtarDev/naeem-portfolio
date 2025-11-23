
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Charactar(props) {
  const { nodes, materials } = useGLTF('models/self-charactar.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.030}>
        <mesh geometry={nodes.Mesh1_Material001_0.geometry} material={materials['Material.001']} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('models/self-charactar.glb')
