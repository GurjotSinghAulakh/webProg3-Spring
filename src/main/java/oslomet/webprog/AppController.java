package oslomet.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AppController {

    @Autowired
    AppRepository rep;

    @PostMapping("/lagredata")
    public void registrerBilletter(BestillingAvBilletter objPerson){
        rep.lagreBilletter(objPerson);
    }

    @GetMapping("/hentdata")
    public List<BestillingAvBilletter> hentAlle() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettdata")
    public void sletterData(){
        rep.slettBilletter();
    }
}