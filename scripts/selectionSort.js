function selectionSort() {
	c_delay = 0

	for (var i = 0; i < array_size - 1; i++) {
		// COLOR UPDATE
		div_update(divs[i], div_sizes[i], 'red')
		index_min = i
		for (var j = i + 1; j < array_size; j++) {
			// COLOR UPDATE
			div_update(divs[j], div_sizes[j], 'yellow')
			if (div_sizes[j] < div_sizes[index_min]) {
				if (index_min != i) {
					// COLOR UPDATE
					div_update(divs[index_min], div_sizes[index_min], 'blue')
				}
				index_min = j
				// COLORUPDATE
				div_update(divs[j], div_sizes[j], 'red')
			} else {
				// COLOR UPDATE
				div_update(divs[j], div_sizes[j], 'blue')
			}
		}
		if (index_min != i) {
			// SWAP VALUES
			var temp = div_sizes[index_min]
			div_sizes[index_min] = div_sizes[i]
			div_sizes[i] = temp

			// HEIGHT UPDATE
			div_update(divs[index_min], div_sizes[index_min], 'red')
			// HEIGHT UPDATE
			div_update(divs[i], div_sizes[i], 'red')
			// COLOR UPDATE
			div_update(divs[index_min], div_sizes[index_min], 'blue') //Color update
		}
		// COLOR UPDATE
		div_update(divs[i], div_sizes[i], 'green')
	}
	// COLOR UPDATE
	div_update(divs[i], div_sizes[i], 'green')

	enable_buttons()
}
