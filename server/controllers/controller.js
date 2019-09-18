const Author = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Author.find().sort({name: 1})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_author: function(req, res) {
        Author.create(req.body,{runValidators: true})
            .then(data => 
                res.json(data)
            )
            .catch(err => {
                res.json(err);
            })
    },

    remove_author : function(req, res) {
        Author.remove({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    get_author: function(req, res) {
        console.log(req.params.id)
        Author.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_author : function(req, res) {
        Author.update({"_id": req.params.id}, {$set: {
            name: req.body.name,
        }},{runValidators: true})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });  
    }
}