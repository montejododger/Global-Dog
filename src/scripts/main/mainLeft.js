const mainLeftContainer = document.querySelector(".main-left-container");

const leftTitle = () => {
    const div = document.createElement(`div`);
    const h3 = document.createElement(`h3`);

    div.classList.add(`main-left-title-container`);
    h3.classList.add(`main-left-title`);
    h3.innerText = `Welcome to Global Dawgs!`;

    div.append(h3);
    mainLeftContainer.appendChild(div);
};

const initializeSvgMap = () => {
    const mapContainer = document.createElement(`div`);
    mapContainer.id = `svgMap`
    mainLeftContainer.appendChild(mapContainer)
    new svgMap({
        targetElementID: "svgMap",
        data: {
            data: {
                gdp: {
                    name: "GDP per capita",
                    format: "{0} USD",
                    thousandSeparator: ",",
                    thresholdMax: 50000,
                    thresholdMin: 1000,
                },
                change: {
                    name: "Change to year before",
                    format: "{0} %",
                },
            },
            applyData: "gdp",
            values: {
                AF: { gdp: 587, change: 4.73 },
                AL: { gdp: 4583, change: 11.09 },
                DZ: { gdp: 4293, change: 10.01 },
                // More countries and their data...
            },
        },
    });
};

export const leftMain = () => {
    leftTitle();
    initializeSvgMap();
};
