import { urlDictionary } from "../constants/constant";

const findUrl = (id) => {
    console.log(urlDictionary[id])
    return urlDictionary[id];
} 
export default findUrl;

const secondaryFindUrl = (id, icon) => {
    if(id == 800) {
        if(icon[2] == 'd') return urlDictionary['800d'];
        else return urlDictionary['800n']
    } else {
        return urlDictionary[id]
    }

}
export {secondaryFindUrl}