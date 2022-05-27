import qs from 'query-string';
const urlWithToken = (url: any, token: any) => {
    if (url) {
        return url + '?' + qs.stringify({ token });
    }
    return url;
};
export { urlWithToken };
