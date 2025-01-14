let LHRequester = require('../../src/base/LHRequester.js');

let chai = require('chai');
let should = chai.should();

describe('429 and 5xx testing', async () => {
    let backOffArray = [1, 1, 1];
    let requester = new LHRequester({ backOff: backOffArray });
    let sum = backOffArray.reduce((a, b) => {
        return a + b;
    }, 0);
    it.skip("should retry with 'exponential' back off due to 429", async () => {
        let startTime = await Date.now();
        let res = await requester._get({
            url: 'https://70e18ff0-1967-4fb5-8f96-10477ab6bb9e.mock.pstmn.io//429',
        });
        let endTime = await Date.now();
        let difference = endTime - startTime;
        difference.should.be.greaterThan(sum * 1000);
    });

    it.skip("should retry with 'exponential' back off due to 500", async () => {
        let startTime = await Date.now();
        let res = await requester._get({
            url: 'https://70e18ff0-1967-4fb5-8f96-10477ab6bb9e.mock.pstmn.io//5xx',
        });
        let endTime = await Date.now();
        let difference = endTime - startTime;
        difference.should.be.greaterThan(sum * 1000);
    });
});
