/**
 * Import theo thứ tự a đến z, không nhập lung tung
 */
import VietMap from './entity/swagger/Microservice.VietMap.js';
import Music from './entity/swagger/Microservice.Music.js';

const repositories = {
	vietMap: VietMap,
	music: Music,
};
const RepositoryFactory = {
	get<K extends keyof typeof repositories>(name: K): (typeof repositories)[K] {
		return repositories[name];
	},
};

export default RepositoryFactory;
