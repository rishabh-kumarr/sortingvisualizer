// VARIABLES (USED IN JS FILES)
var input_as = document.getElementById('arr_size')
var array_size = input_as.value
var input_gen = document.getElementById('arr_generate')
var input_arrspeed = document.getElementById('arr_speed')

var button_algos = document.querySelectorAll('.algos button')

var div_sizes = []
var divs = []
var margin_size
var container = document.getElementById('array_container')

container.style = 'flex-direction:row'

// ARRAY GENERATION AND UPDATION

input_gen.addEventListener('click', generate_array)
input_as.addEventListener('input', update_array_size)

function generate_array() {
    container.innerHTML = ''
    
    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (input_as.max - input_as.min)) + 10
        divs[i] = document.createElement('div')
        container.appendChild(divs[i])
        margin_size = 0.1
        divs[i].style = ' margin:0% ' + margin_size + '%; background:blue; width:' + (100 / array_size - 2 * margin_size) + '%; height:' + div_sizes[i] + '%;'   
    }
}

function update_array_size() {
    array_size = input_as.value
    generate_array()
}

window.onload = update_array_size()

for (var i = 0; i < button_algos.length; i++) {
   button_algos[i].addEventListener('click', run_algorithm)
}

function disable_buttons() {
    for (var i = 0; i < button_algos.length; i++) {
        button_algos[i].classList = []
        button_algos[i].classList.add('button_locked')

        button_algos[i].disabled = true
        input_as.disabled = true
        input_gen.disabled = true
        input_arrspeed.disabled = true
    }
}

function run_algorithm() {
    disable_buttons()

    this.classList.add('button_selected')
    switch (this.innerHTML) {
        case 'Bubble':
            bubbleSort();
            break;
        case 'Selection':
            selectionSort();
            break;
        case 'Insertion':
            insertionSort();
            break;
        case 'Merge':
            mergeSort();
            break;
        case 'Quick':
            quickSort();
            break;
        case 'Heap':
            heapSort();
            break;
    }
}
