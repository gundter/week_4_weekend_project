$(document).ready(function(){
   $('.block-content').hide();

    $('.wellsRelease').on('click', '.btn', function() {
        $(this).prev().slideDown('slow');
    });
    $('.wellsVault').on('click', '.btn', function() {
        $(this).prev().slideDown('slow');
    });
    $('.wellsVaultClerk').on('click', '.btn', function() {
        $(this).prev().slideDown('slow');
    });
    $('.wellsData').on('click', '.btn', function() {
        $(this).prev().slideDown('slow');
    });
    $('.education').on('click', '.btn', function() {
        $(this).prev().slideDown('slow');
    });
    $('.skills').on('click', '.btn', function() {
        $(this).prev().slideDown('slow');
    });
});