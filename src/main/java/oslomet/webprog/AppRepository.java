package oslomet.webprog;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AppRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(BestillingAvBilletter objPerson) {
        String sql = "INSERT INTO Billetter (film, antallbilletter, fornavn, etternavn, telefonNo, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, objPerson.getFilm(), objPerson.getAntallBilletter(), objPerson.getFornavn(),
                objPerson.getEtternavn(), objPerson.getTelefonNo(), objPerson.getEpost());
    }

    public List<BestillingAvBilletter> hentAlleBilletter() {
        String sql = "SELECT * FROM Billetter ORDER BY etternavn";
        return db.query(sql,new BeanPropertyRowMapper<>(BestillingAvBilletter.class));
    }

    public void slettBilletter() {
        String sql = "DELETE FROM Billetter";
        db.update(sql);
    }
}
