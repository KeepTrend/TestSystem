$(document).ready(function(){
    var base_url = window.location.origin;
    $.ajax({
        url: base_url + '/testsystem/Question/getGroup',
        type: 'post',
        data: {
        },
        success: function(res) {
            res = JSON.parse(res);
            var str = "";
            for(var i = 0;i < res.length; i ++){
                str += '<option value="' + res[i].group_id + '">' + res[i].group_name + '</option>';
            }

            $("#up-group").html(str);                
        }, 
        failure: function(err) {
            console.log(err);
        }
    });

    $("#up-usertype").change(function(){
        if($(this).val() == 'Student'){
            $("#group").css("display", "block");
        }
        else{
            $("#group").css("display", "none");
        }
    });
});