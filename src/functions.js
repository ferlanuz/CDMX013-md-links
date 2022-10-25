const path = require('path');
const fs = require('fs');
const axios = require('axios');
const http = require('http');



// IS ABSOLUTE PATH
 const absolutePath = (dir) => path.isAbsolute(dir);
// RESOLVE PATH IF IT´S RELATIVE
const isRelative = (dir) => path.resolve(dir);
// VERIFY IF IS FOLDER
 const isFolder = (dir) => fs.lstatSync(dir).isDirectory();
// READ FOLDERS
const readFolders = (dirPath, resultFiles = []) => {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        const newPath = path.join(dirPath, file);
        if (fs.lstatSync(newPath).isDirectory()){
            readFolders(newPath, resultFiles);
        } else{
            resultFiles.push(newPath)
        };
        })
        return resultFiles;
    }
// READ FILE
const readFile = (dir) => fs.readFileSync(dir, 'utf-8');
// EXTENSION NAME
const getExtName = (file) => path.extname(file);
// VALIDATE LINKS
const validateLinks = (href) => axios.get(href);


module.exports = {
    absolutePath,
    isRelative,
    isFolder,
    readFolders,
    readFile,
    getExtName,
    validateLinks
    // requireRequest
       
};

