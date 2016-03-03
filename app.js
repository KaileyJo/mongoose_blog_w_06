var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost/blog');
mongoose.model(
    'BlogPost',
    new Schema({
            "title": String,
            "date": String,
            "author": String,
            "content": String
        },
        {
            collection: 'posts'
        }
    ));

var BlogPost = mongoose.model('BlogPost');

app.get('/blogPost', function(req, res) {
    console.log('here');
    BlogPost.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        console.log(data);

        res.send(data);
        console.log(data);
    });
});

app.post('/blogPost', function(req, res) {
    var addedPost = new BlogPost({
        "title": req.body.title,
        "date": req.body.date,
        "author": req.body.author,
        "content": req.body.content
    });

    addedPost.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        BlogPost.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });


});

app.delete('/blogPost/:id', function(req, res) {
    BlogPost.findByIdAndRemove({_id : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

app.put('/blogPost/:id', function(req, res){
    var editPost = {
        title: req.body.title,
        date: req.body.date,
        author: req.body.author,
        content: req.body.content
    };
    BlogPost.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {
                title: editPost.title,
                date: editPost.date,
                author: editPost.author,
                content: editPost.content
            }
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        }
    );

});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});