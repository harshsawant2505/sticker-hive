/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ThreeScene(props) {
  const { nodes, materials } = useGLTF('/assets/blackkeyboard.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Black.001']}
        position={[0, 0.148, 0]}
        rotation={[0.048, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials['Black.001']}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials['Key_img.001']}
          />
        </mesh>
      </mesh>
    </group>
  )
}



useGLTF.preload('/assets/blackkeyboard.glb')