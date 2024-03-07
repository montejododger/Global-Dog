// IMPORT components to here to load

import { navBar } from "./scripts/navbar";
import { leftMain } from "./scripts/main/mainLeft";
// import {initializeSvgMap} from "./scripts/main/map"

document.addEventListener("DOMContentLoaded", () => {
    navBar();
    leftMain();
    // initializeSvgMap()
});
