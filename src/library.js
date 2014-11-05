;(function ( global ) {
    'use strict';

    /*
     * Déclaration du constructeur pour la classe Validator
     */
    var Validator = function () {
    };

    /*
     * Sucre syntaxique pour enrichir la classe Validator
     */
    var P = Validator.prototype;

    /*
     * Définition d'une règle de validation
     */
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

    /*
     * Définition d'une autre règle de validation
     */
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

    /*
     * etc.
     */
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

    /*
     * Déclaration d'une instance de Validator pour pouvoir faire appel aux méthodes de la classe Validator en mode "méthode statique" (cf. index.html)
     */
    if(!window.Validator) {
        window.Validator = new Validator();
    }

})( this );