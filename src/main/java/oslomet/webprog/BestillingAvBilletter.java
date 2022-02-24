package oslomet.webprog;

public class BestillingAvBilletter {
    private String film;
    private String antallBilletter;
    private String fornavn;
    private String etternavn;
    private String telefonNo;
    private String epost;

    public BestillingAvBilletter(String film, String antallBilletter, String fornavn, String etternavn, String telefonNo, String epost) {
        this.film = film;
        this.antallBilletter = antallBilletter;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonNo = telefonNo;
        this.epost = epost;
    }

    public BestillingAvBilletter() {

    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAntallBilletter() {
        return antallBilletter;
    }

    public void setAntallBilletter(String antallBilletter) {
        this.antallBilletter = antallBilletter;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonNo() {
        return telefonNo;
    }

    public void setTelefonNo(String telefonNo) {
        this.telefonNo = telefonNo;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
