var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonsterSchema = new Schema({
    name: String,
    health: Number,
    weapon: String,
});

module.exports = mongoose.model('Monster', MonsterSchema);
