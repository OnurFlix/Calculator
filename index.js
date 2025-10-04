/**
 * Basit Hesap Makinesi - JavaScript
 * İşlemler: Toplama, Çıkarma, Çarpma, Bölme
 * HTML ve CSS sadece arayüz amaçlıdır.
 */

function hesapla(işlem) {  
    const sayi1 = parseFloat(document.getElementById('number1').value); 
    const sayi2 = parseFloat(document.getElementById('number2').value);  

    if (isNaN(sayi1) || isNaN(sayi2)) { 
        document.getElementById('sonuc').textContent = 'Lütfen geçerli sayılar girin. ';  
        return; 
    } 

    let sonuc; 
    if (işlem === 'topla') { 
        sonuc = sayi1 + sayi2; 
    } else if (işlem === 'cikar') { 
        sonuc = sayi1 - sayi2;  
    } else if (işlem === 'carp') { 
        sonuc = sayi1 * sayi2; 
    } else if (işlem === 'bol') { 
        if (sayi2 === 0) { 
            document.getElementById('sonuc').textContent = 'Bir sayı sıfıra bölünemez.'; 
            return;
        }  
        sonuc = sayi1 / sayi2;
    } else { 
        document.getElementById('sonuc').textContent = 'Geçersiz işlem.'; 
        return;
    }

    document.getElementById('sonuc').textContent = 'Sonuc: ' + sonuc;
}