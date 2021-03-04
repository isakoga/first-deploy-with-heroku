const express = require('express');
const { FriendList } = require('./Controller/friendList');

const app = express();

app.use('/', FriendList);

app.listen(3000);
