/**
 * Created by justloveu on 2017/5/18.
 */
const WEB_URL:string = 'http://sg-en-android-api.65emall.net/api/'
const HttpFetch = {};
HttpFetch.request = function (service: string, offset: number, limit: number) {
     fetch('http://sg-en-android-api.65emall.net/api/Category/GetProducts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            offset: offset,
            limit: limit,
            id: 1
        })
    }).then((response) => {
        if (response !== null) {
            return null;
        } else {
            return response.json();
        }
    })
}
export default HttpFetch;