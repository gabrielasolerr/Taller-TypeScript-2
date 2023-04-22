import { Serie } from "./serie.js";

import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonAverageElm: HTMLElement = document.getElementById("seasons-average")!;

renderSeriesInTable(dataSeries);
let average = getSeasonAverage(dataSeries)
seasonAverageElm.innerHTML = `${average}`

function renderSeriesInTable(series: Serie[]): void {
    console.log("Desplegando series");
    series.forEach(serie => {
        console.log(serie)
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        trElement.addEventListener('click', () => {
            document.getElementById('serie-title')!.textContent = serie.name;
            document.getElementById('serie-description')!.textContent = serie.description;
            const serieImage = document.getElementById('serie-image')!
                serieImage.setAttribute('src', serie.image);
            const serieUrl = document.getElementById('serie-url') as HTMLAnchorElement;
                serieUrl.href = serie.url;
        })
    });
}

function getSeasonAverage(series: Serie[]): number {
    let seasonAverage: number = 0;
    series.forEach((serie) => seasonAverage = seasonAverage + serie.seasons);
    seasonAverage = seasonAverage/series.length;
    return seasonAverage;
}




