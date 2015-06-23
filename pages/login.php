<header class="header-bar">
        <img src="./img/logo-start.png" alt="logo" height="30px">
        <a href="#!welkomscherm" class="btn-action pull-left">Vorige</a>
    </header>-->

    <div class="container">

        <div id="deviceready">

            <form name="login" class="mainform">
                <label>Gebruiksnaam/e-mail:</label>
                <input id="inloggenbruiker" type="text" name="login" value="jasper@hotmail.com" placeholder="">

                <label>Wachtwoord</label>
                <input id="inloggenwachtwoord" type="password" name="password" value="1234" placeholder="">

                <!--<a class="padded-for-cell bottom" href="#!inloggenloading"><input class="submit" type="submit" value="Login"></a>-->
            </form>

            <button id="inloggenknop" onclick='inloggen();' class="padded-for-cell bottom" href="#">Login</button>

        </div>
</div>