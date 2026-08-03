import Repository from '../../repository';

export default {
	list: (payload: any) => Repository.get(`/music`, payload),
};
