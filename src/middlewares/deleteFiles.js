import fs from 'fs';
import path from 'path';

export function delFiles() {
    var dir = path.resolve('src/uploads');
    var nowDir = fs.readdirSync('src/uploads');

    setTimeout(() => {
        for (var a = 0; a < nowDir.length; a++) {
            const unlinkFiles = path.join(dir + '/' + nowDir[a]);
            console.log(unlinkFiles);
            fs.unlinkSync(unlinkFiles);
        }
    }, 8000);
}