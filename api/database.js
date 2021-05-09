const Gun = require('gun');
var gun = Gun('gun');
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

