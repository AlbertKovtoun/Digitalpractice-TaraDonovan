let boxDimensions = window.innerHeight - 150

let boxWidth = boxDimensions
let boxHeight = boxDimensions

let sizeText = 32

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const pane = new Tweakpane.Pane()

const PARAMS = {
  symbol: "{",
  rows: 30,
  cols: 50,
  horizontalRandomness: 0,
  verticalRandomness: 0,
}

function setup() {
  createCanvas(sizes.width, sizes.height)
  noLoop()

  pane.addInput(PARAMS, "cols", {
    min: 20,
    max: 200,
    step: 1,
    label: "Horizontal Amount",
  })

  pane.addInput(PARAMS, "rows", {
    min: 20,
    max: 200,
    step: 1,
    label: "Vertical Amount",
  })

  pane.addInput(PARAMS, "symbol", {
    label: "Symbol",
  })

  pane.addInput(PARAMS, "horizontalRandomness", {
    min: 0,
    max: 10,
    label: "Horizontal Randomness",
  })

  pane.addInput(PARAMS, "verticalRandomness", {
    min: 0,
    max: 10,
    label: "Vertical Randomness",
  })

  pane.on("change", (ev) => {
    redraw()
  })
}

function draw() {
  background("#ffffff")
  translate(sizes.width / 2, sizes.height / 2)

  //Box as helper
  // fill(240)
  // noStroke()
  // rect(0 - boxWidth / 2, 0 - boxHeight / 2, boxWidth, boxHeight)

  textSize(sizeText)
  textAlign(LEFT, TOP)

  for (let i = 0; i < PARAMS.rows; i++) {
    for (let j = 0; j < PARAMS.cols; j++) {
      fill(0, 0, 0, (200 / PARAMS.cols) * i)
      // fill(0, 0, 0, 255)
      text(
        PARAMS.symbol,
        (boxWidth / PARAMS.cols) * j -
          boxWidth / 2 +
          Math.random() * PARAMS.horizontalRandomness,
        (boxHeight / PARAMS.rows) * i -
          boxHeight / 2 +
          Math.random() * PARAMS.verticalRandomness
      )
    }
  }
}

function windowResized() {
  resizeCanvas(sizes.width, sizes.height)
}
