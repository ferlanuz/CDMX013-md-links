const functions = require('.functions.js');

const mdLinks = (filePath, opt) => new Promise((resolve, reject) => {
    // VERIFY PATH
    const isAbsolutePath = functions.isAbsolute(filePath) ? filePath : functions.isRelative(filePath);
    // 
})