// data for testing
var params = {
	lines: [{
		background:'#00F',
		updateTime: 1000,
		elements:[{
			background:'#00F',
			width: 25
		},
		{
			background:'#0F0',
			width: 50
		},
		{
			background:'#F00',
			width: 10
		}]
	}, {
		background:'#00F',
		updateTime: 2000,
		elements:[{
			background:'#00F',
			width: 25
		},
		{
			background:'#0F0',
			width: 33
		},
		{
			background:'#F00',
			width: 2
		}]
	}]
};

draw(params);

/**
 * Draws lines based on configuration object.
 * @param {object} data - Configuration object.
 * @param {array} data.lines - Array of line objects.
 */
function draw(data) {
	var lineHeight;
	
	if (!data.lines) {
		throw new Error('Lines is not defined.');
	}

	lineHeight = window.innerHeight/data.lines.length;

	data.lines.forEach(function(line){
		var lineNode = createLine(line, lineHeight);
		document.body.appendChild(lineNode);
	});
}

/**
 * Returns line DOM node.
 * @param {object} line - Configuration object of line.
 * @param {number} lineHeight - Line height.
 * @returns {Node} - DOM node of line element.
 */
function createLine(line, lineHeight) {
	var lineNode = document.createElement('div');
	lineNode.classList.add('line');
	lineNode.style.height = lineHeight +'px';
	lineNode.style.backgroundColor = line.background;

	setInterval(function() {
		lineNode.style.backgroundColor = getRandomRGBColor();
	}, line.updateTime);

	if (line.elements) {
		line.elements.forEach(function(element){
			var elementNode = createElement(element);
			lineNode.appendChild(elementNode);
		});
	}

	return lineNode;
}

/**
 * Returns element DOM node.
 * @param {object} element - Configuration object of line element.
 * @returns {Node} - DOM node of element.
 */
function createElement(element) {
	var elementNode = document.createElement('div');
	elementNode.style.width = element.width + '%';
	elementNode.style.backgroundColor = element.background;
	return elementNode;
}

/**
 * Generates string with random colors in rgb format.
 * @returns {string}
 */
function getRandomRGBColor() {
	return 'rgb('
		+ Math.floor(Math.random() * 255) + ','
		+ Math.floor(Math.random() * 255) + ','
		+ Math.floor(Math.random() * 255) + ')';
}

