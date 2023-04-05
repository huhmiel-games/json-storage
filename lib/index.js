/**
 * localStorage setItem with JSON stringify
 */
export function jsonSetItem(key, value) {
    try {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        throw new Error(error);
    }
}
/**
 * localStorage getItem with JSON parse
 */
export function jsonGetItem(key) {
    try {
        var value = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }
    catch (error) {
        throw new Error(error);
    }
}
/**
 * localStorage removeItem
 */
export function jsonRemoveItem(key) {
    try {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem(key);
    }
    catch (error) {
        throw new Error(error);
    }
}
/**
 * localStorage clear
 */
export function jsonClear() {
    try {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.clear();
    }
    catch (error) {
        throw new Error(error);
    }
}
/**
 * localStorage length
 */
export function jsonLength() {
    try {
        return localStorage === null || localStorage === void 0 ? void 0 : localStorage.length;
    }
    catch (error) {
        throw new Error(error);
    }
}
/**
 * Check if localStorage is enabled and quota not exceeded
 * Code from Mdn (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
 */
export function isStorageAvailable() {
    var storage;
    try {
        storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
//# sourceMappingURL=index.js.map