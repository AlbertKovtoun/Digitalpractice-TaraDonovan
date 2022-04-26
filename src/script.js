import p5 from "p5"
import { setSketch } from "./javascript/p5/sketch"

import "./style.scss"
// import "./javascript/p5/sketch"

new p5(setSketch, document.querySelector(".sketch"))
