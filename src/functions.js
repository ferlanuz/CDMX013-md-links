const path = require('path');
const fs = require('fs');
const { dir } = require('console');
const { extname } = require('path');

// IS ABSOLUTE PATH
 const isAbsolute = (dir) => path.isAbsolute(dir);
// RESOLVE PATH IF IT´S RELATIVE
const isRelative = (dir) => path.resolve(dir);
// VERIFY IF IS FOLDER
 const isFolder = (dir) => fs.lstat(dir).isDirectory();
// READ FOLDERS
const readFolders = (dirPath) => {
    let resultFiles = [];
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        const newPath = path.join(dirPath, file);
        if(fs.lstatSync(newPath).isDirectory()){
            readFolders(newPath);
        }else{
            resultFiles.push(newPath);
            console.log(resultFiles);
        }
    })
    return resultFiles;
  
}
// console.log(folderFiles('./src'));
// READ FILE
const readFile = (dir) => fs.readFileSync(dir, 'utf-8');
// EXTENSION NAME
const getExtName = (file) => path.extname(file);


module.exports = () => {
    isAbsolute,
    isRelative,
    isFolder,
    readFolders,
    readFile,
    getExtName
};

