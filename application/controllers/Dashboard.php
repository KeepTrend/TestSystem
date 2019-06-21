<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {
	public function Index()
	{
		//$this->load->view('Landing/index');
	}
	public function teacher(){
		$this->load->view('Dashboard/teacher.php');
	}

	public function student(){
		$this->load->view('Dashboard/student.php');
	}
}
?>