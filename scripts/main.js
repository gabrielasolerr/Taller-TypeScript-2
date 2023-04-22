import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("series");
var seasonAverageElm = document.getElementById("seasons-average");
renderSeriesInTable(dataSeries);
var average = getSeasonAverage(dataSeries);
seasonAverageElm.innerHTML = "".concat(average);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        console.log(serie);
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener('click', function () {
            document.getElementById('serie-title').textContent = serie.name;
            document.getElementById('serie-description').textContent = serie.description;
            var serieImage = document.getElementById('serie-image');
            serieImage.setAttribute('src', serie.image);
            var serieUrl = document.getElementById('serie-url');
            serieUrl.href = serie.url;
        });
    });
}
function getSeasonAverage(series) {
    var seasonAverage = 0;
    series.forEach(function (serie) { return seasonAverage = seasonAverage + serie.seasons; });
    seasonAverage = seasonAverage / series.length;
    return seasonAverage;
}
