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

    <nav class="sidenav">
        <div class="searchselecteren">

            <a href="#" class="btn-action pull-left categoriebutton"><img src="./img/icons/icon-sidenavigation.png" alt="logo" height="40px"></a>

            <form>
                <img src="img/icons/formicons/searchicon.png" class="icoon search">
                <input type="text" id="Search" placeholder="Vul hier je zoekfunctie in">
                <a style="float: right; text-decoration: underline; margin-bottom: 5px" id="Zoeken" href="#!searchresultaat/zoeken">Zoeken</a>
            </form>

        </div>

        <div class="categorieselecteren">

            <h2>Of zoek op categorie:</h2>
            <hr>
            <img src="img/icons/sidenavicons/sporticon.png" class="icoon side sport">
            <a id="Sport" href="#!categoriezoeken/sport" data-param="sport">Sport</a>
            <hr>
            <img src="img/icons/sidenavicons/uitstapjesicon.png" class="icoon side uitstapjes">
            <a id="Uitstapjes" href="#!categoriezoeken/uitstapjes"data-param="uitstapjes">Uitstapjes</a>
            <hr>
            <img src="img/icons/sidenavicons/kokenicon.png" class="icoon side koken">
            <a id="Koken" href="#!categoriezoeken/koken">Koken</a>
            <hr>
            <img src="img/icons/sidenavicons/shoppenicon.png" class="icoon side shoppen">
            <a id="Shoppen" href="#!categoriezoeken/shoppen">Shoppen</a>
            <hr>
            <img src="img/icons/sidenavicons/musicicon.png" class="icoon side muziek">
            <a id="Muziek" href="#!categoriezoeken/muziek">Muziek maken</a>
            <hr>
            <img src="img/icons/sidenavicons/kunsticon.png" class="icoon side kunst">
            <a id="Kunst" href="#!categoriezoeken/kunst">Kunst</a>
            <hr>
            <img src="img/icons/sidenavicons/looksicon.png" class="icoon side uiterlijk">
            <a id="Uiterlijk" href="#!categoriezoeken/uiterlijk">Uiterlijk</a>
            <hr>
            <img src="img/icons/sidenavicons/eventsicon.png" class="icoon side evenementen">
            <a id="Evenementen" href="#!categoriezoeken/evenementen">Evenementen</a>
        </div>
    </nav>
    <div class="overlay"></div>

        <!--All our pages, javascript is found in plugincode.js-->
        <!--Switching pages is done by navigation.js-->
        <div class="app-page start" id="welkomscherm"></div>
        <div class="app-page" id="login"></div>
        <div class="app-page" id="registreer"></div>

        <!--After loggin in or register-->
        <div class="app-page" id="inloggenloading"></div>
        <div class="app-page" id="categoriezoeken"></div>
        <div class="app-page" id="searchresultaat"></div>
        <div class="app-page" id="todo"></div>
        <div class="app-page" id="done"></div>
        <div class="app-page" id="social"></div>

    <!--Footer-->
    <div class="iconsbottom">
        <a id="toppers" href="#!inloggenloading"><div class="icon"><img src="./img/icons/icon-top.png" width="80%"><p>Toppers</p></div></a>
        <a id="todolist" href="#!todo"><div class="icon grey"><img src="./img/icons/icon-todo.png" width="80%"><p>To do</p></div></a>
        <a id="alreadydone" href="#!done"><div class="icon grey"><img src="./img/icons/icon-done.png" width="80%"><p>Done</p></div></a>
        <a id="settings" href="#!settings"><div class="icon grey"><img src="./img/icons/icon-settings.png" width="80%"><p>Settings</p></div></a>
    </div>

    <!--Connect to all the Javascript Files-->
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
    <script type="text/javascript" src="js/phonon/support.js"></script>
    <script type="text/javascript" src="js/phonon/navigator.js"></script>
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript">
        app.initialize();

        $(".fancybox").fancybox();
        $(".various").fancybox({
            maxWidth	: 1100,
            maxHeight	: 2000,
            fitToView	: false,
            width		: '100%',
            height		: '100%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        });

    </script>

    </body>
</html>
