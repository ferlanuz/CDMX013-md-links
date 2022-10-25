const functions = require('./functions.js');
// const axios = require('axios');

const mdLinks = (filePath, opt) => {
    // VERIFY THE GIVEN PATH
    const isAbsolutePath = functions.absolutePath(filePath)
    ? filePath
    : functions.isRelative(filePath);

    let allFiles = [];
    if(functions.isFolder(isAbsolutePath)){
        allFiles = [...allFiles,...functions.readFolders(isAbsolutePath)];
    }else{
        allFiles.push(isAbsolutePath);

    }
    // GET .md FILE EXTENSION
    const mdFiles = allFiles.filter(file => {
        if(functions.getExtName(file) == '.md'){
         return file;
        }
    })
    const arrayLinks = [];
     mdFiles.forEach((file) => {
        // READ FILES
        const filteredFiles = functions.readFile(file);
        // GET LINKS
        const filterMethod = /\[(.+)\]\((https?:\/\/.+)\)/gi;
        const resultLinks = [...filteredFiles.matchAll(filterMethod)];
        if(resultLinks !== null || resultLinks !== 0){
            console.log(resultLinks)
        }

    })

    
    return mdFiles;
   
    }
    
    




module.exports = {
    mdLinks
}