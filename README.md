# json-storage

Use localStorage with JSON parse and stringify automatically

## Installation
`npm install https://github.com/huhmiel-games/json-storage.git`

## Utilization

 ```js
 // @ts-check
import { jsonSetItem, jsonGetItem, jsonRemoveItem, jsonClear, jsonLength, isStorageAvailable } from 'json-storage';

const isAvailable = isStorageAvailable() // returns true if localStorage available and quota not exceeded, else false
console.log({ isAvailable });

jsonSetItem('test', { test: 'value' });

const item = jsonGetItem('test'); // returns {test: 'value'}
console.log({ item });

const storageLength = jsonLength() // returns 1
console.log({ storageLength });

jsonRemoveItem('test'); // remove 'test' key

jsonClear() // clear all keys
 ```
