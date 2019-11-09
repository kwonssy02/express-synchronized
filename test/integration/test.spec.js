const request = require('supertest');
const should = require('should');
const app = require('../..');

describe('GET /test는', () => {

    describe('성공 시', () => {

        it('lock', (done) => {
            request(app)
                .get('/test')
                .end((err, res) => {
                    console.log(res.status);
                    done();
                })
        });

    });
});

