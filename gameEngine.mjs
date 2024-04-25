//#region 
import * as Blocks from "./barneprat/barneprat/blocks.mjs";
import * as Actions from "./barneprat/barneprat/actions.mjs";
import * as Utils from "./barneprat/barneprat/utils.mjs";
//#endregion


let spill = null

try {
    spill = await import("./spill.mjs")
} catch (error) {
    console.log(error);
}

