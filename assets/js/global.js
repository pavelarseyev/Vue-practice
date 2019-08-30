import "babel-polyfill";

// import "./libs/vue"
import {binder, fwa} from "./libs/binder";
import { constants } from "./modules/module";
import {practice} from "./modules/practice";


binder({
    bounds: {
        "html": constants,
        ".sample": practice
    },
    runTests: false
});
