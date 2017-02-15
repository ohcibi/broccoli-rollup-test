const Rollup = require("broccoli-rollup")
const babel = require("rollup-plugin-babel")
const nodeResolve = require("rollup-plugin-node-resolve")
const commonJS = require("rollup-plugin-commonjs")
const mergeTrees = require("broccoli-merge-trees")

module.exports = new Rollup(mergeTrees(["lib"]), {
  rollup: {
    entry: "index.js",
    dest: "lib.js",
    format: "iife",
    plugins: [
      nodeResolve({jsnext: true, main: true}),
      commonJS({browser: true, include: "node_modules/**"}),
      babel({exclude: "node_modules/**"})
    ]
  }
})
