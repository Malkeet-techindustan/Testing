$(document).ready(function () {

$('.radioadd').click(function () {
    var idvalue = $(this).attr('id');
    if (idvalue == "check_cash") {
        localStorage.setItem("selectedradio", "cash");
    }
    if (idvalue == "check_travel") {
        localStorage.setItem("selectedradio", "travel");
    }
    if (idvalue == "check_reload") {
        localStorage.setItem("selectedradio", "reload");
    }
    $('.customradio').removeClass('field--checked');
    $(this).parent().addClass('field--checked');
})

$(".trav-card").click(function () {
    var content = $('.trav-card-show').html();
    $('.main-card').append(content);
    $('.thecurrency-card').show();
    $('.cash-travel-card').hide();

});

$(".reload-card").click(function () {
    var content = $('.reload-card-show').html();
    $('.main-card').append(content);
    $('.thecurrency-card').show();
    $('.cash-travel-card').hide();

});

$(".cashcard").click(function () {
    var content = $('.form-currency-card').html();
    var html = '<div class="form-currency-card">' + content + '</div>';
    $('.main-card').append(html);

});

/*** remove card***/

$('body').on('click', '.cancel', function () {

    $(this).parent().parent().parent().remove();
    var counttravel = parseInt($('.form-currency-travl-card').length) - 2;

    if (!counttravel) {
        $('.thecurrency-card').hide();
        $('.cash-travel-card').show();
    }
});

/*** travel card***/
$('.buy-currency-section').show();
$('.reload-travel-card').hide();
$('.travel-card').hide();

var selectedname = localStorage.getItem("selectedradio");

if (selectedname == "travel") {
    $('.buy-currency-section').hide();
    $('.travel-card').show();
    $('.displaytravel').show();
    $('.reload-travel-card').hide();
    $('.thecurrency-card').show();
    $('.cash-travel-card').hide();


}
if (selectedname == "reload") {
    $('.buy-currency-section').hide();
    $('.travel-card').hide();
    $('.reload-travel-card').show();
    $('.displaytravel').show();
    $('.thecurrency-card').show();
    $('.cash-travel-card').hide();


}
if (selectedname == "cash") {
    $('.buy-currency-section').show();
    $('.reload-travel-card').hide();
    $('.travel-card').hide();
    $('.displaytravel').hide();
}

});