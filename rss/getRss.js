const fs = require("fs");
const Parser = require("rss-parser");

(async function main() {

    const parser = new Parser();
    const feed = await parser.parseURL("https://anchor.fm/s/d7daef8/podcast/rss");
    let items = [];
    
    const fileName = `${feed.title.replace(/\s+/g, "-").replace(/[/\\?%*:|"<>]/g, '').toLowerCase()}.json`;
    if (fs.existsSync(fileName)) {
        items = require(fileName);
    }

    await Promise.all(feed.items.map(async (currentItem) => {
        if (items.filter((item) => item === currentItem).length <= 1) {
            items.push(currentItem);
        }
    }));

    fs.writeFileSync(fileName, JSON.stringify(items));
})();