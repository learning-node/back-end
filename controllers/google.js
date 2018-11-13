const request = require('request');

function rawSearch(term) {
    const url = `http://www.google.com/search?q=${term}`;
    const opts = {
        method: 'get',
        url: url
    };
    return new Promise( (resolve, reject) => {
        request(opts, (err, res, body) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(body);
            }
        });
    });
}

function search(req, res, next) {
    rawSearch(req.params.term)
        .then( body => {
            res.status(200);
            res.send(body);
        })
        .catch( err => {
            res.status(400).send(err);
        });
}

module.exports = search;
