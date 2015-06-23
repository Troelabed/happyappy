/**
 * Created by Sophie on 18-5-15.
 */

//Check if it is Cordova
var isCordova = typeof window.cordova !== 'undefined' ? true : false;

//Deciding what it should load
if(isCordova) {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    window.addEventListener('load', onDeviceReady, false);
}

// DATABASE: Creating the database that we need later
var db;
var shortName = 'HappyAppy';
var version = '1.0';
var displayName = 'HappyAppy';
var maxSize = 65535;


//DATABASE: Register global variables
//get the passwords to see if they are the same



// DATABASE: this is called when an error happens in a transaction
function errorHandler(transaction, error) {
    alert('Error: ' + error.message + ' code: ' + error.code);
}

// DATABASE: this is called when a successful transaction happens
function successCallBack() {
   // alert("DEBUGGING: success");
}

// DATABASE:
function nullHandler(){};


function onDeviceReady() {
    Phonon.Navigator().start('welkomscherm');                    //load the content for the indexscreen: welkomscherm.html
}


//----------------------------------------ONLOAD OF THE PAGE FOR DEVICE READY------------------------------------------
function onLoad() {

    //document.addEventListener("deviceready", onDeviceReady, true);
    $(".overlay").hide();




    //DATABASE: to see if the phone supports the database.
    if (!window.openDatabase) {
        // not all mobile devices support databases if it does not, the following will show
        alert('Databases are not supported in this browser.');
        return;
    }

    //DATABASE: Creating the database.
    db = openDatabase(shortName, version, displayName,maxSize);

    db.transaction(function(tx){

        //This line empty's the created table for Gebruiker.
        //tx.executeSql( 'DROP TABLE Gebruiker',nullHandler,nullHandler);
        tx.executeSql( 'DROP TABLE Suggesties',nullHandler,nullHandler);

        // this line actually creates the table Gebruiker if it does not exist and sets up the three columns and their types
        // note the gebruikerID column is an auto incrementing column which is useful if you want to pull back distinct rows easily from the table.
        //This is the table for the users (Gebruikers)
        tx.executeSql( '' +
            "CREATE TABLE IF NOT EXISTS Gebruiker(" +
                "'gebruikerID' INTEGER NOT NULL PRIMARY KEY, " +
                "'Gebruikersnaam' TEXT NOT NULL, " +
                "'Email' TEXT NOT NULL, " +
                "'Leeftijd' INTEGER NOT NULL, " +
                "'Geslacht' TEXT NOT NULL, " +
                "'Categorie' TEXT NOT NULL, " +
                "'DrukofRustig' TEXT NOT NULL, " +
                "'SamenofAlleen' TEXT NOT NULL, " +
                "'Wachtwoord' NOT NULL)"
            ,
            [],nullHandler,errorHandler);

        //set some basic values
        /*
        tx.executeSql( '' +
            "INSERT INTO Gebruiker  (Gebruikersnaam, Email, Leeftijd, Geslacht, Categorie, DrukofRustig, SamenofAlleen, Wachtwoord)" +
            "VALUES                 ('NinaHermens', 'nina@hallo.nl', 12, 'Vrouw', 'Shoppen Kunst Koken', 'druk', 'alleen', 'ninahermens12')"
            ,
            [],nullHandler,errorHandler);
        tx.executeSql( '' +
            "INSERT INTO Gebruiker  (Gebruikersnaam, Email, Leeftijd, Geslacht, Categorie, DrukofRustig, SamenofAlleen, Wachtwoord)" +
            "VALUES                 ('SophievanDuivenboden', 'sophie@gmail.nl', 18, 'Vrouw', 'Uitgaan Muziek Evenementen', 'nietspecifiek', 'soms', '123')"
            ,
            [],nullHandler,errorHandler);
        tx.executeSql( '' +
            "INSERT INTO Gebruiker  (Gebruikersnaam, Email, Leeftijd, Geslacht, Categorie, DrukofRustig, SamenofAlleen, Wachtwoord)" +
            "VALUES                 ('JanScherdens', 'jscherders@live.nl', 21, 'Man', 'Uiterlijk Kunst Uitstapjes', 'rustig', 'veel', '1234')"
            ,
            [],nullHandler,errorHandler);*/

        //Create the table for the suggestions
        tx.executeSql( '' +
            "CREATE TABLE IF NOT EXISTS Suggesties(" +
            "'suggestieID' INTEGER NOT NULL PRIMARY KEY, " +
            "'Naam' TEXT NOT NULL, " +
            "'KorteInfo' TEXT NOT NULL, " +
            "'Informatie' TEXT NOT NULL, " +
            "'Afbeelding' INTEGER NOT NULL, " +
            "'Categorie' TEXT NOT NULL, " +
            "'CheckDone' TEXT NOT NULL)"
            ,
            [],nullHandler,errorHandler);

        //List for all the suggestions
        /*
        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, Check)" +
            "VALUES                  (" +
                                        "'Naam', " +
                                        "'KorteInfo', " +
                                        "'Informatie', " +
                                        "'Afbeelding', " +
                                        "'Categorie', " +
                                        "'Check') "
            ,
            [],nullHandler,errorHandler);
          */

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Een', " +
            "'Hier wat korte informatie over de app. een catch zin ofzo.', " +
            "'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. ', " +
            "'01.jpg', " +
            "'Koken Muziek Uiterlijk', " +
            "'Open') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Twee', " +
            "'Hier een klein beetje info voor app twee.', " +
            "'Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.', " +
            "'02.jpg', " +
            "'Categorie Uitstapjes Shoppen', " +
            "'Selected') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Drie', " +
            "'Nog wat informatie te vertellen.', " +
            "'tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock', " +
            "'03.jpg', " +
            "'Koken Kunst Uiterlijk', " +
            "'Open') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Vier', " +
            "'Klein verhaaltje nog een keer, omdat het moet.', " +
            "'een professor latijn aan de Hampden-Sydney College in Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt', " +
            "'04.jpg', " +
            "'Uitstapjes Uiterlijk Kunst', " +
            "'Open') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Vijf', " +
            "'Blablabla korte informatie enzo.', " +
            "'Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van de Finibus Bonorum et Malorum (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, Lorem ipsum dolor sit amet.., komt uit een zin in sectie 1.10.32.', " +
            "'05.jpg', " +
            "'Koken Kunst Uiterlijk', " +
            "'Open') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Zes', " +
            "'Moeilijk om nog meer info te verzinnen.', " +
            "'Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van de Finibus Bonorum et Malorum door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.', " +
            "'06.jpg', " +
            "'Shoppen Muziek Evenementen', " +
            "'Done') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Zeven', " +
            "'Nog wat meer typen over deze suggestie.', " +
            "'Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot Hier uw tekst, hier uw tekst wat het tot min of meer leesbaar nederlands maakt.', " +
            "'07.jpg', " +
            "'Shoppen Kunst Koken', " +
            "'Open') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Acht', " +
            "'Wist ik nog maar wat te vertellen.', " +
            "'Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar lorem ipsum ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke).', " +
            "'08.jpg', " +
            "'Muziek Uitgaan Evenementen', " +
            "'Selected') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Negen', " +
            "'Gelukkig is er Lorum Ipsum voor dit.', " +
            "'Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm, door ingevoegde humor of willekeurig gekozen woorden die nog niet half geloofwaardig ogen. Als u een passage uit Lorum Ipsum gaat gebruiken dient u zich ervan te verzekeren dat er niets beschamends midden in de tekst verborgen zit.', " +
            "'09.jpg', " +
            "'Sport Kunst Evenementen', " +
            "'Done') "
            ,
            [],nullHandler,errorHandler);

        tx.executeSql( '' +
            "INSERT INTO Suggesties  (Naam, KorteInfo, Informatie, Afbeelding, Categorie, CheckDone)" +
            "VALUES                  (" +
            "'Suggestie Tien', " +
            "'Dummietekst zelf verzinnen is best lastig.', " +
            "'Alle Lorum Ipsum generators op Internet hebben de eigenschap voorgedefinieerde stukken te herhalen waar nodig zodat dit de eerste echte generator is op internet. Het gebruikt een woordenlijst van 200 latijnse woorden gecombineerd met een handvol zinsstructuur modellen om een Lorum Ipsum te genereren die redelijk overkomt. De gegenereerde Lorum Ipsum is daardoor altijd vrij van herhaling, ingevoegde humor of ongebruikelijke woorden etc.', " +
            "'10.jpg', " +
            "'Sport Shoppen Evenementen', " +
            "'Open') "
            ,
            [],nullHandler,errorHandler);

        //PUT THE INFORMATION FOR THE SUGGESTIONS IN OUR OWN DATABASE
        tx.executeSql('SELECT * FROM Suggesties;', [],

            function(transaction, result) {

                if (result != null && result.rows != null) {

                    for (var i = 0; i < result.rows.length; i++) {

                        //get the row information
                        var row = result.rows.item(i);
                        //add to HTML
                        $('#lbSuggesties').append('<tr>' +
                            '<td>' + row.suggestieID + '.</td>' +
                            '<td>' + row.Naam + '</td>' +
                            '<td>' + row.KorteInfo + '</td>' +
                            '<td>' + row.Informatie + '</td>' +
                            '<td>' + row.Afbeelding + '</td>' +
                            '<td>' + row.Categorie + '</td>' +
                            '<td>' + row.CheckDone + '</td>');
                    }
                }
            },errorHandler
        );

    },errorHandler,successCallBack);
    //select from the table 'Gebruiker'
    ListDBValues();
}

//--------------------------------------------HERE IS ALL THE CODE FOR THE REGISTRATION FORM-----------------------------------

function continueform() {

    $('body').css('background-image','url("img/backgroundRegistreer.jpg")');
    $('.app-page').addClass('transparent');

    //
    var gebruikersnaam = $('#gebruikersnaam').val();
    var email = $('#email').val();
    var wachtwoord = $('#wachtwoord').val();
    var wachtwoordconfirm = $('#wachtwoordconfirm').val();

    if ((gebruikersnaam != "") && (email != "") && (wachtwoord != "") && (wachtwoordconfirm != "")) {
        if (wachtwoord === wachtwoordconfirm) {

            //Show the next form field and hide the startscreen with the basic user information
            $(".startRegistreer").hide(function () {
                $(".RegistreerFooter").show();
                $(".first").show();
                $(".next").show();
            });
        }
        else {
            alert ('Wachtwoorden komen niet overeen!');
        }
    }
    else {
        alert ('Vul alle velden in!');
    }
}

function firstfield() {
    $(".registreerform").children().hide(function () {
        $(".first").show();
        $('.next a').children().addClass('grey');
        $('#first-field').removeClass('grey');
    });

}

function secondfield() {
    var leeftijd = $('#leeftijd').val();

    if (leeftijd != "") {
        $(".registreerform").children().hide(function () {
            $(".second").show();
            $('.next a').children().addClass('grey');
            $('#second-field').removeClass('grey');
        });
    }
    else {
        alert ('Vul je leeftijd in.');
    }
}

function thirdfield() {

    var checkboxes = $(".second").find("input[type=checkbox]");
    //console.log(checkboxes);

    //If nothing selected you can not continue
    var count = 0;

    //Go through all the checkboxes to see if they are checked,
    //if they are, add one (or more) to count.
    checkboxes.each(function (index) {
        if ($(this).is(':checked')) {
            count ++;
        }
    });

    if (count != 0) {
        $(".registreerform").children().hide(function () {
            $(".third").show();
            $('.next a').children().addClass('grey');
            $('#third-field').removeClass('grey');
        });
    }
    else {
        alert('Selecteer minimaal 1 van deze velden!');
    }
}

function fourthfield () {

    $(".registreerform").children().hide(function () {
        $(".fourth").show();
        $('.next a').children().addClass('grey');
        $('#fourth-field').removeClass('grey');
    });
}


//----------------------------------------FUNCTION FOR THE SIDE NAVIGATION------------------------------------------
function navigation () {

    $(document).on('click', function(e) {
        if ( $(e.target).closest('.categoriebutton').length ) {
            $('.sidenav').animate({"left": '0%'},500);
            $(".overlay").fadeIn('slow');
        }else if ( ! $(e.target).closest('.sidenav').length ) {
            $(".overlay").fadeOut('slow');
            $('.sidenav').animate({"left": '-90%'},500);
        }
    });
}


//--------------------------------------------HERE IS ALL THE CODE FOR THE DATABASES------------------------------------
function ListDBValues() {

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }

    // this line clears out any content in the #lbGebruikers element on the
    //page so that the next few lines will show updated content and not just keep repeating lines
    //$('#lbGebruikers').html('');

    // this next section will select all the content from the Gebruiker table and then go through it row by row
    // appending the gebruikerID  Gebruikersnaam  Email to the  #lbGebruikers element on the page
    db.transaction(function(transaction) {

        //select from the table 'Gebruiker'
        transaction.executeSql('SELECT * FROM Gebruiker;', [],

            function(transaction, result) {

                if (result != null && result.rows != null) {

                    for (var i = 0; i < result.rows.length; i++) {

                        //get the row information
                        var row = result.rows.item(i);
                        //add to HTML
                        $('#lbGebruikers').append('<tr>' +
                            '<td>' + row.gebruikerID + '.</td>' +
                            '<td>' + row.Gebruikersnaam + '</td>' +
                            '<td>' + row.Email + '</td>' +
                            '<td>' + row.Leeftijd + '</td>' +
                            '<td>' + row.Geslacht + '</td>' +
                            '<td>' + row.Categorie + '</td>' +
                            '<td>' + row.DrukofRustig + '</td>' +
                            '<td>' + row.SamenofAlleen + '</td>' +
                            '<td>' + row.Wachtwoord + '</td></tr>');
                    }
                }
            },errorHandler);
    },errorHandler,nullHandler);

    return;
}

//--------------------------------------------SET THE CATEGORIE INFORMATION IN THE DATABASE-----------------------------
var categorieString = "";
var samenzijnString = "";
// this is the function that puts values into the database using the
// values from the text boxes on the screen
function AddValueToDB() {

    $('body').css('background-image','none');
    $('.app-page').removeClass('transparent');

    var gebruikersnaam = $('#gebruikersnaam').val();
    var email = $('#email').val();
    var wachtwoord = $('#wachtwoord').val();
    var wachtwoordconfirm = $('#wachtwoordconfirm').val();
    var leeftijd = $('#leeftijd').val();
    var geslacht = $('.geslacht:checked').val();
    var categorie = $(".second input:checked").map(function() {
                            return this.value;
                    });
    for (var x= 0; x < categorie.length; x++){
        categorieString += categorie[x] + " ";
    }
    var drukrustig = $(".third input:checked").map(function() {
                            return this.value;
                        });
    var drukrustigString = "";
    for (var x= 0; x < drukrustig.length; x++){
        drukrustigString += drukrustig[x] + " ";
    }
    var samenzijn = $(".fourth input:checked").map(function() {
                            return this.value;
                        });
    //var samenzijnString = "";
    for (var x= 0; x < samenzijn.length; x++){
        samenzijnString += samenzijn[x] + " ";
    }

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }

    console.log('Hij komt hier');
    // this is the section that actually inserts the values into the Gebruiker table
    db.transaction(function(transaction) {
        console.log([gebruikersnaam, email, leeftijd, geslacht, categorieString, drukrustigString, samenzijnString, wachtwoord]);
        transaction.executeSql('INSERT INTO Gebruiker(Gebruikersnaam, Email, Leeftijd, Geslacht, Categorie, DrukofRustig, SamenofAlleen, Wachtwoord) ' +
            '                   VALUES (?,?,?,?,?,?,?,?)',[gebruikersnaam, email, leeftijd, geslacht, categorieString, drukrustigString, samenzijnString, wachtwoord],
            nullHandler,errorHandler);
    });

    console.log('Hij komt hier ook');

    // this calls the function that will show what is in the Gebruiker table in the database
    ListDBValues();

    window.location.href= '#!welkomscherm';

    return false;
}

//Function to delete the database.
function delete_data() {
    db.transaction(delDB, errorHandler);
}

//For the function to delete the database: To empty the Gebruiker database.
function delDB(tx){
    tx.executeSql('DELETE FROM Gebruiker;');
    $('#lbGebruikers').html('');
}





//--------------------------------------------SEARCH FUNCTION FOR GEBRUIKER WHEN LOGGED IN------------------------------
function searchAll() {

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {

        //select from the table 'Gebruiker'
        transaction.executeSql('SELECT * FROM Suggesties;', [],

            function(transaction, result) {

                if (result != null && result.rows != null) {

                    for (var i = 0; i < result.rows.length; i++) {

                        //get the row information
                        var row = result.rows.item(i);
                        //add to HTML
                        $('.showCategory').append('<a href="#">' + row.Categorie + '</a><hr>');
                    }
                }
            },errorHandler);
    },errorHandler,nullHandler);
    return;
}




//--------------------------------------------HERE IS ALL THE CODE FOR THE DATABASES SEARCH AND CATEGORIES--------------

var safeGebruikersnaam = "";

function inloggen() {

    var gebruiker = $('#inloggenbruiker').val();
    var wachtwoord= $('#inloggenwachtwoord').val();

    //To see if form is empty
    if ((gebruiker.length === 0) && (wachtwoord.length === 0)) {
        //window.location.href = '#!inloggenloading';
        alert('het formulier is  leeg!');
    }
    else {

        //if the form is not empty, see if one of the form fields is empty
        if ((gebruiker.length === 0) || (wachtwoord.length === 0)) {
            alert('Een van de twee velden is nog leeg!');
        }

        else {

            //Check databaconnection
            if (!window.openDatabase) {
                // not all mobile devices support databases if it does not, the following will show
                alert('Databases are not supported in this browser.');
                return;
            }

            //Now we need to see if the username and the password excist in the databate Gebruikers
            db.transaction(function(transaction) {

                console.log('testvalidatiegebruiker');

                var query =
                    'SELECT * ' +
                    'FROM Gebruiker ' +
                    'WHERE Gebruikersnaam = "'+ gebruiker +'" ' +
                    'OR Email = "'+ gebruiker +'" ' +
                    'AND Wachtwoord = "'+ wachtwoord +'"';

                //console.log(query);
                //select from the table 'Gebruiker'
                transaction.executeSql(query, [], function(transaction, result) {

                        //Get result from database
                        if (result != null && result.rows != null) {

                          //if there's nothing in the database then the result.row.length is 0. If it's not: show information
                          if (result.rows.length != 0) {

                            //alert ('Komt voor in de database');
                            console.log(result.rows.length);

                            for (var i = 0; i < result.rows.length; i++) {

                                //get the row information
                                var row = result.rows.item(i);
                               // console.log(row);
                                //console.log(row.Gebruikersnaam);
                                safeGebruikersnaam = row.Gebruikersnaam;

                                window.location.href = '#!inloggenloading';
                            }
                          }
                        //if there's nothing in the database then the result.row.length is 0.
                        else {
                                alert('Je wachtwoord of gebruikersnaam kloppen niet! Probeer het nog een keer.');
                            }
                        }
                    },errorHandler);
            },errorHandler,nullHandler);

            return;
        }
    }
}

//--------------------------------------------HERE IS ALL THE CODE TO LOAD MATCHING SUGGESTIONS FOR THE USER------------
var TopSuggesties = "";

function loadGebruikerInformation () {


    var SuggestieID = "";

    //add to HTML
    $('.loadingtwo').append('' +
        '<p>Welkom ' + safeGebruikersnaam + ', <br><span>Plezier staat bijna voor je klaar</span>'
    );

    $( ".topvijfscherm" ).empty();

    if (!window.openDatabase) {
        // not all mobile devices support databases if it does not, the following will show
        alert('Databases are not supported in this browser.');
        return;
    }

    //Now we need to see if the username and the password excist in the databate Gebruikers
    db.transaction(function(transaction) {

        console.log('testvalidatiegebruiker');

        var query = 'SELECT * FROM Gebruiker WHERE Gebruikersnaam = "'+ safeGebruikersnaam +'"';

        //console.log(query);
        //select from the table 'Gebruiker'
        transaction.executeSql(query, [], function(transaction, result) {

            //Get result from database
            if (result != null && result.rows != null) {
                window.location.href = '#!inloggenloading';
                var row = result.rows.item(0);
                var categorieen = row.Categorie.split(" ");

                var where = 'WHERE Categorie LIKE "%' + categorieen.join('%" AND Categorie LIKE "%') + '%"';
                console.log(where);

                transaction.executeSql(  'SELECT * FROM Suggesties '+ where+ 'AND CheckDone = "Open"', [],

                    function(transaction, result) {
                        TopSuggesties = '';

                        if (result != null && result.rows != null) {

                            for (var i = 0; i < result.rows.length; i++) {

                                //get the row information
                                var row = result.rows.item(i);
                                //add to HTML
                                var informatie = row.Informatie;

                                SuggestieID = row.suggestieID;

                                TopSuggesties +=

                                    '<div style="display:none">' +
                                        '<div id="' + row.suggestieID + 'top" class="wrapper">' +
                                        '<h1 class="headerportfolio">' + row.Naam + '</h1>' +

                                        '<div class="float">' +
                                        '<img src="./img/list/' + row.Afbeelding + '" width="100%">' +
                                        '<p>' +
                                        row.Informatie +
                                        '</p>' +
                                        '<form>'+
                                            '<label><input style="display: none;" type="checkbox" onclick="toSelected(this)" class= "openCheckbox" value="'+SuggestieID+'"><span class="styleCheckbox"></span><span class="suggestieTekst">Voeg dit toe aan je lijstje!</span></label>' +
                                        '</form>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +

                                        '<a href="#' + row.suggestieID + 'top" class="fancybox" id="'+row.suggestieID +'topLink">' +
                                        '<div class="listcontent"> ' +
                                        '<img src="./img/list/' + row.Afbeelding + '">' +
                                        '<div class="text">' +
                                        '<h2>' + row.Naam + '</h2>' +
                                        '<p>' + row.KorteInfo + '</p>' +
                                        '<i>' + row.Categorie + '</i>' +
                                        '</div>'+
                                        '</div>' +
                                        '<div style="clear: both"></div>' +
                                        '</a>' +
                                        '<hr id="' + row.suggestieID + 'line">';
                            }
                            $('.topvijfscherm').empty();
                            $('.topvijfscherm').append(TopSuggesties);

                        }
                    },errorHandler
                );


            }
        },errorHandler);
    },errorHandler,nullHandler);

    return;
}

//To change the status of the open Suggesties to Selected (if you click on one that you want to do)
function toSelected(element) {

    console.log(element);

    var SuggestieID = $(element).val();

    if (!window.openDatabase) {
        // not all mobile devices support databases if it does not, the following will show
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {
        var query = 'UPDATE Suggesties SET CheckDone="Selected" WHERE suggestieID='+SuggestieID+'';
            //'= "'+ SuggestieID +'";';
        console.log(query);
        transaction.executeSql(query, [], function(){}, errorHandler);
        },errorHandler,nullHandler);
    alert('Verplaatst naar To Do lijstje!');
    //location.reload();

    $('#'+SuggestieID+'top').hide();
    $('.fancybox-skin').hide();
    $('.fancybox-close').hide();
    $('.fancybox-overlay').hide();
    $('#'+SuggestieID+'topLink').hide();
    $('#'+SuggestieID+'line').hide();

    return;
}

//------------------------------------------------------------------------------------------Function for loading Toppers on Icon
$('#toppers').on('click', function() {
    $('.iconsbottom a').children().addClass('grey');
    $('#toppers .icon').removeClass('grey');
    //console.log('Kijken hoe vaak dit gebeurt');
    $('.topvijfscherm').empty();
    loadGebruikerInformation();
});

//------------------------------------------------------------------------------------------Function for To Do Database
var ToDoList = "";

$('#todolist').on('click', function() {

    $('.iconsbottom a').children().addClass('grey');
    $('#todolist .icon').removeClass('grey');


    var SuggestieID = "";

    var selected = "Selected";

    $( ".todocontent" ).empty();

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {

        //select from the table 'Gebruiker'
        transaction.executeSql('SELECT * FROM Suggesties WHERE CheckDone ="' + selected +'"', [],

            function(transaction, result) {
                ToDoList = '';
                //alert("chars-" + DoneList.length);
                if (result != null && result.rows != null) {

                    for (var i = 0; i < result.rows.length; i++) {

                        //get the row information
                        var row = result.rows.item(i);
                        //add to HTML

                        SuggestieID = row.suggestieID;

                        ToDoList +=
                            '<div style="display:none">' +

                                '<div id="' + row.suggestieID + 'todo" class="wrapper">' +
                                '<h1 class="headerportfolio">' + row.Naam + '</h1>' +

                                '<div class="float">' +
                                '<img src="./img/list/' + row.Afbeelding + '" width="100%">' +
                                '<p>' + row.Informatie +'</p>' +
                                '<form>'+

                                    '<label><input style="display: none;" type="checkbox" onclick="toDone(this)" class= "openCheckbox" value="'+SuggestieID+'"><span class="styleCheckbox"></span><span class="suggestieTekst">Done   </span><input type="checkbox" style="display: none;" onclick="toDelete(this)" class= "openCheckbox" value="'+SuggestieID+'"><span class="styleCheckbox"></span><span class="suggestieTekst">Verwijder</span></label>' +
                                '</form>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +

                                '<a href="#' + row.suggestieID + 'todo" class="fancybox" id="'+row.suggestieID +'todoLink">' +
                                '<div class="listcontent"> ' +
                                '<img src="./img/list/' + row.Afbeelding + '">' +
                                '<div class="text">' +
                                '<h2>' + row.Naam + '</h2>' +
                                '<p>' + row.KorteInfo + '</p>' +
                                '<i>' + row.Categorie + '</i>' +
                                '</div>' +
                                '</div>' +
                                '<div style="clear: both"></div>' +
                                '</a>'+
                                '<hr id="' + row.suggestieID + 'line">';
                        //);
                    }
                    $( ".todocontent" ).empty();
                    $('.todocontent').append(ToDoList);
                }
            },errorHandler);
    },errorHandler,nullHandler);
    return;
});


//To change the status of the Selected Suggesties to Done (if you click on one that you want to do)
function toDone(element) {

    console.log(element);

    var SuggestieID = $(element).val();

    if (!window.openDatabase) {
        // not all mobile devices support databases if it does not, the following will show
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {
        var query = 'UPDATE Suggesties SET CheckDone="Done" WHERE suggestieID='+SuggestieID+'';
        //'= "'+ SuggestieID +'";';
        console.log(query);
        transaction.executeSql(query, [], function(){}, errorHandler);
    },errorHandler,nullHandler);
    alert('Verplaatst naar Done lijstje!');
    //location.reload();

    $('#'+SuggestieID+'todo').hide();
    $('.fancybox-skin').hide();
    $('.fancybox-close').hide();
    $('.fancybox-overlay').hide();
    $('#'+SuggestieID+'todoLink').hide();
    $('#'+SuggestieID+'line').hide();

    return;
}

//To change the status of the Selected Suggesties to Done (if you click on one that you want to do)
function toDelete(element) {

    console.log(element);

    var SuggestieID = $(element).val();

    if (!window.openDatabase) {
        // not all mobile devices support databases if it does not, the following will show
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {
        var query = 'UPDATE Suggesties SET CheckDone="Deleted" WHERE suggestieID='+SuggestieID+'';
        //'= "'+ SuggestieID +'";';
        console.log(query);
        transaction.executeSql(query, [], function(){}, errorHandler);
    },errorHandler,nullHandler);
    alert('De suggestie is verwijdert! Je zal deze niet meer zien.');
    //location.reload();

    $('#'+SuggestieID+'todo').hide();
    $('.fancybox-skin').hide();
    $('.fancybox-close').hide();
    $('.fancybox-overlay').hide();
    $('#'+SuggestieID+'todoLink').hide();
    $('#'+SuggestieID+'line').hide();

    return;
}

//------------------------------------------------------------------------------------------Function for To Do Database
var DoneList = "";

$('#alreadydone').on('click', function() {

    $('.iconsbottom a').children().addClass('grey');
    $('#alreadydone .icon').removeClass('grey');

    var done = "Done";
    var SuggestieID = '';

    $(".donecontent").empty();

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {

        //select from the table 'Gebruiker'
        transaction.executeSql('SELECT * FROM Suggesties WHERE CheckDone = "' + done +'"', [],

            function(transaction, result) {
                DoneList = '';

                if (result != null && result.rows != null) {

                    for (var i = 0; i < result.rows.length; i++) {

                        //get the row information
                        var row = result.rows.item(i);
                        //add to HTML

                        SuggestieID = row.suggestieID;

                        DoneList +=
                            '<div style="display:none">' +

                                '<div id="' + row.suggestieID + '" class="wrapper">' +
                                '<h1 class="headerportfolio">' + row.Naam + '</h1>' +

                                '<div class="float">' +
                                '<img src="./img/list/' + row.Afbeelding + '" width="100%">' +
                                '<p>' + row.Informatie +'</p>' +
                                '<form>'+
                                    '<label><input type="checkbox" style="display: none;"  class= "openCheckbox" checked value="'+SuggestieID+'"><span class="styleCheckbox"></span><span class="suggestieTekst"> Je hebt deze suggestie al uitgevoerd!</span></label>' +
                                '</form>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +

                                '<a href="#' + row.suggestieID + '" class="fancybox">' +
                                '<div class="listcontent"> ' +
                                '<img src="./img/list/' + row.Afbeelding + '">' +
                                '<div class="text">' +
                                '<h2>' + row.Naam + '</h2>' +
                                '<p>' + row.KorteInfo + '</p>' +
                                '<i>' + row.Categorie + '</i>' +
                                '</div>' +
                                '</div>' +
                                '<div style="clear: both"></div>' +
                                '</a>'+
                                '<hr>';
                        //);
                    }

                    $( ".donecontent" ).empty();
                    $('.donecontent').append(DoneList);
                }
            },errorHandler);
    },errorHandler,nullHandler);
    return;
});

//------------------------------------------------------------------------------------------Function for Categorie Find
var bestaanCategorie = "";

//Filter by clicking on a category
$('.sidenav .categorieselecteren').children().on('click', function() {

    var findCategory = $(this).attr('id');

    $( ".categorieresult" ).empty();

    $(".overlay").fadeOut('slow');
    $('.sidenav').animate({"left": '-90%'},1000);

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }

    db.transaction(function(transaction) {

        //select from the table 'Gebruiker'
        transaction.executeSql('SELECT * FROM Suggesties WHERE Categorie LIKE "%' + findCategory +'%"', [],

            function(transaction, result) {
                bestaanCategorie = '';
                if (result != null && result.rows != null) {

                    for (var i = 0; i < result.rows.length; i++) {

                        //get the row information
                        var row = result.rows.item(i);
                        //add to HTML
                       // $('.categorieresult').append(
                        bestaanCategorie +=
                            '<div style="display:none">' +
                                '<div id="' + row.suggestieID + '" class="wrapper">' +
                                '<h1 class="headerportfolio">' + row.Naam + '</h1>' +

                                '<div class="float">' +
                                '<img src="./img/list/' + row.Afbeelding + '" width="100%">' +
                                '<p>' + row.Informatie +'</p>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +

                                '<a href="#' + row.suggestieID + '" class="fancybox">' +
                                '<div class="listcontent"> ' +
                                '<img src="./img/list/' + row.Afbeelding + '">' +
                                '<div class="text">' +
                                '<h2>' + row.Naam + '</h2>' +
                                '<p>' + row.KorteInfo + '</p>' +
                                '<i>' + row.Categorie + '</i>' +
                                '</div>' +
                                '</div>' +
                                '<div style="clear: both"></div>' +
                                '</a>'+
                                '<hr>';
                        //);
                    }
                    $('.categorieresult').empty();
                    $('.categorieresult').append(bestaanCategorie);
                }
            },errorHandler);
    },errorHandler,nullHandler);
    return;
});

//------------------------------------------------------------------------------------------Function for Search Database
var bestaanSearch = "";

//Filter By Search
$('#Zoeken').on('click', function() {
    var findSearchTerm = $('#Search').val();

    $( ".searchresultaat" ).empty();

    $(".overlay").fadeOut('slow');
    $('.sidenav').animate({"left": '-90%'},1000);

    if(findSearchTerm != '') {

        console.log(findSearchTerm);


            if (!window.openDatabase) {
                alert('Databases are not supported in this browser.');
                return;
            }

            db.transaction(function(transaction) {

                //select from the table 'Gebruiker'
                transaction.executeSql('SELECT * FROM Suggesties WHERE ' +
                                        'Naam LIKE "%' + findSearchTerm +'%"' +
                                        'OR KorteInfo LIKE "%' + findSearchTerm +'%"' +
                                        'OR Informatie LIKE "%' + findSearchTerm +'%"' +
                                        'OR Categorie LIKE "%' + findSearchTerm +'%"'
                    , [],

                    function(transaction, result) {
                        console.log('callback');
                        bestaanSearch = "";

                        if (result != null && result.rows != null) {
                            for (var i = 0; i < result.rows.length; i++) {

                                //get the row information
                                var row = result.rows.item(i);

                                bestaanSearch +=

                                    '<div style="display:none">' +
                                        '<div id="' + row.suggestieID + '" class="wrapper">' +
                                        '<h1 class="headerportfolio">' + row.Naam + '</h1>' +

                                        '<div class="float">' +
                                        '<img src="./img/list/' + row.Afbeelding + '" width="100%">' +
                                        '<p>' + row.Informatie +'</p>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>' +

                                        '<a href="#' + row.suggestieID + '" class="fancybox">' +
                                        '<div class="listcontent"> ' +
                                        '<img src="./img/list/' + row.Afbeelding + '">' +
                                        '<div class="text">' +
                                        '<h2>' + row.Naam + '</h2>' +
                                        '<p>' + row.KorteInfo + '</p>' +
                                        '<i>' + row.Categorie + '</i>' +
                                        '</div>' +
                                        '</div>' +
                                        '<div style="clear: both"></div>' +
                                        '</a>'+
                                        '<hr>';
                                //);
                            }
                            $('.searchresultaat').append(bestaanSearch);

                            if (bestaanSearch == "") {
                                bestaanSearch +=

                                    '<h2>Er is niks gevonden!</h2>' +
                                        '<p>Probeer het nog een keer of kijk eens via de categorieën!</p>'
                                ;
                                $('.searchresultaat').empty();
                                $('.searchresultaat').append(bestaanSearch);

                            }

                        }
                        else {
                            bestaanSearch = "";
                            bestaanSearch +=

                                '<h2>Oeps, er zijn geen zoekresultaten!</h2>' +
                                '<p>Probeer het nog een keer of kijk eens via de categorieën!</p>'
                            ;
                            $('.searchresultaat').empty();
                            $('.searchresultaat').append(bestaanSearch);

                        }
                    },errorHandler);
            },errorHandler,nullHandler);
            return;
    } else {
        bestaanSearch = "";
        bestaanSearch +=

            '<h2>Oeps, er zijn geen zoekresultaten!</h2>' +
                '<p>Probeer het nog een keer of kijk eens via de categorieën!</p>'
        ;
        $('.searchresultaat').empty();
        $('.searchresultaat').append(bestaanSearch);
    }
});




//--------------------------------------------HERE IS ALL THE EXTRA CODE FOR PHONON-------------------------------------

//function to render some text on a element
function write (el, text) {
    if(!('textContent' in el)) {
        el.innerText = text;
    } else {
        el.textContent = text;
    }
}

//the first content for the page loaded in index
Phonon.Navigator({
    defaultPage: 'welkomscherm',
    templatePath: 'pages',
    pageAnimations: true
});

//functions for the first page
//don't need much because we don't have to use a link to load this content to click on, it's the homepage.
//If you go to the second page (down) there are more functions necessary to load it.
Phonon.Navigator().on({page: 'welkomscherm', template: 'welkomscherm', asynchronous: false}, function(activity) {

    activity.onCreate(function(self, el, req) {
        console.log('welkomscherm: onCreate');                       //loads when you open the page

        //hide the buttons at the beginning
        $(".deviceready.startloader").hide();
        //self.runReady();
    });

    activity.onReady(function(self, el, req) {

        //hide loading gif and show buttons to login
        setTimeout(function(){
            $(".loading").fadeOut("slow", function() {
                $(".deviceready.startloader").fadeIn("slow");
            });
        }, 1000);

        console.log('welkomscherm: onReady');                        //loads when you open the page
    });

    activity.onTransitionEnd(function() {
        console.log('welkomscherm: onTransitionEnd');                //loads when you open the page
    });

    activity.onQuit(function(self) {
        console.log('welkomscherm: onQuit');                         //loads when you leave the page
    });

    activity.onHidden(function(el) {
        console.log('welkomscherm: onHidden');                       //loads when you leave the page
    });
});

//Loginscreen
Phonon.Navigator().on({page: 'login', template: 'login', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('login: onCreate');                       //loads when you open the page
        self.runReady();
    });

    activity.onReady(function(self, el, req) {
        //console.log(TopSuggesties);
        console.log('login: onReady');                        //loads when you open the page
    });
});

//Registreet screen
Phonon.Navigator().on({page: 'registreer', template: 'registreer', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {

        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
        $(".fourth").hide();
        $(".next").hide();


        console.log('registreer: onCreate');                       //loads when you open the page
        self.runReady();
    });
});

//Loading after loggin in
Phonon.Navigator().on({page: 'inloggenloading', template: 'inloggenloading', asynchronous: false}, function(activity) {

    activity.onCreate(function(self, el, req) {
        console.log('inloggenloading: onCreate');                       //loads when you open the page

        //hide the buttons at the beginning
        $(".header-bar").hide();
        $(".deviceready").hide();
        $(".iconsbottom").hide();

        ('.topvijfscherm').empty;
        loadGebruikerInformation();
        console.log('na functie hallo zeggen');

        //self.runReady();
    });

    activity.onReady(function(self, el, req) {

        console.log(safeGebruikersnaam);

        //hide loading gif and show buttons to login
        setTimeout(function(){
            $(".loadingscreen").fadeOut("slow", function() {
                $(".header-bar").fadeIn("slow");
                $(".deviceready").fadeIn("slow");
                $(".iconsbottom").fadeIn("slow");
            });
        }, 1000);

        navigation ();

        console.log('inloggenloading: onReady');                        //loads when you open the page
    });

});


//To Do
Phonon.Navigator().on({page: 'todo', template: 'todo', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('todo: onCreate');                       //loads when you open the page
        //self.runReady();
    });

    activity.onReady(function(self, el, req) {
        //$('.todocontent').empty();
        $('.todocontent').append(ToDoList);
        console.log(ToDoList);
        console.log('todo: onReady');                        //loads when you open the page
    });

});

//Done
Phonon.Navigator().on({page: 'done', template: 'done', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('done: onCreate');                       //loads when you open the page
        //self.runReady();
    });

    activity.onReady(function(self, el, req) {
        //$('.donecontent').empty();
        $('.donecontent').append(DoneList);
        console.log(DoneList);
        console.log('done: onReady');                        //loads when you open the page
    });
});

//Categorie search
Phonon.Navigator().on({page: 'categoriezoeken', template: 'categoriezoeken', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('categoriezoeken: onCreate');                       //loads when you open the page
        //self.runReady();
    });

    activity.onReady(function(self, el, req) {
        //$('.categorieresult').empty();
        $('.categorieresult').append(bestaanCategorie);
        console.log('categoriezoeken: onReady');                        //loads when you open the page
    });
});



//Search
Phonon.Navigator().on({page: 'searchresultaat', template: 'searchresultaat', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('searchresultaat: onCreate');                       //loads when you open the page
        //self.runReady();
    });

    activity.onReady(function(self, el, req) {

        $('.searchresultaat').append(bestaanSearch);
        console.log(bestaanSearch);
        console.log('searchresultaat: onReady');                        //loads when you open the page
    });
});



