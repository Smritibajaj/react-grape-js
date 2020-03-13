//import gjsBasicBlocks from 'grapesjs-blocks-basic';
//import gjsNavbar from 'grapesjs-navbar';
//import gjsForms from 'grapesjs-plugin-forms';
//import gjsWebpage from 'c:/Users/Simmy.Bajaj/OneDrive - 365shl/Documents/react-website-builder/node_modules/grapesjs-plugin-webpage/src';
import gjsBootstrap4 from 'grapesjs-blocks-bootstrap4';

const pluginName = [gjsBootstrap4]

const config = {
  container: '#gjs',
  fromElement: true,
  allowScripts: true,
  blockManager: {
    appendTo: '#blocks'
  },
  panels: {
    appendTo: '#panels',
    defaults: []
  },
  styleManager: {
    appendTo: '#style-manager-container',
    sectors: [{
      name: 'General',
      open: true,
      buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
    }, {
      name: 'Typography',
      open: true,
      buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
    }, {
      name: 'Decorations',
      open: true,
      buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
    }
    ],
  },
  storageManager: { type: 0 },
  plugins: pluginName,
  canvas: {
    styles: [
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    ],
    scripts: [
      "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    ],
  },
};
export default config;