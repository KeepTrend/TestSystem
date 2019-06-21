<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Upload_Controller extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->helper(array('form', 'url'));
	}
	public function index()
	{
		parent::__construct();
	}

	public function do_upload(){
		header('Content-Type: application/json');
		$config['upload_path']   =	'./uploads/'; 
		$config['allowed_types'] = 'gif|jpg|png'; 
		$config['max_size']      = 1024000;
		$config['file_name'] = time().$_FILES["profile_image"]['name'];
		$this->load->library('upload', $config);

		if (!$this->upload->do_upload('profile_image')) {
            $error = array('error' => $this->upload->display_errors()); 
         	echo json_encode($error);
        } else {
			$data = $this->upload->data();
			$success = ['success'=>$data['file_name']];

			echo json_encode($success);
        }
	}
}
