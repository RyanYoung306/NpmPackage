exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

exports.createDropDown = require('./DropDown/dropDown').createDropDown;