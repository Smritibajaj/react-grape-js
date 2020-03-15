//import gjsBasicBlocks from 'grapesjs-blocks-basic';
//import gjsNavbar from 'grapesjs-navbar';
//import gjsForms from 'grapesjs-plugin-forms';
//import gjsWebpage from 'c:/Users/Simmy.Bajaj/OneDrive - 365shl/Documents/react-website-builder/node_modules/grapesjs-plugin-webpage/src';
import gjsBootstrap4 from 'grapesjs-blocks-bootstrap4';
import gjsExport from 'grapesjs-plugin-export';

const pluginName = [ gjsExport, gjsBootstrap4 ]

const config = {
  container: '#gjs',
  fromElement: true,
  allowScripts: true,
  blockManager: {
    appendTo: '#blocks'
  },
  panels: {
    defaults: [{
      id: 'commands',
      el: '#panels',
      buttons: [
          { id: 'select', className: 'fa fa-mouse-pointer', command: 'sw-visibility', active: true, context: 'core:component-select', attributes: { title: 'Select element' } },
          { id: 'undo', className: 'fa fa-undo icon-undo', command: 'core:undo', attributes: { title: 'Undo (CTRL/CMD + Z)' }, },
          { id: 'redo', className: 'fa fa-repeat icon-redo', command: 'core:redo', attributes: { title: 'Redo (CTRL/CMD + SHIFT + Z)' }, },
          { id: 'clean-all', className: 'fa fa-trash icon-blank', command: 'core:canvas-clear', attributes: { title: 'Empty canvas' }, },
          { id: 'clean-all', className: 'fa fa-remove', command: 'core:component-delete', attributes: { title: 'Delete Component' }, },
          { id: 'resize', className: 'fa fa-arrows-alt', command: 'fullscreen', attributes: { title: 'Resize' }, },
          { id: 'resize', className: 'fa fa-picture-o', command: 'core:open-assets', attributes: { title: 'Add Images' }, },
          { id: 'resize', className: 'fa fa-files-o', command: 'core:copy', attributes: { title: 'Copy' }, },
          { id: 'resize', className: 'fa fa-clipboard', command: 'core:copy', attributes: { title: 'Paste' }, },
          { id: 'export', className: 'fa fa-code', command: 'core:open-code', attributes: { title: 'View code' }, },
          { id: 'export', className: 'fa fa-download', command: 'gjs-export-zip', attributes: { title: 'Download code' }, },
          { id: 'visibility', className: 'fa fa-eye', command: 'preview', attributes: { title: 'View components' }, },
      ],
  }]
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