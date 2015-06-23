<div class="container startscherm">
    <img class="logostart" src="./img/logo-start.png" alt="logo" height="auto" width="70%">
    <img class="loading" src="./img/loading.gif" alt="loading" height="auto" width="20%">

    <div class="deviceready startloader">

        <form name="login" class="mainform">
            <img src="./img/icons/formicons/loginicon.png" class="icoon gebruiker">
            <input id="inloggenbruiker" type="text" name="login" value="jasper@hotmail.com" placeholder="Gebruikersnaam/E-mail adres">
            <img src="./img/icons/formicons/passwordlogin.png" class="icoon wachtwoord">
            <input id="inloggenwachtwoord" type="password" name="password" value="1234" placeholder="Wachtwoord">

            <!--<a class="padded-for-cell bottom" href="#!inloggenloading"><input class="submit" type="submit" value="Login"></a>-->
        </form>

        <button id="inloggenknop" onclick='inloggen();' class="padded-for-cell bottom" href="#">Login</button>

        <!--<a class="padded-for-cell" href="#!login">Login</a>-->

        <p class="white">Nog geen account? <a class="white underline" href="#!registreer">Registreer hier!</a></p>
    </div>
</div>