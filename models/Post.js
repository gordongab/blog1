const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const PostSchema = new Schema({
  author: {
    type: String,
    required: 'You must enter an author name'
  },
  title: {
    type: String,
    required: "You must include a title for your post"
  },
  content: {
    type: String,
    required: 'You must include some content in your blog post'
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Post = mongoose.model('Post', PostSchema);

// Export the Tweet model
module.exports = Post;