var m_flag = 0;
var userData;
var current_test_state;
var question_array = [];
var totalMark = 0;
var answers = [];
var flag = 1;
var test_duration = 0;
var test_index = 0;
var check_flag = 0;
var test = "";
var onProgress = 0;
var	marks = "";
var taken_time = "";
var applied_tests = "";
$(document).ready(function(){
	display_tests();

	$("#nav-ranking").click(function(){
		if(onProgress == 1){
			return;
		}
		flag = 1;
		display_tests();
	});

	$("#nav-new").click(function(){
		if(onProgress == 1){
			return;
		}
		flag = 2;
		display_tests();
	});
});

function display_tests(){
	$.ajax({
	    url: '../Question/getAllUser',
	    type: 'post',
	    data: {
	    },
	    success: function(res) {
	    	userData = JSON.parse(res);
	    	display_tests_real();
	    }, 
	    failure: function(err) {
	        console.log(err);
	    }
	}); 		
}

function display_tests_real(){
	var result;
	$.ajax({
        url: '../Question/getUserData',
        type: 'post',
        data: {
        },
        success: function(res) {
        	var result = JSON.parse(res);
       		var main_str = "";
			
			$.ajax({
		        url: '../Question/getTest',
		        type: 'post',
		        data: {
		        },
		        success: function(res) {
		        	res = JSON.parse(res);
		        	var j = 1;
		        	if(flag == 1){
		        		main_str += '<div class="col-md-10 col-md-offset-1">';
						main_str += '<div class="panel panel-primary filterable">';
						main_str += '<div class="panel-heading">';
						main_str += '<h3 class="panel-title">Result</h3>';
						main_str += '<div class="pull-right">';
						main_str += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
						main_str += '</div>';
						main_str += '</div>';
						main_str += '<table class="table" style="text-align: left !important;">';
						main_str += '<thead>';
						main_str += '<tr class="filters">';
						main_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Test Name" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Advanced Question" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Basic Question" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Group" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Mark" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Time" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Rank" disabled></th>';
						main_str += '</thead>';
						main_str += '<tbody>';

			        	for(var i = 0; i < res.length; i ++){
			        		var tt = if_applied(result[0].applied_tests, res[i].test_name);

			        		if(usergroup == res[i].test_group && tt != -1){
			        			var temp = result[0].marks.split(",");
						 		var temp1 = result[0].taken_time.split(",");
			        			var rank = Rank(res[i].test_name, temp[tt]);
			        			main_str += '<tr>';
								main_str += '<td>' + (j++) + '</td>';
								main_str += '<td>' + res[i].test_name + '</td>';
								main_str += '<td>' + res[i].test_numberA + '</td>';
								main_str += '<td>' + res[i].test_numberB + '</td>';
								main_str += '<td>' + res[i].group_name + '</td>';
								main_str += '<td>' + temp[tt] + '</td>';
								main_str += '<td>' + temp1[tt] + '</td>';
								main_str += '<td>' + rank + '</td>';
								main_str += '</tr>';
			        		}
			        	}	
		        	}
		        	else{
		        		main_str += '<div class="col-md-10 col-md-offset-1">';
						main_str += '<div class="panel panel-primary filterable">';
						main_str += '<div class="panel-heading">';
						main_str += '<h3 class="panel-title">Result</h3>';
						main_str += '<div class="pull-right">';
						main_str += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
						main_str += '</div>';
						main_str += '</div>';
						main_str += '<table class="table" style="text-align: left !important;">';
						main_str += '<thead>';
						main_str += '<tr class="filters">';
						main_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Test Name" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Advanced Question" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Basic Question" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Group" disabled></th>';
						main_str += '<th><input type="text" class="form-control" placeholder="Action" disabled></th>';
						main_str += '</thead>';
						main_str += '<tbody>';
		        		for(var i = 0; i < res.length; i ++){
			        		var tt = if_applied(result[0].applied_tests, res[i].test_name);
			        		if(usergroup == res[i].test_group && tt == -1){
			        			main_str += '<tr class="body-row">';
								main_str += '<td>' + (j++) + '</td>';
								main_str += '<td>' + res[i].test_name + '</td>';
								main_str += '<td>' + res[i].test_numberA + '</td>';
								main_str += '<td>' + res[i].test_numberB + '</td>';
								main_str += '<td>' + res[i].group_name + '</td>';
								main_str += '<td><button data-test="' + res[i].test_name + '" data-number1="' + res[i].test_numberA + '" data-number2="' + res[i].test_numberB + '" data-categories="' + res[i].categories + '" data-duration="' + res[i].test_duration + '" class="btn btn-info btn_start">Start</button></td>';
								main_str += '</tr>';
			        		}
			        	}
		        	}

					main_str += '</tbody>';
					main_str += '</table>';
					main_str += '</div>';
					main_str += '</div>';

					$(".main-panel").html(main_str);

					button_func();

					$("button.btn_start").click(function(){
						onProgress = 1;
						test = $(this).data('test');
						var number_A = $(this).data('number1');
						var number_B = $(this).data('number2');
						var cate = $(this).data('categories');
						test_duration = $(this).data('duration');
						display_applying(test, number_A, number_B, cate);
					});
		        }, 
		        failure: function(err) {
		            console.log(err);
		        }
		    }); 	
        }, 
        failure: function(err) {
            console.log(err);
        }
    });
}

function if_applied(t_str, s_str){
	t_str = t_str.split(',');
	for(var i = 0;i < t_str.length;i ++){
		if(t_str[i] == s_str){
			return i;
		}
	}
	return -1;
}

function display_applying(test, number_A, number_B, categories){
	question_array = [];

	var questionA_temp_array = [];
	var questionB_temp_array = [];
	var questionA_array;
	var questionB_array;
	categories = "" + categories;

	$.ajax({
		    url: '../Question/getQuestion',
		    type: 'post',
		    data: {
	    },
	    success: function(res) {
	    	res = JSON.parse(res);

	    	for(var i = 0; i < res.length; i ++){
	    		var temp_str = res[i].question_category_id;
	    		var temp_sub = categories.split(",");
	    		for(var j = 0; j < temp_sub.length; j ++){
	    			if (temp_sub[j] == temp_str) {
	    				if(res[i].question_type == "multi"){
	    					questionA_temp_array.push(res[i]);
	    				}
	    				else{
	    					questionB_temp_array.push(res[i]);
	    				}			
	    				break;
	    			}
	    		}
	    	}

	    	if(questionA_temp_array.length < number_A){
	    		alert("This test is not ready yet!\nPlease add Advanced questions in the database!");
	    		return;
	    	}
	    	
	    	if(questionB_temp_array.length < number_B){
	    		alert("This test is not ready yet!\nPlease add Basic(Open) questions in the database!");
	    		return;
	    	}

	    	for(let i = questionA_temp_array.length; i; i--){
	    		let j = Math.floor(Math.random() * i);
	    		[questionA_temp_array[i - 1], questionA_temp_array[j]] = [questionA_temp_array[j], questionA_temp_array[i - 1]];
	    	}

	    	for(let i = questionB_temp_array.length; i; i--){
	    		let j = Math.floor(Math.random() * i);
	    		[questionB_temp_array[i - 1], questionB_temp_array[j]] = [questionB_temp_array[j], questionB_temp_array[i - 1]];
	    	}
	    	
	    	questionA_array = questionA_temp_array.slice(0, parseInt(number_A));
	    	questionB_array = questionB_temp_array.slice(0, parseInt(number_B));

	    	var length = questionA_array.length;
	    	for(i = 0; i < number_B; i ++){
	    		questionA_array[length + i] = questionB_array[i];
	    	}

	    	for(i = 0; i < (parseInt(number_A) + parseInt(number_B)); i ++){
	    		var item = questionA_array[Math.floor(Math.random()*questionA_array.length)];
	    		question_array.push(item);
	    		questionA_array = questionA_array.filter(function(value, index, arr){
				    return value != item;
				});
	    	}
	    	
	    	get_data_for_progress();
	    },
	    failure: function(err) {
	        console.log(err);
	    }
	});
}
var distance = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
function get_data_for_progress(){
	
	var str = '';
	str += '<div class="panel">';
	str += '<div class="panel panel-heading">';
	str += '<div class="col-md-5 col-md-offset-2" id="time"></div>';
	str += '</div>';
	str += '<div class="panel-body"><div id="main_test"></div>';
	str += '<div class="col-md-5 col-md-offset-3" style="margin-top: 3%;"  id="buttons"><button class="btn btn-success next">Next</button></div></div>';
	$(".main-panel").html(str);

	var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
	distance = test_duration.substring(0, test_duration.length-3);
	distance = parseInt(distance) * 60;
	hours = 0;
	minutes = 0;
	seconds = 0;

	var x = setInterval(function() {
		var now = new Date().getTime();

		hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
		minutes = Math.floor((distance % (60 * 60)) / 60);
		seconds = Math.floor((distance % 60) );

		document.getElementById("time").innerHTML = hours + "h "
		+ minutes + "m " + seconds + "s ";

		if (distance <= 0) {
			clearInterval(x);
			m_flag = 0;
			check_flag = 0;
			test_index = 0;
			document.getElementById("time").innerHTML = "EXPIRED";
			console.log(test, "Mark is ", totalMark);
			updateMark();
		}
		if(m_flag == 0){
			m_flag = 1;
			display_progress();
		}
		distance --;
	}, 1000);

	$(".next").click(function(){
		var correct_ans = "";
		$.each($(".cust-row"), function(index, value){
			if($(this).children("input:nth-child(2)").prop("checked") == true){
				correct_ans += index + ",";
				check_flag = 1;
			}
		});
		correct_ans = correct_ans.substring(0, correct_ans.length - 1);

		if($(".cust-row1").children('input').val() != undefined && $(".cust-row1").children('input').val() != ""){
			correct_ans = $(".cust-row1").children('input').val();
			check_flag = 1;
		}

		if(check_flag == 0){
			alert("set answer");
			return;
		}

		if(correct_ans == question_array[test_index].question_correct_answerid){
			totalMark = totalMark + parseInt(question_array[test_index].question_correct_score);
		}

		check_flag = 0;

		if((test_index + 1) == question_array.length){
			clearInterval(x);
			m_flag = 0;
			test_index = 0;
			updateMark();
			return;
		}

		test_index ++;
		display_progress();
	}); 	
}

function display_progress(){
	switch(question_array[test_index].question_type){

		case "open":
			var Create_quiz_str2_3 = "";
			Create_quiz_str2_3 += '<div class="panel-footer">';
			Create_quiz_str2_3 += '<div class="col-md-10 col-md-offset-1">';
			Create_quiz_str2_3 += '<div class="row cust-row">';
			Create_quiz_str2_3 += '<span>' + question_array[test_index].question_text + '</span>';
			Create_quiz_str2_3 += '</div>';
			Create_quiz_str2_3 += '<div class="row cust-row1">';
			// Create_quiz_str2_3 += '<span class="col-md-1">Answer</span>';
			Create_quiz_str2_3 += '<input class="col-md-5" />';
			Create_quiz_str2_3 += '</div>';
			Create_quiz_str2_3 += '</div>';
			Create_quiz_str2_3 += '</div>';
			$("#main_test").html(Create_quiz_str2_3);
		break;
		case "basic":
			$.ajax({
		        url: '../Question/getCorrectAnswer',
		        type: 'post',
		        data: {
		        	"question_id" : question_array[test_index].question_id
		        },
		        success: function(res) {
		        	res = JSON.parse(res);
		        	var Create_quiz_str2_2 = "";
		        	Create_quiz_str2_2 += '<div class="panel-footer">';
					Create_quiz_str2_2 += '<div class="col-md-10 col-md-offset-1">';
					Create_quiz_str2_2 += '<div class="row cust-row">';
					Create_quiz_str2_2 += '<span>' + question_array[test_index].question_text + '</span>';
					Create_quiz_str2_2 += '</div>';
					for(var i = 0; i < res.length; i ++){
						Create_quiz_str2_2 += '<div class="row cust-row">';
						// Create_quiz_str2_1 += '<span class="col-md-1">Answer' + (i + 1) + '</span>';
						Create_quiz_str2_2 += '<span class="col-md-4">' + res[i].answer_test + '</span>';
						Create_quiz_str2_2 += '<input type="radio" class="col-md-1" name="answer"/>';
						Create_quiz_str2_2 += '</div>';
					}
					Create_quiz_str2_2 += '</div>';
					Create_quiz_str2_2 += '</div>';
					$("#main_test").html(Create_quiz_str2_2);
		        }, 
		        failure: function(err) {
		            console.log(err);
		        }
		    });
		break;
		case "multi":
			$.ajax({
			    url: '../Question/getCorrectAnswer',
			    type: 'post',
			    data: {
			    	"question_id" : question_array[test_index].question_id
			    },
			    success: function(res) {
			    	res = JSON.parse(res);
			    	var Create_quiz_str2_1 = "";
			    	Create_quiz_str2_1 += '<div class="panel-footer">';
					Create_quiz_str2_1 += '<div class="col-md-10 col-md-offset-1">';
					Create_quiz_str2_1 += '<div class="row cust-row">';
					Create_quiz_str2_1 += '<span>' + question_array[test_index].question_text + '</span>';
					Create_quiz_str2_1 += '</div>';
					for(var i = 0; i < res.length; i ++){
						Create_quiz_str2_1 += '<div class="row cust-row">';
						// Create_quiz_str2_1 += '<span class="col-md-1">Answer' + (i + 1) + '</span>';
						Create_quiz_str2_1 += '<span class="col-md-4">' + res[i].answer_test + '</span>';
						Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
						Create_quiz_str2_1 += '</div>';
					}
					Create_quiz_str2_1 += '</div>';
					Create_quiz_str2_1 += '</div>';
					$("#main_test").html(Create_quiz_str2_1);
			    }, 
			    failure: function(err) {
			        console.log(err);
			    }
			});
		break;
	}
}

function updateMark(){
	var val = [];
	var time = hours * 3600 + minutes * 60 + seconds;
	var temp = test_duration.substring(0, test_duration.length-3);
	temp = parseInt(temp) * 60;

	temp = temp - time;
	var temp1 = parseInt(temp/60) + "min";
	var temp2 = parseInt(temp%60) + "s";
	for(var i = 0; i < userData.length; i ++){
		if(userData[i].username == username){
			marks = userData[i].marks;
			taken_time = userData[i].taken_time;
			applied_tests = userData[i].applied_tests;
		}
	}
	console.log(userData,applied_tests);
	if(applied_tests == ""){
		val[0] = temp1 + " " + temp2;
		val[1] = test;
		val[2] = totalMark;
	}
	else{
		val[0] = taken_time + "," + temp1 + " " + temp2;
		val[1] = applied_tests + "," + test;
		val[2] = marks + "," + totalMark;	
	}

	val[3] = username;
	val[4] = password;

	$.ajax({
	    url: '../Question/updateUserData',
	    type: 'post',
	    data: {
	    	"val" : val
	    },
	    success: function(res) {
	    	onProgress = 0;
	    	totalMark = 0;
			$("#nav-ranking").click();
	    }, 
	    failure: function(err) {
	        console.log(err);
	    }
	});
}

function Rank(cur_test, cur_mark){
	var temp_test = [];
	for(var i = 0;i < userData.length;i ++){
		if(userData[i].user_type == "Student"){
			if(userData[i].applied_tests != ""){
				var temp = userData[i].applied_tests.split(",");
				var temp1 = userData[i].marks.split(",");
				for(var j = 0;j < temp.length; j ++){
					if(temp[j] == cur_test){
						temp_test.push({"test_name":temp[j], "mark":temp1[j]});
					}
				}
			}
		}
	}

	for(i = 0; i < temp_test.length; i ++){
		for(var j = 0; j <= i; j ++){
			if(parseInt(temp_test[i].mark) < parseInt(temp_test[j].mark)){
				var temp = temp_test[j];
				temp_test[j] = temp_test[i];
				temp_test[i] = temp;
			}
		}
	}

	var j = 1;
	for(i = (temp_test.length - 1); i >= 0; i --){
		if(parseInt(cur_mark) == parseInt(temp_test[i].mark)){
			return j;
		}
		j ++;
	}

	return -1;
}


function button_func(){
    $("button.btn-filter").click(function(){
        console.log("came");
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    });

    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
        }
    });
}