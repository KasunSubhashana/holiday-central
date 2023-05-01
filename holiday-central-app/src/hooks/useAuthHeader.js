import useLocalStorage from "../helpers/localStorageHelper";

export default function useAuthHeader() {
    const user = useLocalStorage('user');

    if (user) {
        return {
            'Authorization': 'Bearer ' + user.accessToken,
        }
    }
}
