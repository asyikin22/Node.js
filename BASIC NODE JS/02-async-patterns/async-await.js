const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('../content/text.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileAsync();
