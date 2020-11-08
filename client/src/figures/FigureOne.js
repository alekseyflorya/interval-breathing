import * as THREE from 'three'

export function FigureOne(sceneRef) {
  let phase = 0;

  const scene = new THREE.Scene();
  //scene.background = new THREE.Color(bgColour);
  const camera = new THREE.PerspectiveCamera(95, sceneRef.clientWidth / ((sceneRef.clientWidth/16)*12), 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(sceneRef.clientWidth, (sceneRef.clientWidth/16)*12);
  renderer.setClearColor( 0x000000, 0 );

  sceneRef.appendChild(renderer.domElement);

  const frontSpot = new THREE.SpotLight(0xeeeece);
  frontSpot.position.set(1000, 1000, 1000);
  scene.add(frontSpot);
  const frontSpot2 = new THREE.SpotLight(0xddddce);
  frontSpot2.position.set(-500, -500, -500);
  scene.add(frontSpot2);

  const pitchSegments = 25;
  const elevationSegments = pitchSegments / 2;
  const radius = 15

  let radius1 = 0
  let radius2 = .2
  let minus = false
  let ring = true
  let rotation = false

  const sphereSize = 0.1
  const geometry = new THREE.SphereGeometry(sphereSize, 15, 15);
  const geometryTwo = new THREE.SphereGeometry(sphereSize, 15, 15);
  const material5 = new THREE.MeshPhongMaterial({ color: 0xfa479a, emissive: 0x111111, specular: 0xbcbcbc, });

  const parentContainer = new THREE.Group();

  scene.add(parentContainer);
  const step2 = 0
  window.addEventListener('resize', onWindowResize, false);
  function sphere(materialColor, geometryParticle) {
    scene.add(parentContainer);
    for (let p = 0; p < pitchSegments; p++) {
      const pitch = Math.PI * 2 * p / pitchSegments;
      for (let e = step2; e < elevationSegments + 1; e++) {
        const elevation = Math.PI * ((e / elevationSegments) - 0.5)
        const particle = new THREE.Mesh(geometryParticle, materialColor);

        const dest = new THREE.Vector3();
        dest.y = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
        dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
        dest.z = Math.sin(elevation) * radius; //y pos in sphere

        particle.position.x = dest.x
        particle.position.y = dest.y
        particle.position.z = dest.z
        particle.name = 'particle'

        parentContainer.add(particle);
      }
    }
  }

  function onWindowResize() {
    camera.aspect = sceneRef.clientWidth / sceneRef.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight);
  }


  function render(start) {
    start = true;
    if(start) {
      if (radius1 < 5.7 && !minus) {
        radius1 += 0.0205
        radius2 += 0.0205
      } else {
        setTimeout(() => {
          minus = true
        }, 2500);
      }
      if (radius2 > 0 && minus) {
        radius1 -= 0.025
        radius2 -= 0.023
      }
      if (radius1 <= 0) {
        ring = false
        setTimeout(() => {
          rotation = true
        }, 2000);
      }

      parentContainer.rotation.y += 0.01
      parentContainer.rotation.x += 0.01
      parentContainer.rotation.z += 0.01

      renderer.render(scene, camera);

      switch (phase) {
        case 0:
          sphere(material5, geometryTwo)
          break
        case 500: case 1000: case 1500: case 2000:
          sphere(material5, geometry)
          break
        case 100: case 600: case 1100: case 1600: case 2200:
          sphere(material5, geometryTwo)
          break
        case 200: case 700: case 1200: case 1700: case 2400:
          sphere(material5, geometry)
          break
        case 300: case 800: case 1300: case 1800: case 2600:
          sphere(material5, geometryTwo)
          break
        case 400: case 900: case 1400: case 1900: case 2800:
          sphere(material5, geometry)
          break
      }
      phase += 5

      requestAnimationFrame(render);
    }
  }
  render();
}

// import * as THREE from 'three'
//
// export function FigureOne(sceneRef) {
//     let phase = 0;
//
//     const scene = new THREE.Scene();
//     //scene.background = new THREE.Color(bgColour);
//     const camera = new THREE.PerspectiveCamera(95, sceneRef.clientWidth / ((sceneRef.clientWidth/16)*12), 0.1, 1000);
//     camera.position.z = 30;
//
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//
//     renderer.setSize(sceneRef.clientWidth, (sceneRef.clientWidth/16)*12);
//     renderer.setClearColor( 0x000000, 0 );
//
//     sceneRef.appendChild(renderer.domElement);
//
//     const frontSpot = new THREE.SpotLight(0xeeeece);
//     frontSpot.position.set(1000, 1000, 1000);
//     scene.add(frontSpot);
//     const frontSpot2 = new THREE.SpotLight(0xddddce);
//     frontSpot2.position.set(-500, -500, -500);
//     scene.add(frontSpot2);
//
//     const pitchSegments = 25;
//     const elevationSegments = pitchSegments / 2;
//     const radius = 15
//
//     let radius1 = 0
//     let radius2 = .2
//     let minus = false
//     let ring = true
//     let rotation = false
//
//     const sphereSize = 0.1
//     const geometry = new THREE.SphereGeometry(sphereSize, 15, 15);
//     const geometryTwo = new THREE.SphereGeometry(sphereSize, 15, 15);
//     const material5 = new THREE.MeshPhongMaterial({ color: 0xfa479a, emissive: 0x111111, specular: 0xbcbcbc, });
//
//     const parentContainer = new THREE.Group();
//
//     scene.add(parentContainer);
//     const step2 = 0
//     window.addEventListener('resize', onWindowResize, false);
//     function sphere(materialColor, geometryParticle) {
//       scene.add(parentContainer);
//       for (let p = 0; p < pitchSegments; p++) {
//         const pitch = Math.PI * 2 * p / pitchSegments;
//         for (let e = step2; e < elevationSegments + 1; e++) {
//           const elevation = Math.PI * ((e / elevationSegments) - 0.5)
//           const particle = new THREE.Mesh(geometryParticle, materialColor);
//
//           const dest = new THREE.Vector3();
//           dest.y = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
//           dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
//           dest.z = Math.sin(elevation) * radius; //y pos in sphere
//
//           particle.position.x = dest.x
//           particle.position.y = dest.y
//           particle.position.z = dest.z
//           particle.name = 'particle'
//
//           parentContainer.add(particle);
//         }
//       }
//     }
//
//     function onWindowResize() {
//       camera.aspect = sceneRef.clientWidth / sceneRef.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight);
//     }
//
//
//     function render(start) {
//       start = true;
//       if(start) {
//         if (radius1 < 5.7 && !minus) {
//         radius1 += 0.0205
//         radius2 += 0.0205
//       } else {
//         setTimeout(() => {
//           minus = true
//         }, 2500);
//       }
//       if (radius2 > 0 && minus) {
//         radius1 -= 0.025
//         radius2 -= 0.023
//       }
//       if (radius1 <= 0) {
//         ring = false
//         setTimeout(() => {
//           rotation = true
//         }, 2000);
//       }
//
//       parentContainer.rotation.y += 0.01
//       parentContainer.rotation.x += 0.01
//       parentContainer.rotation.z += 0.01
//
//       renderer.render(scene, camera);
//
//       switch (phase) {
//         case 0:
//           sphere(material5, geometryTwo)
//           break
//         case 500: case 1000: case 1500: case 2000:
//           sphere(material5, geometry)
//           break
//         case 100: case 600: case 1100: case 1600: case 2200:
//           sphere(material5, geometryTwo)
//           break
//         case 200: case 700: case 1200: case 1700: case 2400:
//           sphere(material5, geometry)
//           break
//         case 300: case 800: case 1300: case 1800: case 2600:
//           sphere(material5, geometryTwo)
//           break
//         case 400: case 900: case 1400: case 1900: case 2800:
//           sphere(material5, geometry)
//           break
//       }
//       phase += 5
//
//       requestAnimationFrame(render);
//       }
//     }
//     render();
// }