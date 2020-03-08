import gjsBasicBlocks from 'grapesjs-blocks-basic';
import * as styles from '../App.css';
const config = {
    container: '#gjs',
    fromElement: true,
    allowScripts: true,
    width: 'auto',
    plugins: [gjsBasicBlocks],
    pluginsOpts: {
      blocks : ['column1']
    },
    canvas:{
        styles: [
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", 
        ],
        scripts: [
         "https://code.jquery.com/jquery-3.4.1.slim.min.js",
         "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
         "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        ],
      }
};
export default config;