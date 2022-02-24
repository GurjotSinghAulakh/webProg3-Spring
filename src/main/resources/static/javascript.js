function registrerBilletter() {

    let valgt_film = $("#utValgtFilm").val();
    let valgt_antallbilletter = $("#antallBilletter").val();
    let valgt_fornavn = $("#fornavn").val();
    let valgt_etternavn = $("#etternavn").val();
    let valgt_telefonNo = $("#telefonNo").val();
    let valgt_epost = $("#epost").val();

    let teller = 0;

    if (valgt_film == "Velg film her") {
        $("#feilmelding_film").html("Velg film!!!");
    }

    else {
        $("#feilmelding_film").html(" ");
        teller++;
    }

    if (valgt_antallbilletter == "" || valgt_antallbilletter <= 0) {
        $("#feilmelding_antall").html("Må skrive noe inn i antall!");
    }

    else {
        $("#feilmelding_antall").html(" ");
        teller++;
    }

    if (valgt_fornavn == "") {
        $("#feilmelding_fornavn").html("Må skrive noe inn i fornavnet!");
    }

    else {
        $("#feilmelding_fornavn").html(" ");
        teller++;
    }

    if (valgt_etternavn == "") {
        $("#feilmelding_etternavn").html("Må skrive noe inn i etternavnet!");
    }

    else {
        $("#feilmelding_etternavn").html(" ");
        teller++;
    }

    if (valgt_telefonNo == "") {
        $("#feilmelding_telefonNo").html("Må skrive noe inn i telefonnr!");
    }

    else {
        $("#feilmelding_telefonNo").html(" ");
        teller++;
    }

    if (valgt_epost == "") {
        $("#feilmelding_epost").html("Må skrive noe inn i epost!");
    }

    else {
        $("#feilmelding_epost").html(" ");
        teller++;
    }

    if (teller == 6) {
        let objPerson = {
            Film: $("#utValgtFilm").val(),
            AntallBilletter: $("#antallBilletter").val(),
            Fornavn: $("#fornavn").val(),
            Etternavn: $("#etternavn").val(),
            TelefonNo: $("#telefonNo").val(),
            Epost: $("#epost").val(),
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

function hentAlle() {
    $.get("/hentdata", function (data) {
        formaterData(data);
    });
}

function formaterData(bestillinger) {
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

