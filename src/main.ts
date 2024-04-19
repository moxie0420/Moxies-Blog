import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Text } from "troika-three-text";

class ThreeRenderer {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  domElement: HTMLCanvasElement;
  modelLoader: GLTFLoader;

  constructor() {
    // create scene, camera, controls, and renderer
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    // set the object domElement
    this.domElement = this.renderer.domElement;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // append renderer to the dom
    this.setsize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.domElement);
    // set default camera position and enables controls
    this.camera.position.set(10, 4, 2);
    this.camera.rotation.set(0, 0, 0);
    this.controls.update();

    this.modelLoader = new GLTFLoader();
    this.load();
  }

  setsize(width: number, height: number) {
    this.renderer.setSize(width, height);
  }
  animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
  load() {
    this.modelLoader.load(
      "/Neon_Street.glb",
      (gltf) => render.scene.add(gltf.scene),
      undefined,
      (error) => console.error(error)
    );
  }
}

function mkText(text: string) {
  const newText = new Text();
  newText.text = text;
  newText.sync();
  return newText;
}

const render = new ThreeRenderer();
const myText = mkText("hello world");
myText.position.set(9, 3, 6);
myText.rotation.set(0, 0.5, 0);
myText.color = 0x9966ff;
myText.sync();

render.scene.add(myText);

render.animate();
