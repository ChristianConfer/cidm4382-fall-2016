var mongoose = require('mongoose');




var VFRISchema = new mongoose.Schema({
	weight: Number,
    flap5 : Number,
    flap10: Number,
    flap15: Number,
    vclimb: Number, 
    
});

var FlapsSchema = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	above20cOAT: Boolean(), //above 20 or below
	vr: Number,
	v2: Number
});


var FlapsNSchema = new mongoose.Schema({
    setting: String, 
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number

mongoose.model('vfri',  VFRISchema);
mongoose.model('flapV',  FlapsSchema);
mongoose.model('flap',  FlapsNSchema);
