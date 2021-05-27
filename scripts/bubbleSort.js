function bubbleSort() {
	c_delay = 0

	for (var i = 0; i < array_size - 1; i++) {
		for (var j = 0; j < array_size - i - 1; j++) {
			// COLOR UPDATE
			div_update(divs[j], div_sizes[j], 'yellow')

			if (div_sizes[j] > div_sizes[j + 1]) {
				// COLOR UPDATE
				div_update(divs[j], div_sizes[j], 'red')

				// COLOR UPDATE
				div_update(divs[j + 1], div_sizes[j + 1], 'red')

				// SWAP VALUES
				var temp = div_sizes[j]
				div_sizes[j] = div_sizes[j + 1]
				div_sizes[j + 1] = temp

				// HEIGHT UPDATE
				div_update(divs[j], div_sizes[j], 'red')
				// HEIGHT UPDATE
				div_update(divs[j + 1], div_sizes[j + 1], 'red')
			}
			// COLOR UPDATE
			div_update(divs[j], div_sizes[j], 'blue')
		}
		// COLOR UPDATE
		div_update(divs[j], div_sizes[j], 'green')
	}
	// COLOR UPDATE
	div_update(divs[0], div_sizes[0], 'green')
	enable_buttons()
}
