<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MemberSign extends CI_Controller {
	public function index()
	{
		$this->load->view('Login');
	}

	public function register()
	{
		$this->load->view('Register');
	}
}
