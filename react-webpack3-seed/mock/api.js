const Mock = require('mockjs');

const url = {
    getUserInfo: '/api/getUserInfo'
};

module.exports = {
    [url.getUserInfo]: (req, res) => {
        var result = Mock.mock({
            result: 0,
            data: {
                id: 1000001,
                name: 'chuiliu'
            }
        });
        res.json(result);
    }
};
