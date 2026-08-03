import Repository from '../../repository';

export default {
	AutoComplete: (payload: any) => Repository.post(`/api/VietMap/AutoComplete`, payload),
	VietMapRoute: (payload: any) => Repository.post(`/api/VietMap/VietMapRoute`, payload),
	VietMapRouteAddPoint: (payload: any) =>
		Repository.post(`/api/VietMap/VietMapRouteAddPoint`, payload),
	VietMapTSP: (payload: any) => Repository.post(`/api/VietMap/VietMapTSP`, payload),
	Place: (payload: any) => Repository.post(`/api/VietMap/Place`, payload),
};
