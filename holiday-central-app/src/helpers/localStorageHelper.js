// export default function localStorageHelper(key, value = null) {
//     if (value == null) {
//         const storeVal = window.localStorage.getItem(key);

//         if (storeVal) {
//             return JSON.parse(storeVal);
//         }
//     }
//     else {
//         window.localStorage.setItem(key, JSON.stringify(value));
//     }
// }

function GetLocalStorage(key) {
    const storeVal = window.localStorage.getItem(key);

    if (storeVal) {
        return JSON.parse(storeVal);
    }
}

function SetLocalStorage(key, value) {
    const storeVal = window.localStorage.getItem(key);

    if (storeVal) {
        window.localStorage.setItem(key, value);
    }
}

function RemoveLocalStorage(key, value) {
    const storeVal = window.localStorage.getItem(key);

    if (storeVal) {
        window.localStorage.removeItem(key);
    }
}

export default { GetLocalStorage, SetLocalStorage, SetLocalStorage }
