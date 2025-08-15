import * as fs from 'fs';

export function delFile(path:string[]){

    path.forEach(items => {

        fs.rmSync(items, { recursive: true, force: true });
    })
}