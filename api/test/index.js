const express = require('express');
const router = express.Router();

let locked = false;

waitDuringLocked = (callback) => {
    setTimeout(() => {
        if(locked) {
            waitDuringLocked(callback);
        }else {
            callback();
        }
    }, 500);
}

install = (callback) => {
    locked = true;
    setTimeout(() => {
        locked = false;
        callback();
    }, 5000);
}

router.get('/:id', (req, res) => {

    const id = req.params.id;
    console.log(`${id} start`);

    waitDuringLocked(() => {
        install(() => {
            console.log('installed');
            console.log(`${id} end`);
            res.status(200).end();
        });
    });
});

module.exports = router;