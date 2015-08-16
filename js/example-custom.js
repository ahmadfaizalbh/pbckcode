/* global $, Prism*/

CKEDITOR.replace('editor1', {
    customConfig : 'config-custom.js'
});

// SYNTAX_HIGHLIGHTER
CKEDITOR.instances.editor1.on('change', function (e) {
    // append the result into the div
    document.getElementById('output5').innerHTML = e.editor.getData();

    Prism.highlightAll();
});