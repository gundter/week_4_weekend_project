var templateHTML;

function getContent (){
    console.log("Entering getContent function");
    console.log("Template", templateHTML);
    $.ajax({
        url:'/data',
        dataType: 'json',
        success: function(response){
            console.log("getContent success ", response);
            appendData(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        },
        complete: function(){
            console.log("Data ajax call complete");
        }
    });
}

function appendData (data){
    console.log("This ran ", data);
    console.log("Template", templateHTML);
    var el = $('#contact');
    el.append(templateHTML);
    el.children().children('#title').append(data.info.title);
    el.children().children('#phone').append(data.info.phone);
    el.children().children('#address').append(data.info.address);
    el.children().find('#email').append(data.info.email);
    el.children().children('#summary').append(data.info.summary);
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