CKEDITOR.editorConfig = function( config ) {
    config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode'] }, // shows the source button
		{ name: 'pbckcode' }                     // shows the pbckcode button
	];
	config.extraPlugins = 'pbckcode,onchange,sourcearea';
    config.pbckcode = {
        highlighter : 'PRISM',
        js          : "http://cdnjs.cloudflare.com/ajax/libs/ace/1.2.4/"
    };
};
