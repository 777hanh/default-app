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
function get<K extends keyof RepositoryMap>(name: K): RepositoryMap[K] {
	return repositories[name];
}
export default RepositoryFactory;
