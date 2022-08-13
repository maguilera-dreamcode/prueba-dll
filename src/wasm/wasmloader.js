const loader = require("@assemblyscript/loader");
let wasm;
export const loadWASM = () => {
  return loader
    .instantiate(fetch("release.wasm"))
    .then((result) => {
      //storing the response inside a wasm variable for now
      wasm = result;
      return true;
    })
    .catch((error) => {
      console.error("Error loading WASM file", error);
      return false;
    });
};
export const add = (a, b) => wasm.exports.add(a, b);
