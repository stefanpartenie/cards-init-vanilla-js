
function createCard(carduri){


    let div=`

    <div>
    <p>${carduri.nume}</p>
    <p>${carduri.prenume}</p>
    <p>${carduri.data_nasterii}</p>
    <p>${carduri.sex}</p>
    <p>${carduri.cnp}</p>
    <button class="${carduri.nume}">Delete</button>
    </div>
    `


    return div;
}

function createCarduri(arr){
    let text="";
    for(let i=0;i<arr.length;i++){

        text+=createCard(arr[i]);
    }

return text;

}


//afisare persoanele de sex masculin



//afisare persoane de sex feminin


function searchBySexF(arr,sex){
    
    let filtrate=[];
    for(let i=0; i<arr.length;i++){
        if(arr[i].sex==sex)
        {
           filtrate.push(arr[i]);
        }
    }

    return filtrate;

}


//functie ce afiseeaza cartile care sunt in stoc

function searchBySexM(arr,sex){
    
    let filtrate=[];
    for(let i=0; i<arr.length;i++){
        if(arr[i].sex==sex)
        {
           filtrate.push(arr[i]);
        }
    }

    return filtrate;

}

//todo:functie ce primeste ca parametru un arr si sterge masina dupa nume



