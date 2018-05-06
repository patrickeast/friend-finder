$(document).ready(function () {
    var submissions = [];
    var right = [];
    $("#first").on("click", function () { show($("#firstlist"), $("#ichi")); });
    $("#second").on("click", function () { show($("#secondlist"), $("#ni")); });
    $("#third").on("click", function () { show($("#thirdlist"), $("#san")); });
    $("#fourth").on("click", function () { show($("#fourthlist"), $("#shi")); });
    $("#fifth").on("click", function () { show($("#fifthlist"), $("#go")); });
    $("#sixth").on("click", function () { show($("#sixthlist"), $("#roku")); });
    $("#seventh").on("click", function () { show($("#seventhlist"), $("#nana")); });
    $("#eighth").on("click", function () { show($("#eighthlist"), $("#hachi")); });
    $("#ninth").on("click", function () { show($("#ninthlist"), $("#ku")); });
    $("#tenth").on("click", function () { show($("#tenthlist"), $("#ju")); });
    $(".one").on("click", function () { hide($("#firstlist")); });
    $(".two").on("click", function () { hide($("#secondlist")); });
    $(".three").on("click", function () { hide($("#thirdlist")); });
    $(".four").on("click", function () { hide($("#fourthlist")); });
    $(".five").on("click", function () { hide($("#fifthlist")); });
    $(".six").on("click", function () { hide($("#sixthlist")); });
    $(".seven").on("click", function () { hide($("#seventhlist")); });
    $(".eight").on("click", function () { hide($("#eighthlist")); });
    $(".nine").on("click", function () { hide($("#ninthlist")); });
    $(".ten").on("click", function () { hide($("#tenthlist")); });
    $(".ten").on("click", dix);
    $(".nine").on("click", neuf);
    $(".eight").on("click", huit);
    $(".seven").on("click", sept);
    $(".six").on("click", six);
    $(".five").on("click", cinq);
    $(".four").on("click", quatre);
    $(".three").on("click", trois);
    $(".two").on("click", deux);
    $(".one").on("click", un);
    $("#final").on("click", you);
    function you() {
        if ($("#handle").val() == "" || $("#photo").val() == "" || $("#ichi").val() == "" || $("#ni").val() == "" || $("#san").val() == "" || $("#shi").val() == "" || $("#go").val() == "" || $("#roku").val() == "" || $("#nana").val() == "" || $("#hachi").val() == "" || $("#ku").val() == "" || $("#ju").val() == "") {
            alert("Please Fill Out All Required Fields");
        }
        else {

            var profile =
                {
                    name: $("#handle").val(),
                    photo: $("#photo").val(),
                    scores: [$("#ichi").val(), $("#ni").val(), $("#san").val(), $("#shi").val(), $("#go").val(), $("#roku").val(), $("#nana").val(), $("#hachi").val(), $("#ku").val(), $("#ju").val()]
                }
                ;
            submissions.push(profile);
            add(parseInt(profile.scores[0]), parseInt(profile.scores[1]), parseInt(profile.scores[2]), parseInt(profile.scores[3]), parseInt(profile.scores[4]), parseInt(profile.scores[5]), parseInt(profile.scores[6]), parseInt(profile.scores[7]), parseInt(profile.scores[8]), parseInt(profile.scores[9]));
        }
    }
    function dix() {

        var a = ($(this).attr("data-option"));
        $("#ju").val(a);
    }
    function neuf() {

        var a = ($(this).attr("data-option"));

        $("#ku").val(a);

    }
    function huit() {

        var a = ($(this).attr("data-option"));

        $("#hachi").val(a);

    }
    function sept() {

        var a = ($(this).attr("data-option"));

        $("#nana").val(a);

    }
    function six() {

        var a = ($(this).attr("data-option"));

        $("#roku").val(a);

    }
    function cinq() {

        var a = ($(this).attr("data-option"));

        $("#go").val(a);

    }
    function quatre() {

        var a = ($(this).attr("data-option"));

        $("#shi").val(a);

    }
    function trois() {

        var a = ($(this).attr("data-option"));

        $("#san").val(a);

    }
    function deux() {

        var a = ($(this).attr("data-option"));

        $("#ni").val(a);

    }
    function un() {

        var a = ($(this).attr("data-option"));

        $("#ichi").val(a);

    }
    function show(x, y) {
        x.css("display", "block");
        y.css("visibility", "visible");

    }
    function hide(x) {
        x.css("display", "none");
    }
    function add(a, b, c, d, e, f, g, h, i, j) {
        friendScore = a + b + c + d + e + f + g + h + i + j;
        for (i = 0; i < right.length; i++) {
            math(friendScore, right[i]);
        }
        right.push(friendScore);

    }
    function math(x, y) {
        var operation;
        if (x < y) {
            operation = y - x;
        }
        else if (x > y) {
            operation = x - y;
        }
        else {
            operation = 0;
        }

    }
});