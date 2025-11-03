function changeDescription(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector(".current-temperature-value");
  let currentTemperature = temperatureElement.innerHTML;
  let changeDegree = document.querySelector(".current-temperature-unit");
  changeDegree.innerHTML = currentTemperature;
}
