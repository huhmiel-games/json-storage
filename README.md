# json-storage

Use localStorage with JSON parse and stringify automatically

## Installation
`npm install https://github.com/huhmiel-games/json-storage.git`

## Utilization

 ```js
 import { jsonSetItem, jsonGetItem, jsonRemoveItem, jsonClear, isStorageAvailable } from 'json-storage';
 
 jsonSetItem('test', {test: 'value'});
 
 const item = jsonGetItem('test'); // returns {test: 'value'}
 
 const storageLength = jsonLength() // returns 1
 
 jsonRemoveItem('test'); // remove 'test' key
 
 jsonClear() // clear all keys
 
 isStorageAvailable() // returns true if localStorage available and quota not exceeded, else false
 ```
