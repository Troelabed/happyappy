<header class="header-bar">
    <img src="./img/logo-start.png" alt="logo" height="30px">
</header>

    <div class="container registrerencontainer">

        <form action="post" class="registreerform">



            <!--First page for the user login information-->
            <div class="startRegistreer">

                <img class="startRegistreerImage" src="./img/startImageRegistreer.jpg" width="100%">
                <div class="greenBackground"></div>

                <img src="./img/icons/formicons/loginicon.png" class="icoon gebruiker">
                <input type="text" id="gebruikersnaam" name="gebruikersnaam" required placeholder="Gebruikersnaam" value="Sophie">

                <img src="./img/icons/formicons/mailicon.png" class="icoon email">
                <input type="email" id="email" name="email" required placeholder="E-mail adres" value="sophie@hotmail.com">

                <img src="./img/icons/formicons/passwordlogin.png" class="icoon wachtwoord">
                <input type="password" id="wachtwoord" placeholder="Wachtwoord" name="wachtwoord" required value="1234">

                <img src="./img/icons/formicons/passwordlogin.png" class="icoon wachtwoord">
                <input type="password" id="wachtwoordconfirm" placeholder="Bevestig wachtwoord" name="wachtwoordconfirm" required value="1234">

                <input type="button" class="padded-for-cell bottombutton " value="Ga verder" onClick="continueform()">

            </div>

            <!--First questions: leeftijd en geslacht-->
            <div class="registreerdiv first">

                <label class="vraag leeftijd">Vraag 1: Wat is je leeftijd?</label>
                <input type="text" id="leeftijd" name="leeftijd" placeholder="Voer hier je leeftijd in!">

                <label class="vraag geslacht">Vraag 2: Wat is je geslacht?</label>
                <table class="formtable">
                    <tr><td><label><input type="radio" value="Man" class="geslacht" name="geslacht" checked><span class="styleCheckbox"></span></label></td>          <td><label class="info">Man</label></td></tr>
                    <tr><td><label><input type="radio" value="Vrouw" class="geslacht" name="geslacht"><span class="styleCheckbox"></span></label></td>                <td><label class="info">Vrouw</label></td></tr>
                </table>

                <input type="button" class="padded-for-cell bottombutton inform" value="Ga verder" onClick="secondfield()">

            </div>

            <!--Second questions: hobby's-->
            <div class="registreerdiv second">

                <label class="vraag hobbys">Vraag 3: Wat zijn je hobby's?</label>
                <table class="formtable">
                    <tr><td><label><input type="checkbox" name="categorie" value="Sport" id="sport"><span class="styleCheckbox"></span></label></td>                  <td><label class="info">Sport</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Uitstapjes" id="uitstapjes"><span class="styleCheckbox"></span></label></td>        <td><label class="info">Uitstapjes</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Koken" id="koken"><span class="styleCheckbox"></span></label></td>                  <td><label class="info">Koken</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Uitgaan" id="uitgaan"><span class="styleCheckbox"></span></label></td>              <td><label class="info">Uitgaan</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Shoppen" id="shoppen"><span class="styleCheckbox"></span></label></td>              <td><label class="info">Shoppen</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Muziek" id="muziek"><span class="styleCheckbox"></span></label></td>                <td><label class="info">Muziek maken</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Kunst" id="kunst"><span class="styleCheckbox"></span></label></td>                  <td><label class="info">Kunst</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Uiterlijk" id="uiterlijk"><span class="styleCheckbox"></span></label></td>          <td><label class="info">Uiterlijk</label></td></tr>
                    <tr><td><label><input type="checkbox" name="categorie" value="Evenementen" id="evenementen"><span class="styleCheckbox"></span></label></td>      <td><label class="info">Evenementen afgaan</label></td></tr>
                </table>

                <input type="button" class="padded-for-cell bottombutton inform" value="Ga verder" onClick="thirdfield()">
            </div>

            <!--Third questions: druk of rustig persoon-->
            <div class="registreerdiv third">

                <label class="vraag drukrustig">Vraag 4: Ben je een druk of rustig persoon?</label>
                <table class="formtable">
                    <tr><td><label><input type="radio" name="drukrustig" value="druk" id="druk" checked><span class="styleCheckbox"></span></label></td>               <td><label class="info">Druk</label></td></tr>
                    <tr><td><label><input type="radio" name="drukrustig" value="rustig" id="rustig"><span class="styleCheckbox"></span></label></td>                   <td><label class="info">Rustig</label></td></tr>
                    <tr><td><label><input type="radio" name="drukrustig" value="nietspecifiek" id="nietspecifiek"><span class="styleCheckbox"></span></label></td>     <td><label class="info">Niet specifiek</label></td></tr>
                </table>

                <input type="button" class="padded-for-cell bottombutton inform" value="Ga verder" onClick="fourthfield()()">

            </div>

            <!--Fourth questions: samen dingen doen of alleen-->
            <div class="registreerdiv fourth">

                <label class="vraag samenzijn">Vraag 5: Doe je graag dingen alleen of met mensen samen?</label>

                <table class="formtable">
                    <tr><td><label><input type="radio" value="Alleen" name="samenzijn" checked><span class="styleCheckbox"></span></label></td>                       <td><label class="info">Liever alleen</label></td></tr>
                    <tr><td><label><input type="radio" value="Soms" name="samenzijn"><span class="styleCheckbox"></span></label></td>                                 <td><label class="info">Soms alleen, soms in groepen</label></td></tr>
                    <tr><td><label><input type="radio" value="1 of 2" name="samenzijn"><span class="styleCheckbox"></span></label></td>                               <td><label class="info">Met 1 of 2 is wel leuk</label></td></tr>
                    <tr><td><label><input type="radio" value="2 tot 5" name="samenzijn"><span class="styleCheckbox"></span></label></td>                              <td><label class="info">Met een groep van 3 tot 5</label></td></tr>
                    <tr><td><label><input type="radio" value="Veel" name="samenzijn"><span class="styleCheckbox"></span></label></td>                                 <td><label class="info">Met zoveel mogelijk!</label></td></tr>
                </table>

                <input type="button" class="registreerbutton padded-for-cell inform" value="Registreer" onClick="AddValueToDB()">

                <!--<input type="button" class="registreerbutton padded-for-cell" value="Leeg maken" onClick="delete_data()">-->

            </div>

        </form>

        <div class="RegistreerFooter">

            <div class="next">
                <a href="#" onclick="firstfield()"><img id="first-field" src="./img/next.png"></a>
                <a href="#" onclick="secondfield()"><img id="second-field" class="grey" src="./img/next.png"></a>
                <a href="#" onclick="thirdfield()"><img id="third-field" class="grey" src="./img/next.png"></a>
                <a href="#" onclick="fourthfield()"><img id="fourth-field" class="grey" src="./img/next.png"></a>
            </div>

        </div>

    </div>

<!--
<span style="font-weight:bold;">Currently stored values:</span>
<table border="1" id="lbGebruikers"></table>-->