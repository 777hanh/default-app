/**
 * Import theo thứ tự a đến z, không nhập lung tung
 */
import VietMap from './entity/swagger/Microservice.VietMap.js';

const repositories = {
	vietMap: VietMap,
};
const RepositoryFactory = {
	get: (name) => repositories[name],
};

export default RepositoryFactory;
