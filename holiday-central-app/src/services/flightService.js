import useAuthHeader from '../hooks/useAuthHeader'
import http from './common/httpCommon'

function GetAll() {
    return http.get("flights", { headers: useAuthHeader() });
}

function GetById(id) {
    return http.get(`flights/${id}`, { headers: useAuthHeader() });
}

function Create(data) {
    return http.post("flights", data, { headers: useAuthHeader() });
}

function Update(data, id) {
    return http.put(`flights/${id}`, data, { headers: useAuthHeader() });
}

function Remove(id) {
    return http.post(`flights/${id}`, { headers: useAuthHeader() });
}

export default { GetAll, GetById, Create, Update, Remove }