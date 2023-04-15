import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.resolve(__dirname, '../../database/data-binnacle.json');
const dir = path.dirname(file);

function saveData(data) {

   if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
   }

   fs.writeFileSync(file, JSON.stringify(data));
}



function consultData() {
   if(!fs.existsSync(file)) {
      return null;
   }

   const data = fs.readFileSync(file, { encoding: 'utf-8' });


   return JSON.parse(data);
}


export { saveData, consultData };
