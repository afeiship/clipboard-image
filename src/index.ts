declare var wx: any;

const ClipboardImage = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = ClipboardImage;
}

export default ClipboardImage;
