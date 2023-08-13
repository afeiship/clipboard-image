import { clipboard } from 'clipboard-sys';
import clipfiles from 'clipboard-files';
import fs from 'fs';

// https://github.com/alex8088/clipboard-files
// https://www.npmjs.com/package/@fork-anyone/clipboard-files

declare var wx: any;

const SUPPORT_IMG_EXTS = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.gif'];

class ClipboardImage {
  public static async read() {
    const filenames = clipfiles.readFiles();
    if (filenames.length) {
      const target = filenames[0];
      const extention = target.slice(target.lastIndexOf('.')).toLowerCase();
      if (SUPPORT_IMG_EXTS.includes(extention)) {
        return fs.readFileSync(target.slice(7));
      }
    } else {
      try {
        return await clipboard.readImage();
      } catch (e) {}
    }
    return null;
  }

  public static write() {
    console.log('tobe implement');
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = ClipboardImage;
}

export default ClipboardImage;
