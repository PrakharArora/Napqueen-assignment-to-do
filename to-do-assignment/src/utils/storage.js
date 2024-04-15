export const storeDataLocal = (key, data) => {
    const values = JSON.stringify(data);
    localStorage.setItem(key, values);
}
// Path: Prakhar-s-Creative-to-do-application/src/utils/storage.js
export const getRecordsfromLocal = (key) => {
    const data = localStorage.getItem(key);
    if(data) {
        return JSON.parse(data);
    }
}