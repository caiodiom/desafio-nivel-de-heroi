let heroi = {
    nome: "Aatrox",
    xp: 7500
  };
  

  function determinarNivel(xp) {
    if (xp < 1000) {
      return "Ferro";
    } else if (xp <= 2000) {
      return "Bronze";
    } else if (xp <= 5000) {
      return "Prata";
    } else if (xp <= 7000) {
      return 
   "Ouro";
    } else if (xp <= 8000) {
      return "Platina";
    } else if (xp <= 9000) {
      return "Ascendente";
    } else if (xp <= 10000) {
      return "Imortal";
    } else {
      return "Radiante"; 
  
    }

  }

  let nivel = determinarNivel(heroi.xp);

  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
  