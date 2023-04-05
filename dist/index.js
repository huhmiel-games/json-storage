"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStorageAvailable = exports.jsonLength = exports.jsonClear = exports.jsonRemoveItem = exports.jsonGetItem = exports.jsonSetItem = void 0;
/**
 * localStorage setItem with JSON stringify
 */
function jsonSetItem(key, value) {
    try {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.jsonSetItem = jsonSetItem;
/**
 * localStorage getItem with JSON parse
 */
function jsonGetItem(key) {
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
exports.jsonGetItem = jsonGetItem;
/**
 * localStorage removeItem
 */
function jsonRemoveItem(key) {
    try {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem(key);
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.jsonRemoveItem = jsonRemoveItem;
/**
 * localStorage clear
 */
function jsonClear() {
    try {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.clear();
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.jsonClear = jsonClear;
/**
 * localStorage length
 */
function jsonLength() {
    try {
        return localStorage === null || localStorage === void 0 ? void 0 : localStorage.length;
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.jsonLength = jsonLength;
/**
 * Check if localStorage is enabled and quota not exceeded
 * Code from Mdn (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
 */
function isStorageAvailable() {
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
exports.isStorageAvailable = isStorageAvailable;
