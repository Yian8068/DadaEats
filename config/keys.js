dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

var db = process.env.MONGODB_URI || 'mongodb://localhost/Dadaeats'

// use mongo container
// var db = process.env.MONGODB_URI || 'mongodb://mongo/Dadaeats'
module.exports = {
    mongoURI: db
};
