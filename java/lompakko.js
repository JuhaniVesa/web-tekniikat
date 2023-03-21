function vertaile(){
    let lomp = Number(document.getElementById("lompakko").value);
    let lip = Number(document.getElementById("lippu").value);
    let teksti

    if (lomp >= lip){
        teksti = "Saat ostettua elokuvalipun";
}
        else {
        teksti = "Säästä vielä"
        }
    document.getElementById("result2").innerHTML = teksti;
}

function vastaus(){
    let lomp1 = Number(document.getElementById("lompakko").value);
    let lip1 = Number(document.getElementById("lippu").value);
    document.getElementById("result1").innerHTML = "Sinulla on " + lomp1 + " verran rahaa ja elokuvalippu maksaa " + lip1;
}