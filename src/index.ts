type TValue = object | string | number | bigint | boolean;

/**
 * localStorage setItem with JSON stringify
 */
export function jsonSetItem(key: string, value: TValue): void
{
    try
    {
        localStorage?.setItem(key, JSON.stringify(value));
    }
    catch (error)
    {
        throw new Error(error as string);
    }
}

/**
 * localStorage getItem with JSON parse
 */
export function jsonGetItem(key: string): TValue | null
{
    try
    {
        const value = localStorage?.getItem(key);

        if (value === null)
        {
            return null;
        }

        return JSON.parse(value);
    }
    catch (error)
    {
        throw new Error(error as string);
    }
}

/**
 * localStorage removeItem
 */
export function jsonRemoveItem(key: string): void
{
    try
    {
        localStorage?.removeItem(key);
    }
    catch (error)
    {
        throw new Error(error as string);
    }
}

/**
 * localStorage clear
 */
export function jsonClear()
{
    try
    {
        localStorage?.clear();
    }
    catch (error)
    {
        throw new Error(error as string);
    }
}

/**
 * localStorage length
 */
export function jsonLength(): number
{
    try
    {
        return localStorage?.length;
    }
    catch (error)
    {
        throw new Error(error as string);
    }
}

/**
 * Check if localStorage is enabled and quota not exceeded
 * Code from Mdn (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
 */
export function isStorageAvailable(): boolean | undefined
{
    let storage;
    try
    {
        storage = window['localStorage'];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e)
    {
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
