<!DOCTYPE html>
<html lang="fr">
    <head>
        <link href="css/global.css" rel="stylesheet" />
		<title>SIRIUS | étoile par Alexis</title>
		<meta charset="utf-8" />
    </head>
    <body>
		<div class="header">
			<div class="site-title-section">
				<h2>SIRIUS | étoile par Alexis</h2>
			</div>
			<div class="username-section">
				Bonjour, <?= $action->getUsername() ?> !
				<?php
					if ($action->isLoggedIn()) {
				?>
						<div>
							[
							<a href="logout.php">Déconnexion</a>
							]
						</div>
				<?php
					}
				?>
			</div>
			<div class="clear"></div>
			<div class="menu">
				<ul>
					<li><a href="index.php">Accueil</a></li>
					<?php
						if ($action->isLoggedIn()) {
					?>
							<li><a href="home.php">Choisir une partie</a></li>
							<li><a href="profile.php">Mon profil</a></li>
					<?php
						}
						else {
					?>
							<li><a href="login.php">Se connecter</a></li>
							<?php
						}
					?>
				</ul>
			</div>
		</div>
		<div class="container">
