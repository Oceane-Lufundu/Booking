window.onload = function () {
    resetForm();
  };
  
  function changerValeur(id, changement) {
    const input = document.getElementById(id);
    let valeur = parseInt(input.value) + changement;
    if (valeur < 0) valeur = 0;
    input.value = valeur;
  
    if (id === 'enfants') {
      afficherChampsAge(valeur);
    }
  }

  function incrementer(id) {
    let champ = document.getElementById(id);     
    let valeur = parseInt(champ.value);         
    valeur = valeur + 1;                        
    champ.value = valeur;                      
  }
  
  function afficherChampsAge(nbEnfants) {
    const zone = document.getElementById("zone-ages");
    zone.innerHTML = ""; // on vide d'abord
  
    for (let i = 0; i < nbEnfants; i++) {
      const champ = document.createElement("input");
      champ.type = "number";
      champ.min = 0;
      champ.max = 17;
      champ.placeholder = "Âge enfant " + (i + 1);
      champ.className = "age-enfant";
      zone.appendChild(champ);
      zone.appendChild(document.createElement("br"));
    }
  }
  
  function resetForm() {
    document.getElementById("adultes").value = 0;
    document.getElementById("enfants").value = 0;
    document.getElementById("chambres").value = 0;
    document.getElementById("travail").checked = !checked;
    document.getElementById("arrivee").value = "";
    document.getElementById("depart").value = "";
    document.getElementById("zone-ages").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";
  }
  
  function validerReservation() {
    const arrivee = new Date(document.getElementById("arrivee").value);
    const depart = new Date(document.getElementById("depart").value);
  
    if (arrivee >= depart) {
      alert("La date d'arrivée doit être avant la date de départ.");
      return;
    }
  
    const adultes = document.getElementById("adultes").value;
    const enfants = document.getElementById("enfants").value;
    const chambres = document.getElementById("chambres").value;
    const travail = document.getElementById("travail").checked ? "Oui" : "Non";

    const ages = document.getElementsByClassName("age-enfant");
    for (let i = 0; i < ages.length; i++) {
      const age = parseInt(ages[i].value);
      if (isNaN(age) || age < 0 || age > 17) {
        alert("L'âge des enfants doit être entre 0 et 17 ans.");
        return;
      }
    }
  
    document.getElementById("resultat").innerHTML = `
      <h3>Confirmation réservation</h3>
      <p>Nombre d'adultes : ${adultes}</p>
      <p>Nombre d'enfants : ${enfants}</p>
      <p>Nombre de chambres : ${chambres}</p>
      <p>Voyage pour le travail : ${travail}</p>
    `;
  }