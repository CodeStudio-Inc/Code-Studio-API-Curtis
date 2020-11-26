const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    author: String,
    datecreated: Date,
    title: String,
    postbody: String,
    comment:[{type: Schema.Types.ObjectId, ref: 'Comment' }]
   });
const CommentSchema = new Schema ({
    username: String,
    commentbody: String,
});

const Post = mongoose.model('post',PostSchema);
const Comment = mongoose.model('comment',CommentSchema);