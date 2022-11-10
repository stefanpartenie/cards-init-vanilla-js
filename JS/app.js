let content = document.querySelector(".content");

content.innerHTML = createCarduri(carduri);

// adaugare persoana

let adaugaPersoana=document.querySelector(".add-persoana");
let adaugaNume=document.querySelector(".nume");
let adaugaPrenume=document.querySelector(".prenume");
let adaugaDataNasterii=document.querySelector(".data-nasterii");
let adaugaSexM=document.querySelector(".sexm");
let adaugaSexF=document.querySelector(".sexf");
let adaugaCnp=document.querySelector(".cnp");


adaugaPersoana.addEventListener("click",()=>{


  let persoana={

    nume: adaugaNume.value,
    prenume: adaugaPrenume.value,
    data_nasterii: adaugaDataNasterii.value,
    sex: adaugaSexM.checked?"M":"F",
    cnp: +adaugaCnp.value
  }



  carduri.push(persoana);


  content.innerHTML = createCarduri(carduri);



})


content.addEventListener("click",(e)=>{


  let obj=e.target;

  if(obj.tagName==="BUTTON"){


      console.log(obj.classList[0]);
  }
})