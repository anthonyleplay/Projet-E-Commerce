// bouton up page
let idBtnUpPage = document.getElementById("btnUpPage");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    idBtnUpPage.style.zIndex = 99;
    idBtnUpPage.style.opacity = "1";
    idBtnUpPage.style.bottom = "20px";
    idBtnUpPage.style.transition = "padding 500ms, opacity 1s, bottom 1s";
  } else {
    idBtnUpPage.style.zIndex = -1;
    idBtnUpPage.style.opacity = "0";
    idBtnUpPage.style.bottom = "0px";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// card pour la page
let idChampagne = document.getElementById("champagne");
let idWine = document.getElementById("wine");
let idSpirit = document.getElementById("spirit");
let idMainArea = document.getElementById("mainArea");
let idCartList = document.getElementById("cartlist");

// EX : let cardNom = ["nom", "champage/img.png", "description", "prix", "ref-0001","cardNom", 0]
//champagne
let cardSiecle = ["Champagne Laurent Perrier Grand Siécle N°24", "assets/img/champagne/siecle.png", "Grand siècle est la cuvée de prestige de la maison Laurent-Perrier, signature de son exigence ! Cette itération n°24 de Grand Siècle est le fruit de l'assemblage de trois années exceptionnelles millésimées (2007, 2006 et 2004) et vieillit 7 années minimum en cave.", "110", "C001", "cardSiecle", 0]
let cardKrug = ["Champagne KRUG - Grande Cuvée 167 Edition", "assets/img/champagne/krug.png", "Krug Grande cuvée est né en 1843 de la volonté de Joseph Krug. Cet assemblage de 191 vins provenant de 13 millésimes diférents (de 1995 à 2011) dont 42% de vins de réserve a reposé durant 7 longues années en cave. Découvrez la 167ème édition et son unique richesse en saveurs et en arômes.", "185", "C002", "cardKrug", 0]
let cardCristal = ["Champagne Louis Roederer - CRISTAL 2012", "assets/img/champagne/cristal.png", "Nous sommes à l'apogée de Cristal, un superbe équilibre, une évanescence scintillante, tant d'élégance et d'harmonie dans les accords. Cette cuvée bénéficie en moyenne de 10 années de maturation en cave avant que le mythe ne s'offre à vous.", "220", "C003", "cardCristal", 0]
let cardWinston = ["Champagne Pol Roger - Cuvée Winston Churchill 2009", "assets/img/champagne/winston.png", "Élaborée uniquement dans les meilleurs millésimes de la maison Pol Roger, la cuvée a été créée en hommage à Sir Winston Churchill, avec pour références les qualités qu'il appréciait dans le champagne: robustesse, charpente et maturité. Un Champagne qui mérite d'être oublié en cave pour dévoiler une palette aromatique exceptionnelle. tout en finesse, simplement un diamant fourni par un millésime d'exception.", "250", "C004", "cardWinston", 0]
let cardBollinger = ["Champagne Bollinger Coffret 007 - Millésime 2011", "assets/img/champagne/bollinger.png", "La Maison Bollinger dévoile pour cet évènement le millésime 2011, exclusivement issus de grands crus de Pinot Noir du village d'Ay. C'est la premère fois que la maison élabore une cuvée issue uniquement de ce cru historique ou la maison est implantée depuis sa création en 1829. Avis aux collectionneurs!", "320", "C005", "cardBollinger", 0]
let cardSalon = ["Champagne Salon - Blanc de Blancs - Le Mesnil 2007", "assets/img/champagne/salon.png", "La Maison Salon nous offre une cuvée complexe, savoureuse et gourmande. On retrouve également beaucoup de précision dans une bouche très nerveuse et envoutante. De très nombreuses années de garde sont devant cette belle cuvée, années durant lesquelles ce Champagne s'affinera et laissera exalter tous ses dons au moment de sa dégustation.", "950", "C006", "cardSalon", 0]
let cardTaittinger = ["Champagne Taittinger Rosé - Comtes de Champagne 2007", "assets/img/champagne/taittinger.png", "Le Comtes de Champagne Rosé puise sa noblesse dans le long vieillissement en caves dont il bénéficie. Durant toutes ces années, ce champagne Grand Cru à la composition pure et exigeante, va affiner sa matière pour parvenir à un équilibre soyeux et savoureux, jusqu’à ce qu’il devienne totalement fondu en une multitude de particules de petit fruits rouges légèrement grillés, un équilibre entre fraîcheur et structure.", "170", "CR001", "cardTaittinger", 0]
let cardKrugR = ["Champagne Krug Rosé - Grande Cuvéé 23 Edition", "assets/img/champagne/krugR.png", "Alliant distinction et audace, Krug rosé est inspiré par le rêve de la cinquième génération de la Maison de Krug. L’édition 23 est un assemblage de 60 vins issus de 10 millésimes différents, le plus jeune datant de 2011 et le plus ancien du millésime 2000. Vieillit 7 années en cave, ce champagne dévoile une largeur et une profondeur étonnantes. Déjà très avenante, cette cuvée révélera toute sa fraîcheur et son élégance après un repos en cave de 5 ans.", "259", "CR002", "cardKrugR", 0]




    //wine
    let cardMeursault = ["Meursault 1er cru Les Charmes", "assets/img/vins/meursault.2017.png", "Ce Premier Cru à la robe or jaune brillante développe gras et richesse tout en laissant une bouche qui s’impose d'une structure volumineuse. Une touche de minéralité attrayante ajoute de la nuance aux arômes de noix, de poire et de zeste d'agrumes torréfiés, on retrouve un bel équilibre puis la finesse reprend ses droits pour guider la fin de bouche qui s’appuie sur une belle tension.", "53,90", "B002", "cardMeursault", 0]
    let cardSerrant = ["Couléé de Serrant", "assets/img/vins/coulee-de-serrant.2015png.png", "La Coulée de Serrant, à Savennières, est réputé pour produire des vins blancs exceptionnels. En biodynamie depuis 1981, élevé en fûts de chêne pendant 6 à 8 mois, produit en très petite quantité, la Coulée de Serrant est issue de vignes de plus de 35/40 ans, certaines ayant plus de 80 ans. Vin aromatique, de sa longueur, et de sa superbe minéralité.", "73,90", "B003", "cardSerrant", 0]


    //spirit

    let cardTalisker = ["Talisker 10 ans", "assets/img/spiritueux/talisker.png", "Unique single malt de l’île de Skye, Talisker 10 ans possède un caractère marin et épicé hors du commun", "44,90", "S001", "cardTalisker", 0]





    //appel fonction
    idChampagne.onclick = showCardChampagne;
    idWine.onclick = showCardWine;
    idSpirit.onclick = showCardSpirit;

    function showCardChampagne() {
      idMainArea.innerText = "";
      createCard(cardSiecle);
      createCard(cardKrug);
      createCard(cardCristal);
      createCard(cardWinston);
      createCard(cardBollinger);
      createCard(cardSalon);
      createCard(cardTaittinger);
      createCard(cardKrugR);
    }

    function showCardWine() {
      idMainArea.innerText = "";

      createCard(cardMeursault);
      createCard(cardSerrant);




    }


    function showCardSpirit() {
      idMainArea.innerText = "";
      createCard(cardTalisker);


    }


    function createCard(type) {
      idMainArea.innerHTML +=
        `   <div class="col-6 col-sm-5 col-md-4 col-lg-3 py-2">
        <div class="card">
        <img src="${type[1]}" class="card-img-top" alt="image ${type[0]}">
        <div class="card-body text-darkwine">
            <h5 class="card-title">${type[0]}</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-dark text-pinkwhite bg-pinkdark" data-toggle="modal" data-target="#${type[4]}">Ajouter au Panier</a>
            <span class="badge text-pinkwhite bg-darkwine">${type[3]}€</span>
        </div>
        </div>
    
        <div class="modal fade" id="${type[4]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-darkwine">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${type[0]}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <p>${type[2]} </p>
                  <p>Voulez vous ajouter cet article dans votre panier ?<br>
                  <i>ref: ${type[4]}</i>
                  </p>
                </div>
                <div class="modal-footer">
                
                    <button type="button" class="btn btn-dark text-pinkwhite bg-pinkdark" data-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-dark text-pinkwhite bg-darkwine" onclick="addToBasket(${type[5]})" data-dismiss="modal" >Mettre dans le panier</button>
                </div>
            </div>
        </div>
        </div>
      </div>`
    }

    function addToBasket(type) {

      if (type[6] === 0) {
        console.log(type[6] + "oui")
        type[6]++;
        idCartList.innerHTML +=
          `<tr>
      <th scope="row"><img src="${type[1]}" class="card-img-top" style="width: 2em;" alt="image ${type[0]}"></th>
      <td>${type[0]}</td>
      <td>${type[3]}€</td>
      <td id="number${type[5]}">${type[6]}</td>
    </tr>`;

      } else {
        type[6]++;
        let idnumber = document.getElementById(`number${type[5]}`)
        idnumber.innerText = type[6]
        console.log(type[6] + "non")
      }
    }