var Mock = require('mockjs');

// module.exports = function getUserInfo(req, res) {
//     var res = Mock.mock({
//         result: 0,
//         data: {
//             id: 1000001,
//             name: 'ch'
//         }
//     });
//     res.json(res);
// };


module.exports = Mock.mock({
    result: 0,
    data: {
        id: 1000001,
        name: 'ch'
    }
});
