<?php
	class UserDAO {

		public static function authenticate($username, $password) {
			$visibility = 0;

			if ($username == "test" && $password == "test") {
				$visibility = 1;
			}

			return $visibility;
		}

		public static function getProfile($username) {
			$info = "";

			if ($username == "test") {
				$info = "test@test.com";
			}

			return $info;
		}
	}