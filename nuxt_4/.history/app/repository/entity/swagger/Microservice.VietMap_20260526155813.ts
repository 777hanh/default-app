import Repository from "../../repository";

export default {
    AutoComplete: (payload) => Repository.post(`/api/VietMap/AutoComplete`, payload),
    VietMapRoute: (payload) => Repository.post(`/api/VietMap/VietMapRoute`, payload),
    VietMapRouteAddPoint: (payload) => Repository.post(`/api/VietMap/VietMapRouteAddPoint`, payload),
    VietMapTSP: (payload) => Repository.post(`/api/VietMap/VietMapTSP`, payload),
    Place: (payload) => Repository.post(`/api/VietMap/Place`, payload),
}
