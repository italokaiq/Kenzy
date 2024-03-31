const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', async (request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://br.betano.com/odds/cruzeiro-vasco-da-gama/40932648/");
    // await page.screenshot({path: "example.png"});

    await browser.close();
    response.send({});
});

const port = 10;

server.listen(port, () => {
    console.log(`
        Servidor cirado com sucesso!!
        acesse em: http://localHost:${port}
    `);
});

// (async () => {

// })();