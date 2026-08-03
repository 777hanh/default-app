import Axios from 'axios';
import { apiUrl, defaultLocale } from '~/constants/config';

interface IResponse<T> {
	status: boolean;
	message: string;
	data: T;
}

let isRefreshingToken = false;
const axiosInstance = Axios.create({
	baseURL: apiUrl,
	headers: {
		Accept: 'text/plain',
		'Content-Type': 'application/json-patch+json',
		// "Access-Control-Allow-Origin": "*",
		// 'Cache-Control': 'no-cache',
		// 'Pragma': 'no-cache',
		// 'Expires': '0'
	},
	timeout: 60000,
});

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			let tokenRefresh = localStorage.getItem('tokenRefresh');
			if (tokenRefresh && !isRefreshingToken) {
				isRefreshingToken = true;
				let _response: any = await refreshToken({ refreshToken: tokenRefresh });
				let result = _response.status ? _response.data : null;
				if (result) {
					localStorage.setItem('token', result.Token);
					localStorage.setItem('tokenRefresh', result.RefreshToken);
				} else {
					localStorage.removeItem('token');
					localStorage.removeItem('tokenRefresh');
					localStorage.removeItem('user');
				}
				isRefreshingToken = false;
			}
			// location.reload()
			return axiosInstance(originalRequest);
		} else if (error.response?.status === 403 && !originalRequest._retry) {
			localStorage.clear();
			location.reload();
		}

		return Promise.reject(error);
	}
);

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	const locale: any =
		localStorage.getItem('currentLanguage') &&
		JSON.parse(localStorage.getItem('listLanguage') || '[]')?.length > 0 &&
		JSON.parse(localStorage.getItem('listLanguage') || '[]').filter(
			(x: any) => x.id === localStorage.getItem('currentLanguage')
		).length > 0
			? localStorage.getItem('currentLanguage')
			: defaultLocale;
	if (locale) {
		config.headers.Language = locale;
	}
	return config;
});

const processError = (error: any) => {
	if (Axios.isCancel(error)) {
		throw { canceled: true, message: error.message };
	}
	console.log(error);
};

const responseBody = (val: any): IResponse<any> => {
	let response = val.status === 200 ? val.data : null;
	if (response && response.ErrorCode === '0' && response.StatusCode === 200 && response.Result) {
		return {
			status: true,
			message: response.Message,
			data: response.Result,
		};
	} else {
		return {
			status: false,
			message: response.Message,
			data: null,
		};
	}
};

const refreshToken = (token: any) => Repository.post(`/api/authentication/RefreshToken`, token);
// const GetCurrentUser = () => Repository.post(`/api/user/GetCurrentUser`);

const Repository = {
	get: (url: string, params = {}) =>
		axiosInstance.get(url, { params: params }).then(responseBody).catch(processError),
	post: (url: string, data: any) =>
		axiosInstance.post(url, data).then(responseBody).catch(processError),
	put: (url: string, data: any) =>
		axiosInstance.put(url, data).then(responseBody).catch(processError),
	delete: (url: string) => axiosInstance.delete(url).then(responseBody).catch(processError),
	postCancel: (url: string, data: any, onUploadProgress: any) => {
		const cancelTokenSource = Axios.CancelToken.source();
		const promise = axiosInstance
			.post(url, data, {
				onUploadProgress,
				cancelToken: cancelTokenSource.token,
			})
			.then(responseBody)
			.catch(processError);
		return {
			promise,
			cancel: () => cancelTokenSource.cancel('Request canceled'),
		};
	},
	postWithFile: (url: string, data: any) =>
		axiosInstance
			.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then(responseBody)
			.catch(processError),

	// for tracking upload progress
	uploadFileProgress: (url: string, data: any, onUploadProgress: any) => {
		//for cancel uploading file
		const cancelTokenSource = Axios.CancelToken.source();
		const promise = axiosInstance
			.post(url, data, {
				headers: { 'Content-Type': 'multipart/form-data' },
				onUploadProgress,
				cancelToken: cancelTokenSource.token,
				timeout: 36000 * 1000,
			})
			.then(responseBody)
			.catch(processError);
		return {
			promise,
			cancel: () => cancelTokenSource.cancel('Request canceled'),
		};
	},
};

export default Repository;
