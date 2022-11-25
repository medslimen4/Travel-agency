
function VerifMail()

{
    // Les controles du champ Email 
    Ch = document.Verif.Mail.value;
    if (Ch == '') {
        alert('Email vide!');
        return false;
    }
    if (Ch.indexOf('@', Ch) == -1) {
        alert('[@] - Email invalide!');
        return false;
    }

    var position1 = Ch.indexOf('@', Ch);
    var Ch1 = Ch.substring(0, position1);
    if (isAlphabetique(Ch1) == false) {
        alert('Ch1 doit comporter des lettres alphabétiques!');
        return false;
    }
    if (Ch.indexOf('.', Ch) == -1) {
        alert('[.] - Email invalide!');
        return false;
    }
    var position2 = Ch.indexOf('.', Ch);
    Ch3 = Ch.substring(position2 + 1, Ch.length);
    if (isAlphabetique(ch3) == false) {
        alert('Ch3 doit comporter des lettres alphabétiques!');
        return false;
    }
    if ((Ch3.length < 2) || (Ch3.length > 3)) {
        alert('Ch3 doit comporter 2 ou 3 lettres alphabétiques!');
        return false;
    }

    Ch2 = Ch.substring(position1 + 1, position2);

    if (isAlphabetique(Ch2) == false) {
        alert('Ch2 doit comporter des lettres alphabétiques!');
        return false;
    }