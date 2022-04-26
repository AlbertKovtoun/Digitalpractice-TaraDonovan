import { Pane } from "tweakpane"

export const setSketch = (p) => {
  let boxDimensions = window.innerHeight - 150

  let boxWidth = boxDimensions
  let boxHeight = boxDimensions

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const pane = new Pane()

  const PARAMS = {
    symbol: "{",
    symbolSize: 32,
    symbolColor: "#000000",
    backgroundColor: "#ffffff",
    rows: 30,
    cols: 50,
    horizontalRandomness: 0,
    verticalRandomness: 0,
    density: 1,
    fade: 0,
    fadeStrength: 0.1,
  }

  function colorAlpha(aColor, alpha) {
    let c = p.color(aColor)
    return p.color(
      "rgba(" + [p.red(c), p.green(c), p.blue(c), alpha].join(",") + ")"
    )
  }

  function setSymbolColors(i, j) {
    switch (PARAMS.fade) {
      case 0:
        return p.fill(colorAlpha(PARAMS.symbolColor, 1))
        break

      case -1:
        return p.fill(
          // colorAlpha(PARAMS.symbolColor, (PARAMS.cols / j) * PARAMS.fadeStrength)
          colorAlpha(
            PARAMS.symbolColor,
            (j / PARAMS.cols) * PARAMS.fadeStrength * 2
          )
        )
        break

      case -2:
        return p.fill(
          colorAlpha(
            PARAMS.symbolColor,
            (i / PARAMS.rows) * PARAMS.fadeStrength * 2
          )
        )
        break
    }
  }

  p.setup = () => {
    p.createCanvas(sizes.width, sizes.height)
    p.noLoop()

    pane.addInput(PARAMS, "symbol", {
      label: "Symbol",
    })

    pane.addInput(PARAMS, "symbolSize", {
      label: "Symbol Size",
      min: 1,
      max: 255,
      step: 1,
    })

    pane.addInput(PARAMS, "symbolColor", {
      label: "Symbol Color",
    })

    pane.addInput(PARAMS, "backgroundColor", {
      label: "Background Color",
    })

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

    pane.addInput(PARAMS, "density", {
      min: 1,
      max: 5,
      label: "Symbol Density",
      step: 0.1,
    })

    pane.addInput(PARAMS, "fade", {
      label: "Fade",
      options: {
        "No fade": 0,
        // "Left to right": 1,
        "Right to left": -1,
        // "Top to bottom": 2,
        "Bottom to top": -2,
      },
    })

    pane.addInput(PARAMS, "fadeStrength", {
      min: 0,
      max: 1,
      step: 0.01,
      label: "Fade Strength",
    })

    pane.on("change", (ev) => {
      p.redraw()
    })
  }

  p.draw = () => {
    p.background(PARAMS.backgroundColor)
    p.translate(sizes.width / 2, sizes.height / 2)

    //Box as helper
    // p.fill(240)
    // noStroke()
    // rect(0 - boxWidth / 2, 0 - boxHeight / 2, boxWidth, boxHeight)

    p.textSize(PARAMS.symbolSize)
    p.textAlign(p.LEFT, p.TOP)

    for (let i = 0; i < PARAMS.rows; i++) {
      for (let j = 0; j < PARAMS.cols; j++) {
        // p.fill(0, 0, 0, (255 / PARAMS.rows) * i)
        // p.fill(0, 0, 0, (90 * PARAMS.cols) / j)
        // p.fill(colorAlpha(PARAMS.symbolColor, 1))

        setSymbolColors(i, j)

        p.text(
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

  p.windowResized = () => {
    p.resizeCanvas(sizes.width, sizes.height)
  }
}
