import * as THREE from 'three'

// 新建场景
const scene = new THREE.Scene()
scene.background = new THREE.Color('#F0F0F0')

// 添加相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// 创建物体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({ color: '#468585', emissive: '#468585' })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 添加光照
const light = new THREE.DirectionalLight(0x9CDBA6, 10)
light.position.set(1, 1, 1)
scene.add(light)

// 添加渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 渲染场景
renderer.render(scene, camera)