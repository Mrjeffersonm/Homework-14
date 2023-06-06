const asyncHandler = require('express-async-handler');
const { User } = require('../models');

exports.getUser = asyncHandler(async (req, res) => {
    const users = await User.findAll({
        attributes: ['user_name','id', 'island_code'],
    });
    res.send(
        JSON.stringify(users, null, 2)
    )
});

exports.getUserId = asyncHandler(async (req, res) =>{
    const user_id = req.params.id
    const user = await User.findAll({
        attributes: ['user_name','id', 'island_code'],
        where: {
        id: user_id
        },
    })
    res.send(
      JSON.stringify(user, null, 2)
    )
});

exports.createUser = asyncHandler(async (req, res) => {
    try {
        const createUser = await User.create(req.body)
        res.send(
            JSON.stringify(createUser, null, 2)
        )
    }
    catch(err) {
        res.send(
            JSON.stringify({error: err.message}, null, 2)
        )
    }
});

exports.updateUser = asyncHandler(async (req, res) => {
    const user_id = req.params.id
    const user = await User.update(req.body,
    {
        where: {
            id: user_id,
        },
    })
    res.send(
        JSON.stringify(user, null, 2)
    )
});

exports.deleteUser = asyncHandler(async (req, res) => {
    const user_id = req.params.id
    const user = await User.destroy(
        {
            where: {
            id: user_id
            },
        }
    )
    res.send(
        JSON.stringify(user, null, 2)
    )
});