type TValue = object | string | number | bigint | boolean;
/**
 * localStorage setItem with JSON stringify
 */
export declare function jsonSetItem(key: string, value: TValue): void;
/**
 * localStorage getItem with JSON parse
 */
export declare function jsonGetItem(key: string): TValue | null;
/**
 * localStorage removeItem
 */
export declare function jsonRemoveItem(key: string): void;
/**
 * localStorage clear
 */
export declare function jsonClear(): void;
/**
 * localStorage length
 */
export declare function jsonLength(): number;
/**
 * Check if localStorage is enabled and quota not exceeded
 * Code from Mdn (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
 */
export declare function isStorageAvailable(): boolean | undefined;
export {};
