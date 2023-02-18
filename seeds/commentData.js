

const { Comment } = require('../models');

const commentData = [
{
    "content": "ORM is so cool",
    "user_id": "2",
    "post_id": "3"
    },
    {
    "content": "MVC is really important. Thanks!",
    "user_id": "3",
    "post_id": "1"
    },
    {
    "content": "I now know the differences between Authentication and Authorization!",
    "user_id": "1",
    "post_id": "2"
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments