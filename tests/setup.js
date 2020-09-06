jest.setTimeout(30000);

require('../models/user');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(
  keys.mongodbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
