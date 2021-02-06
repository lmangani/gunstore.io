const Gun = require('gun');
var gun = Gun('gun');
// require('gun/lib/stats');
//const stats = require('gun/lib/stats');

// var gun = Gun('https://kmm-gun.herokuapp.com/gun');
//console.log('when is this actually called?');
    module.exports = {
        get: key =>
            gun
                .get(key)
                .then(snapshot => snapshot.val()),

        post: (key, data) =>
            gun
                .get(key)
                .put(data),

        put: (key, data) =>
            gun
                .get(key)
                .put({
                    [key]: data,
                }),

        delete: key =>
            gun
                .get(key)
                .put(null),
    }

