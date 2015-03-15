var express = require('express');
var router = express.Router();
var Monster = require('./models/monster');

router.route('/monsters')
    .post(function(req, res){
        var monster = new Monster();
        monster.name = req.body.name;
        monster.health = req.body.health;
        monster.weapon = req.body.weapon;
        monster.save(function(err, monster){
            if (err) {
                res.json({ status: err });
            }
            res.json({ status: 'success'  });
        });
    })

    .get(function(req, res){
        Monster.find(function(err, monsters){
            if (err) {
                res.json({ status: err  });
            }
            res.json(monsters);
        })
    });

router.route('/monsters/:name')
    .get(function(req, res){
        Monster.findOne({ name: req.params.name  }, function(err, monster){
            if (err) {
                res.json({status: err});
            }
            res.json(monster);
        });
    })

    .put(function(req, res){
        Monster.findOne({ name: req.params.name  }, function(err, monster){
            if (err) {
                res.json({ status: err  });
            }
            monster.name = req.body.name;
            monster.health = req.body.health;
            monster.weapon = req.body.weapon;
            monster.save(function(err, monster){
                if (err) {
                    res.json({ status: err });
                }
                res.json({ status: 'updated'  });
            });
        });
    });

module.exports = router
