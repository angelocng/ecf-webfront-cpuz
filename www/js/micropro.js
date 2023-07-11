/**
 * Gère l'objet Microprocesseur
 */
class Micropro{
    /**
     * Parse en objet Micropro
     * @param {Array} _micro Caractéristiques du microprocesseur
     */
    constructor(_micro){
        Object.assign(this,_micro);
    }
/**
 * Méthode d'extraction des valeurs du microprocesseur
 * @returns {Array} avec les valeurs du micropro
 */
    getValues(){
        return Object.values(this)
    }
/**
 * Méthode d'extraction des clés du microprocesseur
 * @returns {Array} avec les clés du micropro
 */
    getKeys(){
        return Object.keys(this)
    }
}

export {Micropro}