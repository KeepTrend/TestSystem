<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Question extends CI_Controller {
	public function index()
	{
		parent::__construct();
	}

	public function createAnswer()
	{
		$arr = $this->input->post('answer');
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->createAnswer($arr);

		echo $result;
	}

	public function createQuestion()
	{
		$arr = array(
			$this->input->post('question_text'),
			$this->input->post('score'),
			$this->input->post('question_type'),
			$this->input->post('question_category'),
			$this->input->post('correct_ans'),
			$this->input->post('attach_image_url')
		);
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->createQuestion($arr);
		
		echo $result;
	}

	public function createRel()
	{
		$arr = array(
				$this->input->post('question_id'),
				$this->input->post('answer_id')
				);
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->createRel($arr);
		echo $result;
	}

	public function updateUserData(){
		$arr = $this->input->post('val');
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->updateUserData($arr);
		echo $result;
	}

	public function getCorrectAnswer(){
		$val = $this->input->post("question_id");
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getCorrectAnswer($val);
		echo json_encode($result);
	}

	public function createTest(){
		$data1 = $this->input->post('data1');
		$data2 = $this->input->post('data2');

		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->createTesT($data1, $data2);
		echo $result;
	}

	public function createCategory(){
		$category_name = $this->input->post('category_name');
		$category_description = $this->input->post('category_description');
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->createCategory($category_name, $category_description);
		echo $result;
	}

	public function getCategory(){
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getCategory();
		echo json_encode($result);
	}

	public function getGroup(){
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getGroup();
		echo json_encode($result);
	}

	public function getTest(){
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getTest();
		echo json_encode($result);
	}

	public function getQuestion(){
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getQuestion();
		echo json_encode($result);
	}

	public function createGroup(){
		$val1 = $this->input->post('group_name');
		$val2 = $this->input->post('group_description');
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->createGroup($val1, $val2);
		echo $result;
	}

	public function getUserData(){
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getUserData();
		echo json_encode($result);
	}

	public function getAllUser(){
		$this->load->model('QuestionModel');
		$result = $this->QuestionModel->getAllUser();
		echo json_encode($result);
	}

	public function deleteQuestion(){
		$this->load->model('QuestionModel');
		$question_id = $this->input->post('question_id');
		$result = $this->QuestionModel->deleteQuestion($question_id);
		echo json_encode($result);
	}

	public function deleteAnswer(){
		$this->load->model('QuestionModel');
		$ans_id = $this->input->post('answer');
		$result = $this->QuestionModel->deleteAnswer($ans_id);
		echo $result;
	}

	public function deleteTest(){
		$this->load->model('QuestionModel');
		$test_id = $this->input->post('test_id');
		$result = $this->QuestionModel->deleteTest($test_id);
		echo $result;
	}
}