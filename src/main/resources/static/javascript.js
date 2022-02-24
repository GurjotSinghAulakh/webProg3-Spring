
function registrerBilletter() {

    const valgt_film = $("#utValgtFilm").val();
    const valgt_antallbilletter = $("#antallBilletter").val();
    const valgt_fornavn = $("#fornavn").val();
    const valgt_etternavn = $("#etternavn").val();
    const valgt_telefonNo = $("#telefonNo").val();
    const valgt_epost = $("#epost").val();

    //sjekker om alle inputene er fylt
    let fylt_film = true;
    let fylt_antall = true;
    let fylt_fornavn = true;
    let fylt_etternavn = true;
    let fylt_telefonNr = true;
    let fylt_email = true;

    if (valgt_film == "Velg film her") {
        $("#feilmelding_film").html("Velg film!!!");
        fylt_film = false;
    }

    else {
        $("#feilmelding_film").html(" ");

    }

    if (valgt_antallbilletter == "" || valgt_antallbilletter <= 0) {
        $("#feilmelding_antall").html("Må skrive noe inn i antall!");
        fylt_antall = false;
    }

    else {
        $("#feilmelding_antall").html(" ");
    }

    if (valgt_fornavn == "") {
        $("#feilmelding_fornavn").html("Må skrive noe inn i fornavnet!");
        fylt_fornavn = false;
    }

    else {
        $("#feilmelding_fornavn").html(" ");
    }

    if (valgt_etternavn == "") {
        $("#feilmelding_etternavn").html("Må skrive noe inn i etternavnet!");
        fylt_etternavn = false;
    }

    else {
        $("#feilmelding_etternavn").html(" ");
    }

    if (valgt_telefonNo == "") {
        $("#feilmelding_telefonNo").html("Må skrive noe inn i telefonnr!");
        fylt_telefonNr = false;
    }

    else {
        $("#feilmelding_telefonNo").html(" ");
    }

    if (valgt_epost == "") {
        $("#feilmelding_epost").html("Må skrive noe inn i epost!");
        fylt_email = false;
    }

    else {
        $("#feilmelding_epost").html(" ");
    }

    if(fylt_film && fylt_antall && fylt_fornavn && fylt_etternavn && fylt_telefonNr && fylt_email) {
        let objPerson = {
            film: valgt_film,
            antallBilletter: valgt_antallbilletter,
            fornavn: valgt_fornavn,
            etternavn: valgt_etternavn,
            telefonNo: valgt_telefonNo,
            epost: valgt_epost,
        };

        $.post("/lagredata", objPerson, function () {
            console.log("lagre data inni ")
            hentAlle();
        });

        $("#utValgtFilm").val("Velg film her");
        $("#antallBilletter").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonNo").val("");
        $("#epost").val("");
    }
}

const hentAlle = () => {
    $.get("/hentdata",function(data){
        formaterData(data);
    });
}

const formaterData = bestillinger => {
    let ut = '<table class="table table-striped">' +
        "<tr>" +
        "<th> Film </th> " +
        "<th> Antall Billetter </th>" +
        "<th> Fornavn </th>" +
        "<th> Etternavn </th>" +
        "<th> Telefon No </th>" +
        "<th> Epost </th>" +
        "</tr>";

    for (let enbestilling of bestillinger) {
        console.log(bestillinger);
        ut += "<tr>" +
            "<th>" + enbestilling.film + "</th>" +
            "<th>" + enbestilling.antallBilletter + "</th>" +
            "<th>" + enbestilling.fornavn + "</th>" +
            "<th>" + enbestilling.etternavn + "</th>" +
            "<th>" + enbestilling.telefonNo + "</th>" +
            "<th>" + enbestilling.epost + "</th>" +
            "</tr>";
    }
    ut += "</table>";
    $("#utInfo").html(ut);
}

function sletterData() {
    $.get("/slettdata", function () {
        $("#utInfo").html("");
    });
}

