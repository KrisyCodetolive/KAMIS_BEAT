import { diskStorage } from 'multer';
import { join} from 'path';
import * as fs from 'fs';

export const instruStorage = diskStorage({
  destination: (req, file, cb) => {
  
      if (!(req as any).instruId) {
      (req as any).instruId = Date.now();
      const dir = join(process.cwd(), 'uploads', 'instrumentals', (req as any).instruId.toString());
      fs.mkdirSync(dir, { recursive: true });
      (req as any).instruFolder = dir;
    }

  
    cb(null, (req as any).instruFolder);
    
  },
  filename: (req, file, cb) => {
  
    cb(null, file.originalname);
  },
});



