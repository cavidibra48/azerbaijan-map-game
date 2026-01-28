const rayonlar = ["Abşeron", "Ağdam", "Ağdaş", "Ağcabədi", "Ağstafa", "Ağsu", "Astara", "Balakən", "Bərdə", "Bakı",
            "Beyləqan", "Biləsuvar", "Cəbrayıl", "", "Cəlilabad", "Daşkəsən", "Şabran", "Şirvan", "Füzuli", "Gəncə",
            "Gədəbəy", "Goranboy", "Göyçay", "Hacıqabul", "Göygöl", "Xankəndi", "Xaçmaz", "Xocavənd", "Xızı", "İmişli",
            "İsmayıllı", "Kəlbəcər", "Kürdəmir", "Qax", "Qazax", "Qəbələ", "Qobustan", "Qusar", "Qubadlı", "Quba",
            "Laçın", "Lənkərən", "Lerik", "Masallı", "Mingəçevir", "Naftalan", "Neftçala", "Oğuz", "Saatlı", "Sumqayıt",
            "Samux", "Salyan", "Siyəzən", "Sabirabad", "Şəki", "Şamaxı", "Şəmkir", "Şuşa", "Tərtər", "Tovuz", "Ucar",
            "Zaqatala", "Zərdab", "Zəngilan", "Yardımlı", "Yevlax", "Babək", "Şərur", "Ordubad", "Naxçıvan", "Şahbuz",
            "Culfa", "Kəngərli", "Sədərək"];

let x;
let oyunDavam = false;
function yeniRayon() {
    x = Math.floor(Math.random() * 73);
    let rayon = rayonlar[x];
    document.getElementById("rayonad").innerText = "Rayon: " + rayon;
    let sahe = document.getElementById("netice");
    sahe.innerText = "";
    sahe.setAttribute("style", "");
}

function rayontap() {
    let duyme = document.getElementById("basla");
    
    // Əgər oyun davam edirsə, dayandır
    if (oyunDavam) {
        oyunDavam = false;
        duyme.innerText = "Başla";
        let sahe = document.getElementById("netice");
        sahe.innerText = "Oyun dayandırıldı";
        sahe.setAttribute("style", "background-color:#ff9900;");
        return;
    }
    
    // Yeni oyunu başlat
    oyunDavam = true;
    duyme.innerText = "Dayandır";
    yeniRayon();
}

let nomre;
function test(nomre) {
    // Əgər oyun başlamayıbsa, heç nə etmə
    if (!oyunDavam) {
        return;
    }
    
    nomre -= 1;
    let sahe = document.getElementById("netice");
    
    if (nomre == x) {
        sahe.innerText = "Düzgün cavab";
        sahe.setAttribute("style", "background-color:#00b300;");
        
        // 1 saniyə gözlə, sonra yeni sual göstər
        setTimeout(function() {
            if (oyunDavam) {
                yeniRayon();
            }
        }, 1000);
    } else {
        sahe.innerText = "Yanlış cavab";
        sahe.setAttribute("style", "background-color:#b30000;");
    }
}