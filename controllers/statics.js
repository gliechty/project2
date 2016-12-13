// GET /
function home(req, res) {  
  res.render('landing');
}

module.exports = {
  home: home,
};
