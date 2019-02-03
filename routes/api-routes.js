const Post = require('../models/Post');

module.exports = function (app) {

  app.get('/api/posts', function (req, res) {
    Post.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/posts', function (req, res) {
    console.log(req.body, "-------------------------------------------------------------")
    Post.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

   app.delete('/api/posts/:id', function (req, res) {
    Post.findOneAndDelete(req.params.id)
      .then(data => res.json({ success: true }))
      .catch(err => res.json(err))
  })
}