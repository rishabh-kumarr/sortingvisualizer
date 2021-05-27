var speed = 1000

input_arrspeed.addEventListener('input', visual_speed)

function visual_speed() {
	var array_speed = input_arrspeed.value
	switch (parseInt(array_speed)) {
		case 1:
			speed = 1
			break
		case 2:
			speed = 10
			break
		case 3:
			speed = 100
			break
		case 4:
			speed = 1000
			break
		case 5:
			speed = 10000
			break
	}
	// DECREASING NUMERATOR TO INCREASE SPEED
	delay = 10000 / (Math.floor(array_size / 10) * speed)
}

// DECREASING NUMERATOR TO INCREASE SPEED
var delay = 10000 / (Math.floor(array_size / 10) * speed)
// VARIABLE TO BE UPDATED ON EVERY DIV CHANGE FOR VISUALIZATION TO BE VISIBLE
var c_delay = 0

function div_update(container, height, color) {
	window.setTimeout(function () {
		container.style =
			' margin:0% ' +
			margin_size +
			'%; width:' +
			(100 / array_size - 2 * margin_size) +
			'%; height:' +
			height +
			'%; background:' +
			color +
			';'
	}, (c_delay += delay))
}

function enable_buttons() {
	window.setTimeout(function () {
		for (var i = 0; i < button_algos.length; i++) {
			button_algos[i].classList = []
			button_algos[i].classList.add('button_notselected')

			button_algos[i].disabled = false
			input_as.disabled = false
			input_gen.disabled = false
			input_arrspeed.disabled = false
		}
	}, (c_delay += delay))
}
