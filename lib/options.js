'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
	new: function (option) {
		option = option.toLowerCase();
		console.log("Creating project...");
		fs.readFile('./config/templates.json', 'utf8', (err, data) => {
			if (err) console.log(err);
			let templates = JSON.parse(data);
			let structure = templates[option].files;
			createStructure(structure);
		});
	}
}

var createStructure = (structure) => {
	structure.forEach((file) => {
		if (typeof file === "string") {
			
		} else if (typeof file === "object") {
			console.log("object", file);
		}
	});
};

var getCurrentWorkingDirectory = () => {
	return path.basename(process.cwd());
};