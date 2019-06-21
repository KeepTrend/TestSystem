<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SignController extends CI_Controller {
	public function Index()
	{
		//$this->load->view('Landing/index');
		parent::__construct();
        $this->load->library('session');
	}

	public function register(){	
		$arr = array(
			"username" => $this->input->post('username'),
			"password" => $this->input->post('password'),
			"usertype" => $this->input->post('usertype')
        );

        if($arr["usertype"] == "Teacher"){
        	$arr["group"] = 0;
        }
        else{
        	$arr["group"] = $this->input->post('group');
        }
        
		$this->load->model('SignModel');
		$result = $this->SignModel->register($arr);
		if($result == 1){
			redirect(base_url());
		}
		else{
			redirect(base_url()."MemberSign");
		}
	}

	public function checkuser(){
		$arr = array(
			"username" => $this->input->post('username'),
			"password" => $this->input->post('password'),
        );
        $this->load->model('SignModel');
        $result = $this->SignModel->checkuser($arr);

        $this->session->set_userdata('username', $arr['username']);
        $this->session->set_userdata('password', $arr['password']);
        $this->session->set_userdata('usertype', $result[0]);
        $this->session->set_userdata('group', $result[1]);

        if($result === "failed"){
        	redirect(base_url());
        }
        else{
        	if($result[0] == "Teacher"){
        		redirect(base_url()."Dashboard/teacher");
        	}
        	else{
        		redirect(base_url()."Dashboard/student");
        	}
        }
        echo json_encode($result);
	}
}
?>