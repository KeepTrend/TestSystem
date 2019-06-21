<?php
class QuestionModel extends CI_Model{
	public function __construct() {
		parent::__construct();

		$this->db = $this->load->database('default',true);
	}
	
	public function index(){

	}
	public function createAnswer($arr){
		// $sql = "SELECT * FROM tbl_user WHERE username='".$arr["username"]."' AND password='".$arr["password"]."'";
		// $result = $this->db->query($sql);
		// if($result->num_rows() > 0)
		// 	return 0;
		$sql = "INSERT INTO tbl_answer (answer_test) VALUES ('".$arr."')";
		$result = $this->db->query($sql);

		$sql = "SELECT * FROM tbl_answer ORDER BY answer_id DESC LIMIT 1";
		$result = $this->db->query($sql);
		foreach ($result->result() as $row)
		{
		   return $row->answer_id;
		}
	}
	
	public function createQuestion($arr){
		$sql = "INSERT INTO tbl_question (question_text, question_correct_score, question_type, question_category_id, question_correct_answerid, attach_image) VALUES ('".$arr[0]."','".$arr[1]."','".$arr[2]."','".$arr[3]."','".$arr[4]."','".$arr[5]."')";
		$result = $this->db->query($sql);

		$sql = "SELECT * FROM tbl_question ORDER BY question_id DESC LIMIT 1";
		$result = $this->db->query($sql);
		foreach ($result->result() as $row)
		{
		   return $row->question_id;
		}
	}

	public function updateUserData($arr){
		$sql = "UPDATE tbl_user SET applied_tests='".$arr[1]."', taken_time='".$arr[0]."', marks='".$arr[2]."' WHERE username='".$arr[3]."'";
		$result = $this->db->query($sql);
		return $result;
	}

	public function createRel($arr){
		foreach ($arr[1] as $val) {
			$sql = "INSERT INTO tbl_rel_question_answer (qid, ansid) VALUES ('".$arr[0]."','".$val."')";
			$result = $this->db->query($sql);
		}
		return $result;
	}

	public function createTest($data, $data1){
		$sql = "INSERT INTO tbl_test (test_name, test_group, test_duration, test_numberB, test_numberA, test_available_from, test_available_to, categories) VALUES ('".$data[0]."','".$data[1]."','".$data[2]."','".$data[3]."','".$data[4]."','".$data[5]."','".$data[6]."','".$data1."')";
		$result = $this->db->query($sql);
		return $result;
	}

	public function createCategory($category_name, $category_description){
		$sql = "INSERT INTO tbl_category (category_name, category_description) VALUES ('".$category_name."','".$category_description."')";
		$result = $this->db->query($sql);
		return $result;
	}

	public function createGroup($val1, $val2){
		$sql = "INSERT INTO tbl_group (group_name, group_description) VALUES ('".$val1."','".$val2."')";
		$result = $this->db->query($sql);
		return $result;
	}

	public function getCategory(){
		$sql = "SELECT * FROM tbl_category";
		$result = $this->db->query($sql);
		return $result->result_array();
	}

	public function getQuestion(){
		$sql = "SELECT * FROM tbl_question LEFT JOIN tbl_category ON tbl_question.question_category_id=tbl_category.category_id";
		$result = $this->db->query($sql);
		return $result->result_array();
	}

	public function getCorrectAnswer($val){
		$sql = "SELECT * FROM (SELECT * FROM (SELECT * FROM tbl_question WHERE question_id = ".$val.") as a LEFT JOIN tbl_rel_question_answer ON a.question_id=tbl_rel_question_answer.qid) as b LEFT JOIN tbl_answer ON b.ansid=tbl_answer.answer_id";
		$result = $this->db->query($sql);
		return $result->result_array();
	}

	public function getTest(){
		$sql = "SELECT tbl_test.id, tbl_test.test_name, tbl_test.test_duration, tbl_test.test_numberB, tbl_test.test_numberA, tbl_test.test_available_from, tbl_test.test_available_to, tbl_test.categories, tbl_group.group_name, tbl_test.test_group FROM tbl_test LEFT JOIN tbl_group ON tbl_test.test_group = tbl_group.group_id";
		$result = $this->db->query($sql);
		return $result->result_array();;
	}

	public function getGroup(){
		$sql = "SELECT * FROM tbl_group";
		$result = $this->db->query($sql);
		return $result->result_array();
	}

	public function getUserData(){
		$sql = "SELECT * FROM tbl_user WHERE username='".$this->session->userdata('username')."'";
		$result = $this->db->query($sql);
		return $result->result();
	}

	public function getAllUser(){
		$sql = "SELECT * FROM tbl_user";
		$result = $this->db->query($sql);
		return $result->result();
	}

	public function deleteQuestion($question_id){
		$sql = "DELETE FROM tbl_question WHERE question_id='".$question_id."'";
		$this->db->query($sql);
		$sql = "SELECT * FROM tbl_rel_question_answer WHERE qid='".$question_id."'";
		$result = $this->db->query($sql);
		$sql = "DELETE FROM tbl_rel_question_answer WHERE qid='".$question_id."'";
		$this->db->query($sql);
		return $result->result();
	}

	public function deleteAnswer($ans){
		foreach ($ans as $value) {
		    $sql = "DELETE FROM tbl_answer WHERE answer_id='".$value."'";
			$result = $this->db->query($sql);
		}
		return 1;
	}

	public function deleteTest($test_id){
		$sql = "DELETE FROM tbl_test WHERE id='".$test_id."'";
		$result = $this->db->query($sql);
		return "sucess";
	}
}