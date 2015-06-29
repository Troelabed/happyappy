<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />

    <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />

    <!--The Stylesheets for the application-->
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <link rel="stylesheet" type="text/css" href="css/phonon.css" />
    <link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css" />

    <!--Title of the Application-->
    <title>Shitapp</title>

    <!--Loading all the Javascript Files-->
    <script type="text/javascript" src="js/jquery-1.11.3.js"></script>

    <!--Loadfunction for Phonegap-->
    <script type="text/javascript" charset="utf-8">

    </script>

</head>

<body onLoad="onLoad();">

<div class="overzicht">

<h1>Overzicht van de gebruikers</h1>
<table border="1" id="lbGebruikers">
    <tr><td>ID:</td><td>Gebruikersnaam:</td><td>Emailadres:</td><td>Leeftijd:</td><td>Geslacht:</td><td>Categorie:</td><td>Druk of rustig:</td><td>Samen of alleen:</td><td>Wachtwoord:</td></tr>
</table>

<h1>Overzicht van de suggesties</h1>
<table border="1" id="lbSuggesties">
    <tr><td>ID:</td><td>Naam:</td><td>Korte informatie (subtitel):</td><td>Informatie over de suggestie:</td><td>Afbeeldingsnummer:</td><td>Categorie:</td><td>Status (open, checked, done, deleted):</td></tr>


</table

</div>





<!--Connect to all the Javascript Files-->
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="js/phonon/support.js"></script>
<script type="text/javascript" src="js/phonon/navigator.js"></script>
<script type="text/javascript" src="main.js"></script>

</body>
</html>
