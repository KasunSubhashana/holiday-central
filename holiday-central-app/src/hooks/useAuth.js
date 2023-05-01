import useLocalStorage from "../helpers/localStorageHelper";

export default function useAuth() {
    const token = useLocalStorage('token');

    return token ? true : false;
}
