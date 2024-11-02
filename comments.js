// create web server
// create a route that will return a list of all comments
// create a route that will return a single comment by ID
// create a route that will return a list of all comments by a single user

const express = require('express');
const app = express();
const comments = require('./data/comments');

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to get a single comment by ID
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment._id === parseInt(req.params.id));
    res.json(comment);
});

// Route to get a list of all comments by a single user
app.get('/comments/user/:userID', (req, res) => {
    const userComments = comments.filter(comment => comment.user === parseInt(req.params.userID));
    res.json(userComments);
});

app.listen(3000, () => {
    console.log('Server is up and running on