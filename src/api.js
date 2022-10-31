const functions = require('./functions.js');

const mdLinks = (filePath, opt) => new Promise((resolve) => { 
    // VERIFY THE GIVEN PATH
    const isAbsolutePath = functions.absolutePath(filePath)
    ? filePath
    : functions.isRelative(filePath);

    let allFiles = [];
    // READ THE FOLDERS
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
            resultLinks.forEach(url => {
                arrayLinks.push({
                    href: url[2],
                    text: url[1].slice(0, 50),
                    file
                })
            }) 
        }

    })
    // VALIDATE LINKS
    if(opt.validate == true){
        let arrPromises = [];
        arrayLinks.forEach((link) => {
            let linksValidated = functions.validateLinks(link.href)
            .then((result) => {
                // console.log(result);
                return {
                    href: link.href,
                    text: link.text,
                    file: link.file,
                    status: result.status,
                    message: result.statusText
                }
            })
            .catch((err) => err.message);
            arrPromises.push(linksValidated);
        })
        return Promise.all(arrPromises)
        .then((result) => resolve(result));
       
    }
    if(opt.stats == true){
         console.log(`Total: ${arrayLinks.length}
Unique: `) 
    }
    if(opt.validate == true && opt.stats == true){


    }else{
        return resolve (arrayLinks);
    }


    });
    


module.exports = {
    mdLinks
}