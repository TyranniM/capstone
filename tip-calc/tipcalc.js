let operator;
let tipTotal = $('#billAmount') * $('#tipPercent') / $('#amountPeople')


// // $("#percentOne").click(function () {
// //     // if (operator === "/") {
// //     //     console.log("hi")


// })
$("#calculate").click(function () {
    if (tipTotal) {
        parseInt($('#tipTotal').val());
        $("#totalTip").html("tipTotal");
    }
});

// amount of bill times % / people = tip per person























