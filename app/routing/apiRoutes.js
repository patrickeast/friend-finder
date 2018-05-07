var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        let newFriend = req.body;

        let friendMatch = {};

        for (let i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }

        let bestMatchIndex = 0;

        let bestMatchDifference = 40;

        for (let i = 0; i < friends.length; i++) {
            let totalDifference = 0;

            for (let j = 0; j < friends[i].scores.length; j++) {
                let differenceOneScore = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                totalDifference += differenceOneScore;
            }

            if (totalDifference < bestMatchDifference) {
                bestMatchIndex = i;
                bestMatchDifference = totalDifference;
            }
        }

        bestMatch = friends[bestMatchIndex];

        friends.push(newFriend);

        res.json(bestMatch);
    });

};