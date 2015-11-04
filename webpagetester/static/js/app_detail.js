function update_test(d) {
    $("#overlay").fadeIn();

    $.ajax({
        url : "/update_test/", // the endpoint
        type : "POST", // http method
        data : { the_post : d.name }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            console.log("Updated - " + d.name); // another sanity check
            location.reload();
        },


        error : function(xhr,errmsg,err) {
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });

    $("#overlay").fadeOut();
}

$(document).ready(function(){
    $('.updater').on('submit', function(event){
    event.preventDefault();
    update_test(this);
    });

    $t = $("#alerts_table");
    $("#overlay").css({
      opacity : 0.5,
      top     : $t.offset().top,
      width   : $t.outerWidth(),
      height  : $t.outerHeight()
    });

    $("#img-load").css({
      top  : ($t.height() / 2),
      left : ($t.width() / 2)
    });

});

$(function() {
    $('input[name=selection]').click(function(){
        if($(this).parent().parent().siblings().children().children("input[name=selection]:checkbox:checked").length >= 2)
            this.checked = false;
    });
});
