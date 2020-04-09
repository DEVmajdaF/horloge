// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

var scd;
var mnt;
var hrs;



function demarrerLaMontre() {

    //Extraire l'heure actuel à l'aide de l'objet Date()


    var theDate = new Date();


    //Ajouter l'heure , minute , seconde  dans des varaiables
    var hours = theDate.getHours();
    var minutes = theDate.getMinutes();
    var seconds = theDate.getSeconds();



    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
    // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


    var scd = (seconds / 60) * 360;
    AIGUILLESEC.style.transform = "rotate(" + scd + "deg)";




    var mnt = (minutes / 60) * 360;
    AIGUILLEMIN.style.transform = "rotate(" + mnt + "deg)";




    var hrs = (hours / 12) * 360;
    AIGUILLEHR.style.transform = "rotate(" + hrs + "deg)";






    // Déplacer les aiguilles 






}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);