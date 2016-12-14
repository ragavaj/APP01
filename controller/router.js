var express = require('express');
var initialize = function (app, context, root) {
    var router = express.Router();
    var _viewCxt = root + "/view/";
    router.get('/', function (req, res) {
        res.sendFile(_viewCxt + "index.html");
    });
    app.use(context, router);
}

module.exports = {
    initialize: initialize
}
