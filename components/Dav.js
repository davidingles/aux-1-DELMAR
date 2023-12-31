/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/3D DELMAR.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom001"].geometry}
        material={materials["back-dil"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom001_1"].geometry}
        material={materials["TQ_ARD_back.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom001_2"].geometry}
        material={materials["TQ_ARD_edge.001"]}
      />
    </group>
  );
}

useGLTF.preload("/3D DELMAR.gltf");
