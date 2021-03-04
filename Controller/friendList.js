const { Router } = require('express');

const FriendList = new Router();

FriendList.get('/', async (_req, res) => res.status(200).json('Está vivo!!!'));

module.exports = { FriendList };
