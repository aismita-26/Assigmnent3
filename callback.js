function makeRequest(location, callback, errorCallback) {
    console.log('Making Request To ' + location);
    if (location == 'Google') {
        callback('Welcome To Google :) ');
    } else {
        errorCallback({
            name: 'Sorry we can only get response from Google :( '
        });
    }
 }



 makeRequest('Facebook', (message) => {
    console.log(message);
}, (error) => {
    console.log(error.name);
});