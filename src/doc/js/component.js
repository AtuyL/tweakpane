var params = {
	range: 10,
	power: 0.5,
	color: '#ff0000',
	size: 30
};

(function() {
	var pane = new Tweakpane({
		foldable: false,
		container: document.getElementById('folderExample1')
	});

	var folder1 = pane.addFolder('Interaction');
	folder1.addControl(params, 'power');
	folder1.addControl(params, 'range');

	var folder2 = pane.addFolder('Appearance');
	folder2.addControl(params, 'color')
	folder2.addControl(params, 'size');
})();

(function() {
	var pane = new Tweakpane({
		foldable: false,
		container: document.getElementById('folderExample2')
	});

	var folder1 = pane.addFolder('Interaction');
	folder1.addControl(params, 'power');
	folder1.addControl(params, 'range');
	folder1.close();

	var folder2 = pane.addFolder('Appearance');
	folder2.addControl(params, 'color')
	folder2.addControl(params, 'size');
})();

(function() {
	var params = {
		count: 0,
		'(log)': ''
	};
	var pane = new Tweakpane({
		foldable: false,
		container: document.getElementById('buttonExample')
	});
	pane.addButton('Fire').on('click', function() {
		params['(log)'] = 'clicked: ' + String(++params.count);
	});
	pane.addMonitor(params, '(log)', {
		count: 10
	});
})();

(function() {
	var pane = new Tweakpane({
		foldable: false,
		container: document.getElementById('separatorExample')
	});
	pane.addButton('Action');
	pane.addSeparator();
	pane.addButton('Import');
	pane.addButton('Export');
})();
