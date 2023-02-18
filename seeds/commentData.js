

const { Comment } = require('../models');

const commentData = [
{
    "content": "This is test comment 1",
    "user_id": "2",
    "post_id": "3"
    },
    {
    "content": "This is test comment 1",
    "user_id": "3",
    "post_id": "1"
    },
    {
    "content": "This is test comment 1",
    "user_id": "1",
    "post_id": "2"
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments