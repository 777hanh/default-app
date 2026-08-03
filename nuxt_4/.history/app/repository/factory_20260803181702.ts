/**
 * Import theo thứ tự a đến z, không nhập lung tung
 */
import VietMap from './entity/swagger/Microservice.VietMap.js';
import Music from './entity/swagger/Microservice.Music.js';
type RepositoryMap = {
	vietMap: typeof VietMap;
	music: typeof Music;
};
const repositories = {
	vietMap: VietMap,
	music: Music,
};
const RepositoryFactory = {
	get: <K extends keyof typeof repositories>(name: K): (typeof repositories)[K] =>
		repositories[name],
};

export default RepositoryFactory;
