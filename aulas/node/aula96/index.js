const fs = require('fs').promises;
const path = require('path');


async function readFile(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/.test(fileFullPath)) continue;
        if(/node_modules/.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readFile(fileFullPath);
            continue;
        }
        console.log(fileFullPath);
    }
}

readFile('/home/caio/Documentos/estudos/cursoJSTP');