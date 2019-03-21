<?php
	class UserDAO {

		public static function authenticate($username, $password) {
			$visibility = 0;

			if ($username == "john" && $password == "qwerty") {
				$visibility = 1;
			}

			return $visibility;
		}

		public static function getProfile($username) {
			$info = "";

			if ($username == "john") {
				$info = "info@john.com";
			}

			return $info;
		}
	}