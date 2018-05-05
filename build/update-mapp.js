const path = require('path');
const fs = require('fs');

module.exports = function(root) {
    const themesPath = root + '/node_modules/vue-mapp/themes/dist';
    const files = fs.readdirSync(themesPath);
    const staticThemesPath = root + '/static/themes';


    console.log('\n- copying vue-mapp themes\n');

    if (!fs.existsSync(staticThemesPath)) {
        fs.mkdirSync(staticThemesPath);
    }

    files.forEach(function (file) {
        if (/\.css/.test(file)) {
            const srcFilePath = path.join(themesPath, file);
            const targetFilePath = path.join(staticThemesPath, file);
            fs.createReadStream(srcFilePath).pipe(fs.createWriteStream(targetFilePath));
        }
    });

    console.log('  Done\n')
}

