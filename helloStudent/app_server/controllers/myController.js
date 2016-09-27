module.exports.showStudentName = function(req, res) {
  res.render('index', { firstName: 'Jeff', lastName: 'Babb'});
};