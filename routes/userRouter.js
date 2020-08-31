const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/getuser/:name')
.get((req, res, next) => {
  console.log(req.params.name);
  User.findOne({name: req.params.name})
  .then (user => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(user);
  })
  .catch(err => next(err));
}) 

userRouter.route('/')
.get((req, res, next) => {
  User.find()
  .then(users => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(users);
  })
  .catch(err => next(err));
})
.post((req, res, next) => {
  console.log(req.body)
  User.create(req.body)
  .then(user => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(user);
  })
  .catch(err => next(err));
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported on /users')
})
.delete((req, res, next) => {
  User.deleteMany()
  .then (response => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(response);
  })
  .catch(err => next(err));
});

userRouter.route('/:userId')
.get((req, res, next) => {
  User.findById(req.params.userId)
  .then (user => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(user);
  })
  .catch(err => next(err));
}) 
.post((req, res) => {
  statusCode = 403;
  res.end(`POST operation not supported on /users/${req.params.userId}`);
})
.put((req, res, next) => { 
  User.findByIdAndUpdate(req.params.userId, {
    $set: req.body
    }, {new:true})
    .then(user => {
      res.statusCode = 200;
      res.setHeader("Content-Type", 'application/json');
      res.json(user);
  })
  .catch (err => next(err));
})
.delete((req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
  .then(response => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(response);
  })
  .catch (err => next(err));
});

userRouter.route('/:userId/highScore20')
.get((req, res, next) => {
  User.findById(req.params.userId)
  .then (user => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(user.highScore20);
  })
  .catch(err => next(err));
}) 
.post((req, res) => {
  statusCode = 403;
  res.end(`POST operation not supported on /users/${req.params.userId}/highScore20`);
})
.put((req, res, next) => { 
  User.findByIdAndUpdate(req.params.userId, {
    $set: req.body
    }, {new:true})
    .then(user => {
      res.statusCode = 200;
      res.setHeader("Content-Type", 'application/json');
      res.json(user.highScore20);
  })
  .catch (err => next(err));
});
/*.delete((req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
  .then(response => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(response);
  })
  .catch (err => next(err));
});*/

userRouter.route('/:userId/highScore50')
.get((req, res, next) => {
  console.log('the id route')
  User.findById(req.params.userId)
  .then (user => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json');
    res.json(user.highScore50);
  })
  .catch(err => next(err));
}) 
.post((req, res) => {
  statusCode = 403;
  res.end(`POST operation not supported on /users/${req.params.userId}/highScore50`);
})
.put((req, res, next) => { 
  User.findByIdAndUpdate(req.params.userId, {
    $set: req.body
    }, {new:true})
    .then(user => {
      res.statusCode = 200;
      res.setHeader("Content-Type", 'application/json');
      res.json(user.highScore50);
  })
  .catch (err => next(err));
});





module.exports = userRouter;
