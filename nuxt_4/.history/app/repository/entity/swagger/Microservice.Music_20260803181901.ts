import Repository from '../../repository';

export default {
	music: (payload: any) => Repository.get(`/musicaa`, payload),
};
