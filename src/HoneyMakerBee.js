var HoneyMakerBee = function() {
// call links subclass to superclass
  Bee.call(this);
  //own property
  this.honeyPot = 0;
  //changes former age (from Bee)
  this.age = 10;
  this.job = "make honey";
};

//creates a Bee prototype with the name of HoneyMakerBee
//constructor makes the protorype HoneyMakerBee's own
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//create two methods, makeHoney and giveHoney

HoneyMakerBee.prototype.makeHoney = function(){
  return this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(){
  return this.honeyPot--;
}

