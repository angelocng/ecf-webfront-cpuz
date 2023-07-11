import {MicroColl} from "./microColl.js"
import {MicroUI} from "./MicroUI.js"

let microColl = new MicroColl();

await microColl.loadData();

MicroUI.generateTable(microColl)

document.getElementById("price").addEventListener("click",(event)=>{
    microColl.sortByPrice()
    MicroUI.generateTable(microColl)
})

document.getElementById("search").addEventListener("input", async (event)=>{
    let searchFieldValue = event.target.value;
    await microColl.filterByName(searchFieldValue)
    MicroUI.generateTable(microColl)
})