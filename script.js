function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log('Making Request To ' + location);
        if (location == 'Google') {
            resolve('Welcome To Google :) ');
        } else {
            reject('Sorry we can only get response from Google :( ');
        }
    });
}



//Using .then():-

// makeRequest('Facebook').then(response => {
//     console.log(response);
// }).catch(err => {
//     console.log(err);
// });



//Async Function:-

async function getResponse() {
    try {
        const response = await makeRequest('Facebook');
        //Change Location to Google.
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

getResponse();