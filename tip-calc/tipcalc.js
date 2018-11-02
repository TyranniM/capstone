let operator;


// // $("#percentOne").click(function () {
// //     // if (operator === "/") {
// //     //     console.log("hi")


// })
$("#calculate").click(function () {
console.log('hi')
console.log($('#billAmount').val())
console.log($('#tipPercent').val())
console.log($('#amountPeople').val())
    let tipTotal = $('#billAmount').val() * $('#tipPercent').val() / $('#amountPeople').val()

        $("#totalTip").val(tipTotal);
    });

// amount of bill times % / people = tip per person























