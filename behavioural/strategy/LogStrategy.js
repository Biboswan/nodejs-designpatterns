const path = require('path');
const {appendFile} = require('fs');

class LogStrategy {
	static noDate(timestamp, message) {
		console.log(message);
	}

	static toFile() {
		const fileName = path.join(__dirname, 'log.txt');
		appendFile(filename, `${timestamp} - ${message}`, error => {
		if (error) {
			console.log('Error writing to file');
			console.log(error);
		}
	});
	}

	static toConsole() {
		console.log(`${timestamp} - ${message}`)
	}

	static none() {

	}
}

module.exports = new LogStrategy();

