var templateHTML, contactData;

function getContent (){
    console.log("Entering getContent function");
    console.log("Template", templateHTML);
    $.ajax({
        url:'/data',
        dataType: 'json',
        success: function(response){
            console.log("getContent success ", response);
            contactData = response;
            appendData();
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        },
        complete: function(){
            console.log("Data ajax call complete");
        }
    });
}

function appendData (){
    console.log("This ran ", contactData);
    console.log("Template", templateHTML);
    var el = $('#contact');
    el.prepend(templateHTML);
    el.children().children('#title').append(contactData.info.title);
    el.children().children('#phone').append(contactData.info.phone);
    el.children().children('#address').append(contactData.info.address);
    el.children().find('#email').append(contactData.info.email);
    el.children().children('#summary').append(contactData.info.summary);
}

$(document).ready(function(){
   $('.block-content').hide();

    $('.wellsRelease').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.wellsVault').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.wellsVaultClerk').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.wellsData').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.education').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.skills').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });

    $(".getContact").on('click', function(){
        if(!templateHTML){
            console.log("Entering conditional");
            $.ajax({
                url: '/template',
                success: function(response) {
                    templateHTML = response;
                    getContent();
                }
            });
        }
    });
});