import {Micropro} from "./micropro.js"
import {Db} from "./db.js"
/**
 * Gère la collection de microprocesseurs
 */
class MicroColl{
    constructor(){
        this.data=[];
        this.sortAsc=true;
    }
/**
 * Appelle la méthode pour récupérer les données puis les map en objet microprocesseur
 */
    async loadData(){
        this.data=await Db.getData("../cpuz.json");
        this.data=this.data.map(micro=>new Micropro(micro));
    }
/**
 * Méthode de tri par prix
 */
    sortByPrice(){
        this.data=this.data.sort(
            (a,b)=>a.price - b.price
        )
        if (!this.sortAsc){
            this.data.reverse()
        }
        this.sortAsc=!this.sortAsc
    }
/**
 * Méthode de filtre par nom
 * @param {String} input Valeur du filtre
 */
    async filterByName(input=null){
        await this.loadData();
        input=input.trim();
        if (input.length>0){
            input=input.toLowerCase()
            this.data=this.data.filter(
                micro => (micro.brand.concat(" "+micro.family)
                .concat(" "+micro.model)).toLowerCase().includes(input)
                )
        }
    }
}

export {MicroColl}
