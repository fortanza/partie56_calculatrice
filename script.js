do{

// Variable Choix 
do{
    var choix = Number(prompt('Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division'));
}while(choix != 1 && choix != 2 && choix != 3 && choix != 4 )
// console.log(choix);

// Demande des nombres à calculer

do {
    var premierNombre = Number(prompt('Veuillez entre le premier nombre'));
    var deuxiemeNombre = Number(prompt('Veuillez entre le deuxième nombre'));
}while(isNaN(premierNombre) || isNaN(deuxiemeNombre))
// while(isNaN(premierNombre, deuxiemeNombre)==true)


// console.log(premierNombre);
// console.log(deuxiemeNombre);

// Fonction de calcul

function addition (nombreA, nombreB) {
    return nombreA + nombreB;    
};

function multiplication (nombreA, nombreB) {
    return nombreA * nombreB;
};

function soustraction (nombreA, nombreB) {
    return nombreA - nombreB;
     
};

function division (nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("impossible de diviser par 0");}
    return nombreA / nombreB;
};


// Appelle de la fonction

try{
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break; 
        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);  
            break; 
        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);       
            break;
        default:
            throw new Error("Une erreur est survernue! Veuillez recommencez votre calcul!");                       
    }
    alert('Le résultat du calcul est : ' + resultat);
}
catch(error){
    alert(error);
}
var restart = confirm("voulez vous refaire un cacul?");  
} while (restart)

 