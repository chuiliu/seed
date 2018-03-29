const Mock = require('mockjs');

const url = {
    getUserInfo: '/api/getUserInfo'
};

module.exports = {
    [url.getUserInfo]: (req, res) => {
        var result = Mock.mock({
            result: 0,
            data: {
                id: '@integer(1000000, 9999999)',
                name: '@first @last'
            }
        });
        res.json(result);
    }
};
