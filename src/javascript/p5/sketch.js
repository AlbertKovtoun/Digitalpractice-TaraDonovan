// const rows = 52
const rows = 32
const cols = 28

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const pane = new Tweakpane.Pane()

const PARAMS = {
  symbol: "A",
  colsSpace: 15,
  rowsSpace: 25,
  horizontalRandomness: 1,
  verticalRandomness: 1,
}

function setup() {
  createCanvas(sizes.width, sizes.height)
  noLoop()

  pane.addInput(PARAMS, "colsSpace", {
    min: 10,
    max: 25,
    step: 0.1,
    label: "Horizontal Space",
  })

  pane.addInput(PARAMS, "rowsSpace", {
    min: 10,
    max: 30,
    step: 0.1,
    label: "Vertical Space",
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
  //   translate(sizes.width / 2, sizes.height / 2)

  textSize(32)
  // textAlign(CENTER)
  fill("#000000")

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      text(
        PARAMS.symbol,
        j * PARAMS.colsSpace + Math.random() * PARAMS.horizontalRandomness,
        i * PARAMS.rowsSpace + Math.random() * PARAMS.verticalRandomness
      )
    }
  }
}

function windowResized() {
  resizeCanvas(sizes.width, sizes.height)
}
