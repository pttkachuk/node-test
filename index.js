//console.log('Hello World!');
//const nodemon = require('nodemon');

// const currentMonth = require('./date.js');
// console.log(currentMonth);

// const { admins } = require('./users.js');
// console.log(admins);

/////////////////////////////////////////////////////

const fs = require('fs/promises');

const filepath = './file.txt';

const fileOperation = async ({ action, filepath, data }) => {
    switch (action) {
        case 'read':
            const text = await fs.readFile(filepath);
            const decodedText = text.toString();
            console.log(decodedText);
            break
        case 'add':
            await fs.appendFile(filepath, data);
            break
        case 'replace':
            await fs.writeFile(filepath, data)
            break
        default:
            console.log('Unknown action');
    }
}


fileOperation({ action: 'read', filepath });
//fileOperation({ action: 'add', filepath, data: '\nHi' });
fileOperation({ action: 'replace', filepath, data: 'In Got We Trust' });