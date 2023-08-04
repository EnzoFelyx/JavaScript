function extractLinks(arrLink) {
    return arrLink.map((linkObject) => Object.values(linkObject). join())
}

export default function validationList(linkList){
    return extractLinks(linkList);
}