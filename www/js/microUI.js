/**
 * Gère la construction du tableau et du footer
 */
class MicroUI{
    /**
     * Méthode de génération de la table et appel du compteur de microprocesseurs
     * @param {Object} elements Collection de microprocesseurs
     */
    static generateTable(elements){
        let tbody=document.getElementById("tbody")
        tbody.innerHTML="";
        elements.data.forEach(element => {
            let tr=this.generateRow(element);
            tbody.appendChild(tr);
        });
        this.countMicro(elements)
    }
    
    /**
     * Méthode de génération de lignes de tableau
     * @param {Object} micro Microprocesseur
     * @returns {Object} ligne de tableau
     */
    static generateRow(micro){
        let tr=document.createElement("tr");
        micro.getKeys().forEach(val=>{
            let td = this.generateCell(micro[val]);
            tr.appendChild(td)
        })
        let td = this.generateCell(micro.brand.concat(" "+micro.family)
        .concat(" "+micro.model))
        tr.appendChild(td)
        return tr;
    }
    /**
     * Méthode de génération de cellule avec sa complétion
     * @param {String} val Valeur d'une cellule
     * @returns {Object} cellule de tableau
     */
    static generateCell(val){
        let td = document.createElement('td')
        td.textContent=val
        return td
    }
    /**
     * Permet de compter le nombre de microprocesseurs dans le tableau et de l'afficher
     * @param {Object} elements Collection de Microprocesseurs
     */
    static countMicro(elements){
        let span=document.getElementById("counter");
        span.textContent=elements.data.length
    }
}

export {MicroUI}