let x = []

// $(document).ready(function (){$('#result').text(x)})

function fAdd() {
    if (document.getElementById("in").checkValidity() && $('#in').val()) {
        x.push($('#in').val())
    }
    $('#result').text(x)
    $('#in').val('')
}

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
    $('#result').text(x)
}

$('#add1').click(fAdd)

$('#delLast').click(function (){
    x.pop()
    $('#result').text(x)
})

$('#delFirst').click(function (){
    x.shift()
    $('#result').text(x)
})

$('#delRepeat').click(function () {deleteRepeat(x)})

