/**
 * Created by rob on 25/06/2017.
 */

module.exports.homeList = function(req, res, next) {
  res.render('index', { title: 'home' });
};

module.exports.locationInfo = function(req, res, next) {
  res.render('index', { title: 'locationInfo' });
};

module.exports.addReview = function(req, res, next) {
  res.render('index', { title: 'addReview' });
};