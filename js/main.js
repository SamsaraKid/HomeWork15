let x = []


//добавить элемент
function fAdd() {
    if (document.getElementById("in").checkValidity() && $('#in').val()) {
        x.push($('#in').val())
    }
    printArray()
    $('#in').val('')
    checkInput()
    checkEmpty()
}

//удалить повторы
function deleteRepeat(massive) {
    for (let i = 0; i < massive.length; i++) {
        for (let n = i + 1; n < massive.length; n++) {
            if (x[n] == x[i]) {
                x.splice(n, 1)
                n--
            }
        }
    }
    // let temp = x.filter((element, index) => {
    // return x.indexOf(element) === index})
    printArray()
    checkEmpty()
}

//проверка ввода числа в поле
function checkInput() {
    if ($('#in').val() && document.getElementById("in").checkValidity()) {
        $('#add1').prop('disabled', false)
    } else {$('#add1').prop('disabled', true)}
}

//проверка массива на пустоту
function checkEmpty() {
    if (x.length) {
        $('.deletes').prop('disabled', false)
    } else {$('.deletes').prop('disabled', true)}
}

//отекстовка результата
function printArray() {
    if (x.length) {
        $('#result').text('Ваш массив: [' + x.join(', ') + ']')
    } else {$('#result').text('Ваш массив пуст. Добавьте значения')}
}



//удалить последний
$('#delLast').click(function (){
    x.pop()
    printArray()
    checkEmpty()
})

//удалить первый
$('#delFirst').click(function (){
    x.shift()
    printArray()
    checkEmpty()
})

$('#add1').click(fAdd)

$(document).on('keypress','#in',function (e) {
    if (e.keyCode === 13) {
        fAdd()
    }
})

$('#delRepeat').click(function () {deleteRepeat(x)})
$(document).ready($('#in').val(''))
$('#in').keyup(checkInput)
$('#in').change(checkInput)




