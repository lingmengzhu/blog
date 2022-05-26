import R from './request';
import qs from 'query-string';
const listTags = (query: any) => {
    return R.get(`/api/tags/list?${qs.stringify(query)}`);
};
export { listTags };
