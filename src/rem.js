const pxTorem = () => {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 100 + 'px'
}
pxTorem()
window.onresize = function () {
  pxTorem()
}
