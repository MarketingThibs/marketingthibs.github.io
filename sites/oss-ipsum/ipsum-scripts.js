var slider = document.getElementById("nbPara");
var output = document.getElementById("xPara");

// dyn wording on change
output.innerHTML = `Vous voulez ${slider.value} paragraphe dans votre blanquette ?`;

slider.oninput = function() {
  output.innerHTML = this.value > "1" ? labelWording = `Vous voulez ${this.value} paragraphes dans votre blanquette ?` : `Vous voulez ${this.value} paragraphe dans votre blanquette ?`;
};


const ipBtn = document.querySelector("#btn");
const ossIpsum = document.querySelector("#ossIpsum");

ipBtn.addEventListener("click", function() {
    const finalValueSlider = slider.value;
    const lineBreak = document.getElementById("lineBreak");
    let breakTheLine;
    lineBreak.checked ? breakTheLine = `<br><br>` : breakTheLine = `\n\n`;
    // console.log('checkbox checked ? ' + lineBreak.check);
    // console.log('breakTheLine : ' + breakTheLine);
    // console.log(finalValueSlider);
    // ipsum content
    const oneParaText = [`Pour sceller notre amitié, je… Je veux te donner quelque chose. Regarde. C'est notre raïs à nous. C'est monsieur René Coty, un grand homme. Il marquera l'histoire. Il aime les cochinchinois, les malgaches, les marocains, les sénégalais. C'est donc ton ami. Ce sera ton porte-bonheur. Merci sidi.`,`Comment est votre blanquette ? La blanquette est bonne. Comment est votre blanquette ? La blanquette est bonne. Ravi de vous voir, Hubert. Voici ce que vous vouliez. Voyons cela. Ah, grand Dieu… Qu'est-ce donc ? Une très mauvaise nouvelle.`,`Son fils, Heinrich est ici à Rio, je crois me souvenir qu'il habite dans la Favela, aux dernières nouvelles il vivait dans un groupe hippie. Dans un quoi ? Groupe hippie. Oh mon dieu... vivre dans l'urine c'est affligeant... Mais où va le monde ? Non, non, non dans un Groupe Hippie.`,`Merci à toi, Slimane. Slimane, tu te sentais orphelin depuis le départ de monsieur Jefferson. Sois rassuré, je suis là, maintenant. Je suis Lucien Bramard, ton nouveau directeur. Mais je suis avant tout ton ami.`,`Merci, sidi. Pour sceller notre amitié, je… Je veux te donner quelque chose. Regarde. C'est notre raïs à nous. C'est monsieur René Coty, un grand homme. Il marquera l'histoire. Il aime les cochinchinois, les malgaches, les marocains, les sénégalais. C'est donc ton ami. Ce sera ton porte-bonheur. Merci sidi. Jack… Jack… Jack… Qu'est-ce que vous faites, Lucien ?`,`Hmm… Ça me sert à rien. Sauf si je dois compter jusqu'à cinq. Et là en revanche, ça pourrait me servir. Il ne faut pas que je dépasse cinq, car je ne connais pas six. Je suis battu… Je crois qu'il faut tenter le coup. Le jeu en vaut la chandelle, Larmina. Oui, le jeu en vaut la chandelle.`];
    const twoParaText = [`Mes amis !! Je comprends votre colère ! je comprends votre haine ! Mais de grâce, méfiez vous du cynisme, méfiez vous des solutions hatives ! Oh bien sur je vois bien ce qui vous plait dans le nazisme, d'ailleurs qui pourrait vous jeter la pierre... Moi-même parfois il m'arrive de me fâcher. Mais êtes vous sûrs qu'il n'y a pas d'autres solutions ? Etes vous sûrs que les enfants que vous étiez rêvaient d'un monde comme celui-là ? Je suis sûr qu'il y a encore un peu de ces enfants en vous, et c'est à eux que je m'adresse ; et je voudrais leur poser une queston, une simple qustion : et si le 5e reich était plutôt celui... de l'amour ?${breakTheLine}Vous savez, Dolorès, je vous ai vu parler avec cette fillette. Vous savez ce que je me suis dit ? Je me suis dit que vous étiez faite pour avoir des enfants, que vous n'avez rien à faire dans ce métier dangereux et que votre place était à la maison à vous occuper de vos enfants avec douceur. Vous savez, Dolorès, c'est un compliment que je fais rarement, mais vous avez l'étoffe d'une mère de famille.`,`Nigel Gardenborough. Je dirige le consortium britannique d'élevage d'agneaux.Lucien Bramard. Que signifie ce mot ?Il signifie que je sais qui vous êtes. J'ai essayé plusieurs fois de vous contacter, mais… Vous êtes un peu soupe-au-lait. ${breakTheLine}Ah, pardonnez-moi. On n'est jamais trop prudent. Cette ville est un tel nid d'espions… Que voulez-vous ? Je voulais vous prévenir d'un grand danger. Jefferson, Jack Jeffer… Mais qu'est-ce qui vous prend, mon petit vieux ? Oh mon Dieu !`];
    const threeParaText = [`Qui êtes-vous, qu'est-ce que vous faites ici et à qui ai-je l'honneur ? Du calme, du calme. Lucien, je vous présente Gerhard Moeller. Il dirige la SEB, la Société Égyptienne d'Élevage de Bœufs. Enchanté, mais tout cela ne répond pas à ma deuxième question. Laquelle ?${breakTheLine}Qu'est-ce que… Qu'est-ce que vous faites ici ? Je suis venu prendre des nouvelles de mon ami Jefferson, simplement. Il y a un moment que je ne l'ai pas vu. Jack est en Jordanie. C'est un marché très prometteur en termes de poulets. Me voilà rassuré. Merci. Dites-moi, je n'ai pas l'honneur de vous connaître. Pourtant, c'est petit ici. ${breakTheLine}Tout le monde connaît tout le monde. Lucien Bramard, je suis l'associé de Jack. Très bien. Enchanté. Et, euh… Bienvenue au Caire. Méfiez-vous de lui, Lucien. Jack ne l'aimait pas. Ne vous inquiétez pas, Larmina. S'il y a quelque chose à découvrir… je le découvrirai.`,`Bonjour. Oh, bonjour Larmina. Bien dormi. Oui, très bien, merci. J'ai fait un rêve merveilleux. J'ai rêvé qu'une femme sublime aux yeux marrons m'apportait mon petit-déjeuner au lit. Vous dites ça à toutes les femmes ?${breakTheLine}Non, seulement aux femmes sublimes aux yeux marrons qui m'apportent mon petit-déjeuner au lit.Bismillah. J'aime me beurrer la biscotte. Dites-moi, Larmina. Cette nuit, j'ai été réveillé par des cris horribles. Un homme hurlait à la mort de la tour, là-bas. Impossible de dormir. J'ai été obligé de le faire taire.${breakTheLine}Le muezzin ? Vous avez fait taire le muezzin ? Le ? Muezzin. Le prêtre qui appelle les fidèles à la prière du matin. Ah j'ignorais. C'était donc ça tout ce tintouin, les cris, le micro… D'accord. Hmm… On m'enlèvera pas l'idée que c'est une curieuse religion. À mon avis, vous allez vite vous en lasser. Je ne lui prédis pas un grand avenir. Dites-moi Larmina, mon petit. Ça vous embêterait de me déposer à la SCEP, histoire de fouiner un peu ? Mais bien sûr, Lucien. Choukran.`,`Comment avez-vous fait ça ? Ma chère, quand on s'intéresse à une culture, on en apprend la langue. En l'occurrence, il s'agit de hiéroglyphes. Comment va-t-on sortir d'ici ? On ne pourra jamais sortir d'ici. Personne n'est jamais sorti d'ici. La pyramide de Khephren sera notre tombeau ! Tout ce qu'on retrouvera de nous dans cent-cinquante ans, ce sera nos squelettes ! On est emmurés à vie ! À vie ! Condamnés à manger nos doigts, et nos pieds, nos vêtements, puis… ON VA TOUS CREVER !${breakTheLine} Vous venez, Larmina ? Merci monsieur Bramard. Vous m'avez sauvée. Je ne vous ai pas sauvée. Je ne supportais pas les allégations de ce fasciste sur ma sexualité, c'est différent. Comment vont vos amis les Aigles de Khéops ? Ils vont bien, je vous remercie. Ils se battent pour la bonne cause.${breakTheLine}Une bonne cause ? Qui leur a valu de me jeter au fond du canal de Suez au milieu d'une forêt de squelettes. D'ailleurs… Voici le Jokari que j'y ai trouvé autour du cou de votre père. Votre père était influent, un saint-homme. Ce n'était sans doute pas un banal incident de Jokari. Venez, nous avons une grosse heure de dromadaire. Ne pleurez pas, Larmina. Cherchez plutôt à qui profite le crime.`];
    const fourParaText = [`Hubert, la situation en Égypte inquiète en plus haut lieu. Le président Coty ? Oui. Le président Coty. Alors, ils mangeront ? Comment est votre blanquette ? La blanquette est bonne. Hubert ? Deux blanquettes et un pot de brouillis. On me dit le plus grand bien de vos harengs pommes à l'huile.${breakTheLine}Je vous en sers un ramequin, vous vous ferez une idée. Nous avons besoin de vous sur place. D'un expert, un spécialiste du monde arabo-musulman. Arabo ? Musulman. Cherchez ce qu'avait découvert Jefferson et trouvez-moi qui l'a tué. Comptez sur moi.${breakTheLine}Profitez-en pour me calmer tout ce petit monde, hein ? Américains, Soviétiques, Anglais… Confortez les positions de la France et instaurez la paix en Égypte. Bien sûr. Enfin, sécurisez le Proche-Orient. Pas de problèmes.${breakTheLine} Votre contact vous attendra à l'aéroport du Caire, devant la mappemonde. Procédure habituelle ? Procédure habituelle. Vous êtes Lucien Bramard, industriel, l'associé de Jack Jefferson. Bienvenue au Caire, OSS 117, royaume des pharaons, des tombeaux mystérieux, mais aussi véritable nid d'espions.`];
    const fiveParaText = [`Ah ! Messieurs, je vous présente le nouvel associé de monsieur Jefferson, Lucien Bramard. Lucien, Gerhart Moeller, que vous connaissez déjà. En effet. Ravi de vous revoir, monsieur Bramard. Plaisir partage, Herr Moeller. Raymond Pelletier, qui dirige la SBEP, la Société Belgo-Égyptienne d'élevage de Poulets. Votre concurrent et ami.${breakTheLine} Bonjour. Enchanté. Et enfin, Ieveni Setine. Il est éleveur de moutons. Enchanté. Monsieur Bramard, cigarette ? Merci, j'essaie de commencer. Mademoiselle ? Merci.Permettez ?${breakTheLine}Mais je vous en prie. Ce serait pour moi une joie de vous faire découvrir les pyramides, monsieur Bramard. Et pour moi un honneur d'avoir un tel guide. Un philosophe a dit un jour : "Le mystère des pyramides, c'est le mystère de la conscience dans laquelle on n'entre pas".${breakTheLine} Les pharaons se faisaient enterrer avec leurs serviteurs. Lorsque l'on meure, souvent, on voudrait que tout s'arrête avec soi. Mais c'est le cycle même de la vie. Lorsque quelqu'un ou quelque chose meure, quelqu'un ou quelque chose naît ailleurs. Nous tentons d'oublier que nous sommes des animaux, mais la nature nous le rappelle. Parfois cruellement.${breakTheLine}Des scientifiques font des expériences sur des mouches drosophiles parce que la structure de leur cerveau est extrêmement proche de la nôtre. Le cheval nous voit plus grand que nous sommes avec son œil déformant. Ce n'est que grâce à cela que nous l'avons domestiqué. C'est notre œil, notre regard, qui nous dicte notre façon d'agir par rapport aux autres. Mais on peut être myope. Ah…${breakTheLine} L'aveugle ne voit pas, il ressent. Et paradoxalement, il voit. Si le chat a la queue verticale, c'est qu'il est en confiance. Et le cul-de-jatte a une jambe qui le démange encore. Quand une femme change d'homme, elle change de coiffure. Il faut laisser pleurer un nourrisson quand il va au lit. Sinon, on sacralise trop son coucher. Hmm… On va boire un verre, ou… ? On va pas au bar ? Mister Bramard ? Oui ? Excusez-moi`];
    // Text output random
    const randomIndexOne = Math.floor(Math.random() * oneParaText.length);     
    const randomIndexTwo = Math.floor(Math.random() * twoParaText.length);     
    const randomIndexThree = Math.floor(Math.random() * threeParaText.length);     
    const randomIndexFour = Math.floor(Math.random() * fourParaText.length);     
    const randomIndexFive = Math.floor(Math.random() * fiveParaText.length);     

    let finalFart;
    switch (finalValueSlider) {
        case '1':
          finalFart = `${oneParaText[randomIndexOne]}`;
        break;
        case '2':
          finalFart = `${twoParaText[randomIndexTwo]}`;
        break;
        case '3':
          finalFart = `${threeParaText[randomIndexThree]}`;
        break;
        case '4':
          finalFart = `${fourParaText[randomIndexFour]}`;
        break;
        case '5':
          finalFart = `${fiveParaText[randomIndexFive]}`;
        break;
  };
  ossIpsum.innerHTML = finalFart;
});

// Copy ipsum
let copyCode = document.querySelector("#copyCode");
copyCode.addEventListener("click", function copySource() {
  /* Get the text field */
  var copyText = document.getElementById("ossIpsum");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
});