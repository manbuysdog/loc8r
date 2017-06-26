/* GET home page */

module.exports.about = function(req, res, next) {
  res.render('about', { title: 'Express' });
};