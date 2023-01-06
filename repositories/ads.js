const ads = require("./temp");

//Funcion que me va a dar el listado de todos los anuncios
function all(minPrice,maxPrice) {
    const filtered = ads.filter((ad)=>{
        if (ad.price > minPrice && ad.price < maxPrice) {
            return true;
        } 
        return false;
    })


    return Promise.resolve(filtered)
}

function findById(id) {
    for (let i = 0; i < ads.length; i++) {
        const ad = ads[i]
        if (ad.id === id) {
            return Promise.resolve(ad);
        }
    } 
    return Promise.resolve(null);
}



module.exports = {all,findById};