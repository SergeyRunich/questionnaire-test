var slider = document.getElementById("sliderRange");

slider.oninput = function() {
  output.innerHTML = this.value;
}
