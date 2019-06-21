var attach_image_url = "";

var Create_quiz_str2_1 = "";
Create_quiz_str2_1 += '<div class="col-md-10 col-md-offset-1">';
Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option1</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2 question_input2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';

Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option2</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2 question_input2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';

Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option3</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2 question_input2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option4</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2 question_input2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<div class="col-md-offset-1 col-md-1">';
Create_quiz_str2_1 += '<button id="btn_quiz_finish" type="button" class="btn btn-success" style="text-align: center;">Finish</button>';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '<div class="col-md-1">';
Create_quiz_str2_1 += '<button id="btn_quiz_cancel" type="button" class="btn btn-danger" style="text-align: center;">Cancel</button>';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '</div>';

var Create_quiz_str2_2 = "";
Create_quiz_str2_2 += '<div class="col-md-10 col-md-offset-1">';
Create_quiz_str2_2 += '<div class="row cust-row">';
Create_quiz_str2_2 += '<span class="col-md-1">Option1</span>';
Create_quiz_str2_2 += '<input type="text" class="col-md-2 question_input3"/>';
Create_quiz_str2_2 += '<input type="radio" class="col-md-1" name="answer" checked/>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '<div class="row cust-row">';
Create_quiz_str2_2 += '<span class="col-md-1">Option2</span>';
Create_quiz_str2_2 += '<input type="text" class="col-md-2 question_input3"/>';
Create_quiz_str2_2 += '<input type="radio" class="col-md-1" name="answer" />';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '<div class="row cust-row">';
Create_quiz_str2_2 += '<div class="col-md-offset-1 col-md-1">';
Create_quiz_str2_2 += '<button id="btn_quiz_finish" type="button" class="btn btn-success" style="text-align: center;">Finish</button>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '<div class="col-md-1">';
Create_quiz_str2_2 += '<button id="btn_quiz_cancel" type="button" class="btn btn-danger" style="text-align: center;">Cancel</button>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '</div>';


var Create_quiz_str2_3 = "";
Create_quiz_str2_3 += '<div class="col-md-10 col-md-offset-1">';
Create_quiz_str2_3 += '<div class="row cust-row">';
Create_quiz_str2_3 += '<span class="col-md-1">Answer</span>';
Create_quiz_str2_3 += '<input type="text" class="col-md-2 question_input4"/>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '<div class="row cust-row">';
Create_quiz_str2_3 += '<div class="col-md-offset-1 col-md-1">';
Create_quiz_str2_3 += '<button id="btn_quiz_finish" type="button" class="btn btn-success" style="text-align: center;">Finish</button>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '<div class="col-md-1">';
Create_quiz_str2_3 += '<button id="btn_quiz_cancel" type="button" class="btn btn-danger" style="text-align: center;">Cancel</button>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '</div>';


var question_text;
var score;
var question_type;
var question_category;

var arr = [];
var correct_ans = "";
var flag = 0;
var count = 0;

$(document).ready(function(){
	display_homePage();

	$("#nav-home").click(function(){
		display_homePage();
	});

	$("#nav-quiz").click(function(){
		var main_str = "";
		main_str += '<div class="row col-md-10 col-md-offset-1">';
		main_str += '<div class="panel panel-primary filterable">';
		main_str += '<div class="panel-heading">';
		main_str += '<h3 class="panel-title">Questions</h3>';
		main_str += '<div class="pull-right">';
		main_str += '<button class="btn btn-default btn-xs btn-success" id="btn_new_quiz" style="margin-right: 20px;">New Question</button>';
		main_str += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
		main_str += '</div>';
		main_str += '</div>';
		main_str += '<table class="table">';
		main_str += '<thead>';
		main_str += '<tr class="filters">';
		main_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
		main_str += '<th><input type="text" class="form-control" placeholder="Question" disabled></th>';
		main_str += '<th><input type="text" class="form-control" placeholder="Score" disabled></th>';
		main_str += '<th><input type="text" class="form-control" placeholder="Type" disabled></th>';
		main_str += '<th><input type="text" class="form-control" placeholder="Category" disabled></th>';
		main_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
		// main_str += '<th><b>Categories</b><i class="fa fa-fw fa-sort"></i></th>';
		main_str += '</tr>';
		main_str += '</thead>';

		main_str += '<tbody">';
		$.ajax({
	        url: '../Question/getQuestion',
	        type: 'post',
	        data: {
	        },
	        success: function(res) {
	        	res = JSON.parse(res);
	        	for(var i = 0; i < res.length; i ++){
	        		main_str += '<tr>';
					main_str += '<td>' + (i + 1) + '</span></td>';
					main_str += '<td>' + res[i].question_text + '</span></td>';
					main_str += '<td>' + res[i].question_correct_score + '</span></td>';
					main_str += '<td>' + res[i].question_type.toUpperCase() + '</span></td>';
					main_str += '<td>' + res[i].category_name + '</span></td>';
					main_str += '<td><button class="btn btn-primary btn-delete-quiz" id="' + res[i].question_id + '">Delete</button></td>';
					main_str += '</tr>';
	        	}			
				main_str += '</tbody>';
				main_str += '</table>';
				main_str += '</div>';
				main_str += '</div>';
				$(".main-panel").html(main_str);

				button_func();

				$(".btn-delete-quiz").click(function(){
					$(this).parent().parent().remove();
					$.ajax({
				        url: '../Question/deleteQuestion',
				        type: 'post',
				        data: {
				            'question_id' : $(this).attr('id')
				        },
				        success: function(res) {
				        	res = JSON.parse(res);
				        	var ans = [];
				        	for(var i = 0;i < res.length; i ++){
				        		ans.push(res[i].ansid);
				        	}
				        	if(ans.length > 0){
					        	$.ajax({
							        url: '../Question/deleteAnswer',
							        type: 'post',
							        data: {
							            'answer' : ans
							        },
							        success: function(res) {
							        	console.log(res);
							        }, 
							        failure: function(err) {
							            console.log(err);
							        }
							    });
				        	}
				        	// $("#nav-quiz").click();
				        }, 
				        failure: function(err) {
				            // $(this).parent().parent().remove();
				        }
				    });
				});

				$("#btn_new_quiz").click(function(){
					var Create_quiz_str1 = "";
					Create_quiz_str1 += '<div class="col-md-10 col-md-offset-1" >';
					Create_quiz_str1 += '<div class="row">';
					Create_quiz_str1 += '<h3>Submit a new Question</h3>';
					Create_quiz_str1 += '</div>';

					Create_quiz_str1 += '<div class="row cust-row">';
					Create_quiz_str1 += '<span class="col-md-2">Question Test</span>';
					Create_quiz_str1 += '<input type="text" class="col-md-2 question_input1" id="question_text"/>';
					Create_quiz_str1 += '</div>';

					Create_quiz_str1 += '<div class="row cust-row">';
					Create_quiz_str1 += '<span class="col-md-2">Score for correct answer</span>';
					Create_quiz_str1 += '<input type="number" min="1" max="5" class="col-md-2 question_input1" id="score"/>';
					Create_quiz_str1 += '</div>';

					Create_quiz_str1 += '<div class="row cust-row">';
					Create_quiz_str1 += '<span class="col-md-2">Question Type</span>';
					Create_quiz_str1 += '<select class="col-md-2" id="question_type" id="question_type">';
					Create_quiz_str1 += '<option value="multi">Multiple-choice question</option>';
					Create_quiz_str1 += '<option value="basic">Basic question</option>';
					Create_quiz_str1 += '<option value="open">Open question(Basic)</option>';
					Create_quiz_str1 += '</select>';
					Create_quiz_str1 += '</div>';


					$.ajax({
			            url: '../Question/getCategory',
			            type: 'post',
			            data: {
			            },
			            success: function(res) {
			            	res = JSON.parse(res);

							Create_quiz_str1 += '<div class="row cust-row">';
							Create_quiz_str1 += '<span class="col-md-2">Question Category</span>';
							Create_quiz_str1 += '<select class="col-md-2" id="question_category">';
							for(var i = 0; i < res.length; i ++){
								Create_quiz_str1 += '<option value="' + res[i].category_id + '">' + res[i].category_name + '</option>';
							}
							
							Create_quiz_str1 += '</select>';
							Create_quiz_str1 += '</div>';

							Create_quiz_str1 += '<div class="row cust-row">';
							Create_quiz_str1 += '<form id="upload_form" enctype="multipart/form-data">';
							Create_quiz_str1 += '<img id="preview" src="http://placehold.it/180" style="max-width: 200px;">';
							Create_quiz_str1 += '<input id="preview_input" type="file" name="profile_image" onchange="readURL(this);" style="display: none;"/>';
							Create_quiz_str1 += '</form>';
							Create_quiz_str1 += '</div>';

							Create_quiz_str1 += '<div class="row cust-row1">';
							Create_quiz_str1 += '<div class="col-md-offset-1 col-md-3" style="margin-top: 20px;">';
							Create_quiz_str1 += '<button id="btn_quiz_next" type="button" class="btn btn-success" style="text-align: center; margin-right: 20px;">Next</button>';
							Create_quiz_str1 += '<button type="button" class="btn btn-danger" id="btn_quiz_cancel" style="text-align: center;">Cancel</button>';
							Create_quiz_str1 += '</div>';
							Create_quiz_str1 += '</div>';

							$(".main-panel").html(Create_quiz_str1);

							$("#btn_quiz_cancel").click(function(){
								$("#nav-quiz").click();
							});

							$("#preview").click(function(){
								$("#preview_input").click();
							});

							$(".question_input1").focus(function(){
								$(this).removeClass('alert_input');
							});

							$("#btn_quiz_next").click(function(){
								var in_flag = 0;
								var temp = $(".question_input1");
								temp.each(function(){
									if($(this).val() == ""){
										$(this).addClass('alert_input');
										in_flag = 1;
									}
								});
								if(in_flag == 1){
									return;	
								}
								question_text = $("#question_text").val();
								score = $("#score").val();
								question_type = $("#question_type").val();
								question_category = $("#question_category").val();

								var formData = new FormData($("#upload_form")[0]);
								formData.append('filename', question_text);

								var temp_quiz = "";
								if($("#question_type").val() == "multi"){
									$(".main-panel").html(Create_quiz_str2_1);
									temp_quiz = $(".question_input2");
									count = 4;
								}
								else if($("#question_type").val() == "basic"){
									$(".main-panel").html(Create_quiz_str2_2);
									temp_quiz = $(".question_input3");
									count = 2;
								}
								else{
									$(".main-panel").html(Create_quiz_str2_3);
									temp_quiz = $(".question_input4");
									count = 0;
								}

								arr = [];
								correct_ans = "";
								flag = 0;

								$(".question_input2").focus(function(){
									$(this).removeClass('alert_input');
								});

								$(".question_input3").focus(function(){
									$(this).removeClass('alert_input');
								});

								$(".question_input4").focus(function(){
									$(this).removeClass('alert_input');
								});
								$("#btn_quiz_finish").click(function(){
									var in_flag1 = 0;
									temp_quiz.each(function(){
										if($(this).val() == ""){
											$(this).addClass('alert_input');
											in_flag1 = 1;
										}
									});
									if(in_flag1 == 1){
										return;	
									}

									$.ajax({
							            url: '../Upload_Controller/do_upload',
							            type: 'post',
							            data: formData,
							            processData: false,
							            contentType: false,
							            success: function(res) {
							            	attach_image_url = res.success;

							            	if(count == 0){
							            		$.ajax({
											        url: '../Question/createQuestion',
											        type: 'post',
											        data: {
											            'question_text' : question_text,
											            'score' : score,
											            'question_type' : question_type,
											            'question_category' : question_category,
											            'correct_ans' : $('.cust-row').children('input').val(),
											            'attach_image_url' : attach_image_url
											        },
											        success: function(res) {
											        	$("#nav-quiz").click();
											        }, 
											        failure: function(err) {
											            console.log(err);
											        }
											    });
											}
											else{
												$.each($(".cust-row"), function(index, value){
													if($(this).children("input:nth-child(3)").prop("checked") == true){
														correct_ans += (index + 1) + ",";
													}
													$.ajax({
											            url: '../Question/createAnswer',
											            type: 'post',
											            data: {
											                'answer' : $(this).children("input:nth-child(2)").val()
											            },
											            success: function(res) {
											            	flag ++;
											            	arr.push(res);

											                if(flag == count){
											                	func_create_quiz();
											                	$("#nav-quiz").click();
											                }
											            }, 
											            failure: function(err) {
											                console.log(err);
											            }
											        });
												});
											}
							            }, 
							            failure: function(err) {
							                console.log(err);
							            }
							        });
								});

								$("#btn_quiz_cancel").click(function(){
									$("#nav-quiz").click();
								});
							});
			            }, 
			            failure: function(err) {
			                console.log(err);
			            }
			        });
				});
	        }, 
	        failure: function(err) {
	            console.log(err);
	        }
	    });
		
	});

	$("#nav-category").click(function(){
		$.ajax({
            url: '../Question/getCategory',
            type: 'post',
            data: {
            },
            success: function(res) {
            	res = JSON.parse(res);
            	var CategoryStr = "";
				CategoryStr += '<div class="row col-md-10 col-md-offset-1">';
				CategoryStr += '<div class="panel panel-primary filterable">';
				CategoryStr += '<div class="panel-heading">';
				CategoryStr += '<h3 class="panel-title">Groups</h3>';
				CategoryStr += '<div class="pull-right">';
				CategoryStr += '<button class="btn btn-default btn-xs btn-success" style="margin-right: 20px;"  data-toggle="modal" data-target="#categoryModal">New Category</button>';
				CategoryStr += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
				CategoryStr += '</div>';
				CategoryStr += '</div>';
				CategoryStr += '<table class="table">';
				CategoryStr += '<thead>';
				CategoryStr += '<tr class="filters">';
				CategoryStr += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
				CategoryStr += '<th><input type="text" class="form-control" placeholder="Category Name" disabled>';
				CategoryStr += '<th><input type="text" class="form-control" placeholder="Category Description" disabled>';
				CategoryStr += '</tr>';
				CategoryStr += '</thead>';

				CategoryStr += '<tbody>';
				
            	for(var i = 0;i < res.length; i ++){
            		CategoryStr += '<tr>';
					CategoryStr += '<td>' + (i + 1) + '</td>';
					CategoryStr += '<td>' + res[i].category_name + '</td>';
					CategoryStr += '<td>' + res[i].category_description + '</td>';
					CategoryStr += '</tr>';
            	}

            	CategoryStr += '</tbody>';
				CategoryStr += '</table>';
				CategoryStr += '</div>';
				CategoryStr += '</div>';

				$(".main-panel").html(CategoryStr);

				button_func();
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
	});

	$("#nav-group").click(function(){
		$.ajax({
            url: '../Question/getGroup',
            type: 'post',
            data: {
            },
            success: function(res) {
            	res = JSON.parse(res);

            	var GroupStr = "";
            	GroupStr += '<div class="row col-md-10 col-md-offset-1">';
				GroupStr += '<div class="panel panel-primary filterable">';
				GroupStr += '<div class="panel-heading">';
				GroupStr += '<h3 class="panel-title">Groups</h3>';
				GroupStr += '<div class="pull-right">';
				GroupStr += '<button class="btn btn-default btn-xs btn-success" style="margin-right: 20px;"  data-toggle="modal" data-target="#groupModal">New Group</button>';
				GroupStr += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
				GroupStr += '</div>';
				GroupStr += '</div>';
				GroupStr += '<table class="table">';
				GroupStr += '<thead>';
				GroupStr += '<tr class="filters">';
				GroupStr += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
				GroupStr += '<th><input type="text" class="form-control" placeholder="Group Name" disabled>';
				GroupStr += '<th><input type="text" class="form-control" placeholder="Group Description" disabled>';
				GroupStr += '</tr>';
				GroupStr += '</thead>';

				GroupStr += '<tbody>';
				
            	for(var i = 0;i < res.length; i ++){
            		GroupStr += '<tr>';
					GroupStr += '<td>' + (i + 1) + '</td>';
					GroupStr += '<td>' + res[i].group_name + '</td>';
					GroupStr += '<td>' + res[i].group_description + '</td>';
					GroupStr += '</tr>';
            	}
            	GroupStr += '</tbody>';
				GroupStr += '</table>';
				
				GroupStr += '</div>';

				$(".main-panel").html(GroupStr);

				button_func();
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
	});

	$("input.group").focus(function(){
		$(this).removeClass('alert_input');
	});

	$("#btn_group_success").click(function(){
		var in_flag = 0;
		var temp = $("input.group");
		temp.each(function(){
			if($(this).val() == ""){
				$(this).addClass('alert_input');
				in_flag = 1;
			}
		});
		if(in_flag == 1){
			return;	
		}

		$.ajax({
	        url: '../Question/createGroup',
	        type: 'post',
	        data: {
	            'group_name' : $("#group_name").val(),
	            'group_description' : $("#group_description").children().eq(1).val()
	        },
	        success: function(res) {
	        	$("#nav-group").click();
	        }, 
	        failure: function(err) {
	            console.log(err);
	        }
	    });
	});

	$("input.category").focus(function(){
		$(this).removeClass('alert_input');
	});

	$("#btn_category_success").click(function(){
		var in_flag = 0;
		var temp = $("input.category");
		temp.each(function(){
			if($(this).val() == ""){
				$(this).addClass('alert_input');
				in_flag = 1;
			}
		});
		if(in_flag == 1){
			return;	
		}

		$.ajax({
            url: '../Question/createCategory',
            type: 'post',
            data: {
                'category_name' : $("#category_name").children().eq(0).val(),
                'category_description' : $("#category_description").val()
            },
            success: function(res) {
            	$("#nav-category").click();
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
	});
});

function func_create_quiz(){
	var question_id = 0;
	correct_ans = correct_ans.substring(0, correct_ans.length - 1);
	$.ajax({
        url: '../Question/createQuestion',
        type: 'post',
        data: {
            'question_text' : question_text,
            'score' : score,
            'question_type' : question_type,
            'question_category' : question_category,
            'correct_ans' : correct_ans,
            'attach_image_url' : attach_image_url
        },
        success: function(res) {
            question_id = res;

            $.ajax({
		        url: '../Question/createRel',
		        type: 'post',
		        data: {
		            'question_id' : question_id,
		            'answer_id' : arr
		        },
		        success: function(res) {
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

function display_homePage(){
	var main_str = "";
	main_str += '<div class="row col-md-10 col-md-offset-1">';
	main_str += '<div class="panel panel-primary filterable">';
	main_str += '<div class="panel-heading">';
	main_str += '<h3 class="panel-title">Tests</h3>';
	main_str += '<div class="pull-right">';
	main_str += '<button class="btn btn-default btn-xs btn-success" id="nav-test" style="margin-right: 20px;">New Test</button>';
	main_str += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
	main_str += '</div>';
	main_str += '</div>';
	main_str += '<table class="table">';
	main_str += '<thead>';
	main_str += '<tr class="filters">';
	main_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
	main_str += '<th><input type="text" class="form-control" placeholder="Test" disabled></th>';
	main_str += '<th><input type="text" class="form-control" placeholder="Duration" disabled></th>';
	main_str += '<th><input type="text" class="form-control" placeholder="Advanced questions" disabled></th>';
	main_str += '<th><input type="text" class="form-control" placeholder="Basic questions" disabled></th>';
	main_str += '<th><input type="text" class="form-control" placeholder="Group" disabled></th>';
	main_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
	// main_str += '<th><b>Categories</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '</tr>';
	main_str += '</thead>';

	main_str += '<tbody>';
	$.ajax({
        url: '../Question/getTest',
        type: 'post',
        data: {
        },
        success: function(res) {
        	res = JSON.parse(res);

        	for(var i = 0; i < res.length; i ++){
        		main_str += '<tr>';
				main_str += '<td>' + (i + 1) + '</td>';
				main_str += '<td>' + res[i].test_name + '</td>';
				main_str += '<td>' + res[i].test_duration + '</td>';
				main_str += '<td>' + res[i].test_numberA + '</td>';
				main_str += '<td>' + res[i].test_numberB + '</td>';
				main_str += '<td>' + res[i].group_name + '</td>';
				main_str += '<td><button data-id="' + res[i].test_name + '" class="btn btn-primary btn-see-result" style="margin-right: 5px;">Result</button>';
				main_str += '<button data-id="' + res[i].id + '" class="btn btn-danger btn-delete-test">Delete</button>';
				main_str += '</td>';
				// main_str += '<td><span>' + res[i].categories + '</span></td>';
				main_str += '</tr>';
        	}			
			main_str += '</tbody>';
			main_str += '</table>';
			main_str += '</div>';
			main_str += '</div>';

			$(".main-panel").html(main_str);

			button_func();
			create_Test();

			$(".btn-see-result").click(function(){
				var test = $(this).data('id');
				$.ajax({
				    url: '../Question/getAllUser',
				    type: 'post',
				    data: {
				    },
				    success: function(res) {
				    	var result = [];
				    	res = JSON.parse(res);
				    	for(var i = 0; i < res.length; i ++){
				    		var temp_tests = res[i].applied_tests.split(",");
				    		var temp_marks = res[i].marks.split(",");
				    		var temp_time = res[i].taken_time.split(",");
				    		if(temp_tests.length > 0){
				    			for(var j = 0; j < temp_tests.length; j ++){
				    				if(temp_tests[j] == test){
				    					var temp_arr = {"username" : res[i].username, "mark" : temp_marks[j], "time": temp_time[j]};
				    					result.push(temp_arr);
				    				}
				    			}
				    		}
				    	}

				    	var temp_str = "";
				    	temp_str += '<div class="row" style="width: 80%; margin: auto;">';
						temp_str += '<div class="panel panel-primary filterable">';
						temp_str += '<div class="panel-heading">';
				    	temp_str += '<h3 class="panel-title">Result</h3>';
						temp_str += '<div class="pull-right">';
						temp_str += '<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>';
						temp_str += '</div>';
						temp_str += '</div>';
						temp_str += '<table class="table" style="text-align: left !important;">';
						temp_str += '<thead>';
						temp_str += '<tr class="filters">';
						temp_str += '<th><input type="text" class="form-control" placeholder="#" disabled></th>';
						temp_str += '<th><input type="text" class="form-control" placeholder="User" disabled></th>';
						temp_str += '<th><input type="text" class="form-control" placeholder="Mark" disabled></th>';
						temp_str += '<th><input type="text" class="form-control" placeholder="Time" disabled></th>';
						temp_str += '</thead>';
						temp_str += '<tbody>';
						for(i = 0; i < result.length; i ++){
							temp_str += '<tr>';
							temp_str += '<td>' + (i + 1) + '</td>';
							temp_str += '<td>' + result[i].username + '</td>';
							temp_str += '<td>' + result[i].mark + '</td>';
							temp_str += '<td>' + result[i].time + '</td>';
							temp_str += '</tr>';
						}
						temp_str += '</tbody>';
						temp_str += '</table>';
						temp_str += '</div>';
						temp_str += '</div>';
						$("#resultModalBody").html(temp_str);
						button_func();
						$("#resultModal").modal();
				    	console.log(result, "kkk");
				    }, 
				    failure: function(err) {
				        console.log(err);
				    }
				}); 
			});

			$(".btn-delete-test").click(function(){
				$(this).parent().parent().remove();
				$.ajax({
		            url: '../Question/deleteTest',
		            type: 'post',
		            data: {
		                'test_id' : $(this).data('id')
		            },
		            success: function(res) {
		            	
		            }, 
		            failure: function(err) {
		                console.log(err);
		            }
		        });
			});
        }, 
        failure: function(err) {
            console.log(err);
        }
    });
}

function make_html(html, dataid){
	var htm = "";
	htm += '<div class="panel-body" data-id="' + dataid + '">';
	htm += html;
	htm += '</div>';
	return htm;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
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

function create_Test(){
	$("#nav-test").click(function(){
		$.ajax({
            url: '../Question/getGroup',
            type: 'post',
            data: {
            },
            success: function(res) {
            	res = JSON.parse(res);
				var Create_Test = "";
				Create_Test += '<div class="col-md-11 col-md-offset-1">';
				Create_Test += '<div class="col-md-6">';
				Create_Test += '<div class="row">';
				Create_Test += '<h2>Submit a new Test</h2>';
				Create_Test += '</div>';

				Create_Test += '<div>';
				Create_Test += '<div class="col-md-12">';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Test name</span>';
				Create_Test += '<input type="text" class="col-md-5 test_input"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Select group for test</span>';
				Create_Test += '<select class="col-md-5">';

				for(var i = 0;i < res.length; i ++){
            		Create_Test += '<option value="' + res[i].group_id + '">' + res[i].group_name + '</option>';
            	}
            	
            	Create_Test += '</select>';
				Create_Test += '</div>';
				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Select duration</span>';
				Create_Test += '<select class="col-md-5">';
				Create_Test += '<option>1min</option>';
				Create_Test += '<option>1.5min</option>';
				Create_Test += '<option>2min</option>';
				Create_Test += '</select>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Number of basic questions</span>';
				Create_Test += '<input type="number" min="1" class="col-md-5 test_input"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Number of advanced questions</span>';
				Create_Test += '<input type="number" min="1" class="col-md-5 test_input"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<h4>Available Time</h4>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">From</span>';
				Create_Test += '<input type="datetime-local" class="col-md-5 test_input"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">To</span>';
				Create_Test += '<input type="datetime-local" class="col-md-5 test_input"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row" style="margin-top: 30px;">';
				Create_Test += '<div class="col-md-offset-3 col-md-1">';
				Create_Test += '<button id="btn_test_finish" type="button" class="btn btn-success" style="text-align: center;">Create</button>';
				Create_Test += '</div>';
				Create_Test += '<div class="col-md-offset-1 col-md-1">';
				Create_Test += '<button id="btn_test_cancel" type="button" class="btn btn-danger" style="text-align: center;">Cancel</button>';
				Create_Test += '</div>';  			
				Create_Test += '</div>';
				Create_Test += '</div>';
				Create_Test += '</div>';
				Create_Test += '</div>';

				Create_Test += '<div class="col-md-5">';
				Create_Test += '<div class="row" style="margin-top: 3%;">';
				Create_Test += '<h3 class="col-md-offset-3 col-md-4">Category</h3>';
				Create_Test += '</div>';

				Create_Test += '<div class="row">';
				Create_Test += '<div class="col-md-4">';
				Create_Test += '<div class="panel panel-default" id="all_categories">';
				
				$.ajax({
		            url: '../Question/getCategory',
		            type: 'post',
		            data: {
		                'answer' : $(this).children("input:nth-child(2)").val()
		            },
		            success: function(res) {
		            	res = JSON.parse(res);

		            	for(var i = 0; i < res.length; i ++){
		            		Create_Test += '<div class="panel-body" data-id="' + res[i].category_id + '">' + res[i].category_name + '</div>';
		            	}
						
						Create_Test += '</div>';
						Create_Test += '</div>';
						
						Create_Test += '<div class="col-md-1" style="text-align: center;">';
						Create_Test += '<button class="cust-row angle-left"><i class="fa fa-angle-left"></i></button>';
						Create_Test += '<button class="cust-row angle-right"><i class="fa fa-angle-right"></i></button>';
						Create_Test += '<button class="cust-row angle-double-left"><i class="fa fa-angle-double-left"></i></button>';
						Create_Test += '<button class="cust-row angle-double-right"><i class="fa fa-angle-double-right"></i></button>';				
						Create_Test += '</div>';

						Create_Test += '<div class="col-md-4">';
						Create_Test += '<div class="panel panel-default" id="sub_categories">';		
						Create_Test += '</div>';
						Create_Test += '</div>';
						Create_Test += '</div>';

						Create_Test += '</div>';
						Create_Test += '</div>';

						$(".main-panel").html(Create_Test);

						$("#btn_test_cancel").click(function(){
							$("#nav-home").click();
						});

						$(".panel-body").click(function(){
							$(".panel-body").removeClass("row-select");
							$(this).addClass("row-select");
						});

						$("button.angle-left").click(function(){
							console.log("came");
							var arr = $("#sub_categories").children("div");
							arr.each(function(){
								var temp = $(this).attr("class").split(" ");
								if(temp[1] == "row-select"){
									$("#all_categories").append(make_html($(this).html(), $(this).data('id')));
									$(this).remove();

									$(".panel-body").click(function(){
										$(".panel-body").removeClass("row-select");
										$(this).addClass("row-select");
									});
								}
							});
						});

						$("button.angle-right").click(function(){
							var arr = $("#all_categories").children("div");
							arr.each(function(){
								var temp = $(this).attr("class").split(" ");
								if(temp[1] == "row-select"){
									$("#sub_categories").append(make_html($(this).html(), $(this).data('id')));
									$(this).remove();

									$(".panel-body").click(function(){
										$(".panel-body").removeClass("row-select");
										$(this).addClass("row-select");
									});
								}
							});
						});

						$("button.angle-double-right").click(function(){
							$("#sub_categories").append($("#all_categories").html());
							$("#all_categories").html('');

							$(".panel-body").click(function(){
								$(".panel-body").removeClass("row-select");
								$(this).addClass("row-select");
							});
						});

						$("button.angle-double-left").click(function(){
							$("#all_categories").append($("#sub_categories").html());
							$("#sub_categories").html('');

							$(".panel-body").click(function(){
								$(".panel-body").removeClass("row-select");
								$(this).addClass("row-select");
							});
						});

						$(".test_input").focus(function(){
							$(this).removeClass('alert_input');
						});

						$("#btn_test_finish").click(function(){
							var temp = $(".test_input");
							var in_flag2 = 0;
							temp.each(function(){
								if($(this).val() == ""){
									$(this).addClass("alert_input");
									in_flag2 = 1;
								}
							});
							if(in_flag2 == 1){
								return;
							}

							if($("#sub_categories").html() == ""){
								alert("please select categories for the test!");
								return;
							}

							var test_ajaxVal1 = [];
							var test_ajaxVal2 = "";

							$.each($("#sub_categories").children('div'), function(){
								test_ajaxVal2 += $(this).data('id') + ",";
							});

							test_ajaxVal2 = test_ajaxVal2.substring(0, test_ajaxVal2.length - 1);

							$.each($(".cust-row"), function(index, value){
								if($(this).children().eq(1).val() != undefined){
									test_ajaxVal1.push($(this).children().eq(1).val());
								}
							});

							$.ajax({
					            url: '../Question/createTest',
					            type: 'post',
					            data: {
					                'data1' : test_ajaxVal1,
					                'data2' : test_ajaxVal2
					            },
					            success: function(res) {
					            	$("#nav-home").click();
					            }, 
					            failure: function(err) {
					                console.log(err);
					            }
					        });
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
	});
}