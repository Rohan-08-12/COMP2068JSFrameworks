function getNumber(id) {
  const v = document.getElementById(id).value.trim();
  return parseFloat(v);
}
function writeValue(id, value) {
  document.getElementById(id).value = Number.isFinite(value)
    ? value.toFixed(2)
    : "";
}

function getCircleArea() {
  const r = getNumber("circle-radius");
  if (isNaN(r) || r <= 0) {
    alert("Enter a valid radius");
    return;
  }
  const area = Math.PI * r * r;
  writeValue("circle-area", area);
}
function getTriangleArea() {
  const b = getNumber("triangle-base");
  const h = getNumber("triangle-height");
  if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
    alert("Enter valid base and height");
    return;
  }
  const area = 0.5 * b * h;
  writeValue("triangle-area", area);
}
function getSquareArea() {
  const a = getNumber("square-side");
  if (isNaN(a) || a <= 0) {
    alert("Enter a valid side length");
    return;
  }
  const area = a * a;
  writeValue("square-area", area);
}
function getRectangleArea() {
  const w = getNumber("rect-width");
  const h = getNumber("rect-height");
  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    alert("Enter valid width and height");
    return;
  }
  const area = w * h;
  writeValue("rect-area", area);
}

document.getElementById("btn-circle").addEventListener("click", getCircleArea);
document
  .getElementById("btn-triangle")
  .addEventListener("click", getTriangleArea);
document.getElementById("btn-square").addEventListener("click", getSquareArea);
document
  .getElementById("btn-rectangle")
  .addEventListener("click", getRectangleArea);
