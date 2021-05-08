const express = require('express');
const crypto = require('crypto');
const { URL } = require('url');

const Gun = require('gun')
var gun = Gun().get('jsonstore');
require('gun/lib/then.js')
require('gun/lib/memdisk');

function checkContentType(req, res, next) {
    if (!req.is('application/json')) {
        return res.status(400).send({ ok: false, error: "Bad request" });
    }

    next();
}

const router = express.Router();

router.get('/get-link', (req, res) => {
    const seed = crypto.randomBytes(64);
    const hash = crypto.createHash('sha256').update(seed).digest('hex');

    const url = new URL(req.get('referer'));
    return res.send({ link: `${url.protocol}//${url.hostname}/${hash}/` });
});

router.get(/^\/[0-9a-z]{64}/, (req, res) =>
    gun.get(req.path)
	.then(function(result) { delete result._; delete result['#']; return result })
        .then(result => res.status(200).send({ result, ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
);

router.post(/^\/[0-9a-z]{64}/, checkContentType, (req, res) =>
    gun.get(req.path)
        .put(req.body)
        .then(() => res.status(201).send({ ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
)

router.put(/^\/[0-9a-z]{64}/, checkContentType, (req, res) =>
    gun.get(req.path)
        .put(req.body)
        .then(() => res.status(200).send({ ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
);

router.delete(/^\/[0-9a-z]{64}/, (req, res) =>
    gun.get(req.path)
        .put(null)
        .then(() => res.status(200).send({ ok: true }))
        .catch(() => res.status(500).send({ ok: false }))
);

module.exports = router;
