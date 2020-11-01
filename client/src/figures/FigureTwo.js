import * as THREE from 'three'

export function FigureTwo(sceneRef) {
    var width = sceneRef.clientWidth
    var height = (sceneRef.clientWidth/16)*12
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 40;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    sceneRef.appendChild(renderer.domElement);

    var frontSpot = new THREE.SpotLight(0xeeeece);
    frontSpot.position.set(1000, 1000, 1000);
    scene.add(frontSpot);
    var frontSpot2 = new THREE.SpotLight(0xddddce);
    frontSpot2.position.set(-500, -500, -500);
    scene.add(frontSpot2);

    var pitchSegments = 26;
    var radius = 15
    var elevationSegments = 14
    var rotation
    var rotation2 = true
    var colors = 230
    var step = 0.5

    var sphereSize = 0.31
    var geometry = new THREE.SphereGeometry(sphereSize, 15, 15);
    var geometryTwo = new THREE.SphereGeometry(0.61, 15, 15);
    var material2 = new THREE.MeshPhongMaterial({ color: 0x000000, emissive: 0x111111, specular: 0xbcbcbc, });
    var material4 = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x111111, specular: 0xbcbcbc, });
    var material5 = new THREE.MeshPhongMaterial({ color: 0xfa479a, emissive: 0x111111, specular: 0xbcbcbc, });

    var parentContainer1 = new THREE.Group();
    var parentContainer2 = new THREE.Group();
    var parentContainer3 = new THREE.Group();
    var parentContainer4 = new THREE.Group();

    scene.add(parentContainer1, parentContainer2, parentContainer3, parentContainer4);

    var points = []
    var spherePoints = []

    window.addEventListener('resize', onWindowResize, false);

    function createParticle(materialColor, geometryParticle, particles, parentContainer) {

      for (let i = 0; i < particles; i++) {
        var particle = new THREE.Mesh(geometryParticle, materialColor);
        particle.position.set(0, 0, 0)
        particle.name = 'particle'
        var point = { x: Math.random() * 10 - 5, y: Math.random() * 10 - 5, z: Math.random() * 10 - 5 }
        points.push(point)

        parentContainer.add(particle);

      }
    }
    function sphere() {
      for (var p = 0; p < pitchSegments; p++) {
        var pitch = Math.PI * 2 * p / pitchSegments;
        for (var e = 0; e < elevationSegments; e++) {
          if (e === 1 && p % 2 === 0) e += 1
          if (e === 13 && p % 2 === 0) e += 1
          if (e === 13 && p % 4 === 0) e += 1
          var elevation = Math.PI * ((e / elevationSegments) - 0.5)
          var dest = new THREE.Vector3();
          dest.y = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
          dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
          dest.z = Math.sin(elevation) * radius; //y pos in sphere

          var point = { x: dest.x, y: dest.y, z: dest.z }
          spherePoints.push(point)
        }
      }
    }

    function updatePosition(points, parentContainer) {
      for (var i = 0, l = points.length; i < l; i++) {
        var particle = parentContainer.children[i];
        var point = points[i]

        if (point.x >= 0) {
          if (particle.position.x > point.x) {
            let step = particle.position.x - point.x
            particle.position.x -= step / 40
          }
          if (particle.position.x < point.x) {
            let step = point.x - particle.position.x
            particle.position.x += step / 40
          }
        } else {
          if (particle.position.x > point.x) {
            let step = particle.position.x - point.x
            particle.position.x -= step / 40
          }
          if (particle.position.x < point.x) {
            let step = point.x - particle.position.x
            particle.position.x += step / 40
          }
        }

        if (point.y >= 0) {
          if (particle.position.y > point.y) {
            let step = particle.position.y - point.y
            particle.position.y -= step / 40
          }
          if (particle.position.y < point.y) {
            let step = point.y - particle.position.y
            particle.position.y += step / 40
          }
        } else {
          if (particle.position.y > point.y) {
            let step = particle.position.y - point.y
            particle.position.y -= step / 40
          }
          if (particle.position.y < point.y) {
            let step = point.y - particle.position.y
            particle.position.y += step / 40
          }
        }

        if (point.z >= 0) {
          if (particle.position.z > point.z) {
            let step = particle.position.z - point.z
            particle.position.z -= step / 40
          }
          if (particle.position.z < point.z) {
            let step = point.z - particle.position.z
            particle.position.z += step / 40
          }

        } else {
          if (particle.position.z > point.z) {
            let step = particle.position.z - point.z
            particle.position.z -= step / 40
          }
          if (particle.position.z < point.z) {
            let step = point.z - particle.position.z
            particle.position.z += step / 40
          }
        }
      }
    }

    function randPoints(parentContainer) {
      for (var i = 0, l = parentContainer.children.length; i < l; i++) {
        var particle = parentContainer.children[i];
        var point = points[i]

        if (particle.position.x < 30 && particle.position.x > -30) {
          if (particle.position.x > point.x) {
            particle.position.x -= (-point.x / 30)
          }
          if (particle.position.x < point.x) {
            particle.position.x += (point.x / 30)
          }
        } else {
          point.x = -point.x
          if (particle.position.x > point.x) {
            particle.position.x -= (-point.x / 30)
          }
          if (particle.position.x < point.x) {
            particle.position.x += (point.x / 30)
          }
        }
        if (particle.position.y < 30 && particle.position.y > -30) {
          if (particle.position.y > point.y) {
            particle.position.y -= (-point.y / 30)
          }
          if (particle.position.y < point.y) {
            particle.position.y += (point.y / 30)
          }
        } else {
          point.y = -point.y
          if (particle.position.y > point.y) {
            particle.position.y -= (-point.y / 30)
          }
          if (particle.position.y < point.y) {
            particle.position.y += (point.y / 30)
          }
        }
        if (particle.position.z < 30 && particle.position.z > -30) {
          if (particle.position.z > point.z) {
            particle.position.z -= (-point.z / 30)
          }
          if (particle.position.z < point.z) {
            particle.position.z += (point.z / 30)
          }
        } else {
          point.z = -point.z
          if (particle.position.z > point.z) {
            particle.position.z -= (-point.z / 30)
          }
          if (particle.position.z < point.z) {
            particle.position.z += (point.z / 30)
          }
        }
      }
    }

    createParticle(material5, geometry, 351, parentContainer1)
    createParticle(material2, geometryTwo, 103, parentContainer2)
    createParticle(material4, geometryTwo, 71, parentContainer2)
    createParticle(material5, geometry, 216, parentContainer3)
    sphere()
    parentContainer2.visible = false

    function onWindowResize() {
      camera.aspect = sceneRef.clientWidth / sceneRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(sceneRef.clientWidth, sceneRef.clientHeight);
    }
    var time = 0

    function render() {
      for (let i = 0; i < pitchSegments; i++) {
        var point = { x: Math.random() * 10 - 5, y: Math.random() * 10 - 5, z: Math.random() * 10 - 5 }
        points.push(point)

      }
      time += 1
      if (time > 40 && time < 500) {
        parentContainer2.visible = false
        randPoints(parentContainer1)
      }

      if (time > 500 && time < 1000) {
        rotation = true
        updatePosition(spherePoints, parentContainer1)
      }

      if (time > 1000) {
        parentContainer1.rotation.y = 0
        time = 40
      }

      if (colors < 230) step = 0.5
      if (colors > 360) step = -0.5

      colors += step

      material5.color = new THREE.Color(`hsl(${colors},100%,50%)`)
      if (rotation2) {
        parentContainer1.rotation.y += 0.005
      }
      parentContainer3.rotation.y -= 0.005
      parentContainer3.rotation.x -= 0.005

      parentContainer2.rotation.y -= 0.005
      parentContainer2.rotation.z += 0.005

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }
    render();
}
