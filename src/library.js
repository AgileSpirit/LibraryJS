;(function ( global ) {
    'use strict';

    var Validator = function () {
    };

    var P = Validator.prototype;

    P['valideAgeEmprunteur'] = function (age) {
        if (age < 18) {
            console.log('L\'âge de l\'emprunteur n\'atteint pas la limite d\'âge minimale requise (18 ans)');
            return false;
        }
        if (age > 63) {
            console.log('L\'âge de l\'emprunteur dépasse la limite d\'âge maximale autorisée (63 ans)');
            return false;
        }
        return true;
    };

    P['valideAgeEmprunteur'] = function (age) {
        if (age < 18) {
            console.log('L\'âge de du co-emprunteur n\'atteint pas la limite d\'âge minimale requise (18 ans)');
            return false;
        }
        if (age > 63) {
            console.log('L\'âge du co-emprunteur dépasse la limite d\'âge maximale autorisée (63 ans)');
            return false;
        }
        return true;
    };

    P['valideDureeDuPret'] = function (duree) {
        if (duree < 8) {
            console.log('La durée du prêt n\'atteint pas la durée minimale permise (8 ans)');
            return false;
        }
        if (duree > 20) {
            console.log('La durée du prêt dépasse la durée maximale autorisée (20 ans)');
            return false;
        }
        return true;
    };

    if(!window.Validator) {
        window.Validator = new Validator();
    }

})( this );