const path = require('path');
const fs = require('fs');

class SiteController {
    // index(req, res, next) {
    //     const htmlPath = path.join(__dirname, '../../resources/views/index.html');
    //     const cssPath = path.join(__dirname, '../../resources/css/styles.css');

    //     try {
    //         const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    //         const cssContent = fs.readFileSync(cssPath, 'utf-8');
    //         const combinedContent = htmlContent.replace('</head>', `<style>${cssContent}</style></head>`);
    //         res.send(combinedContent);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).send('Internal Server Error');
    //     }
    // }

    index(req, res, next) {
        res.render('home');
    }
}

module.exports = new SiteController();
