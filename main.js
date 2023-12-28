

var teams=[18];
    teams[0] = "FC Bayern München";
    teams[1] = "FC Augsburg";
    teams[2] = "Borussia Dortmund";
    teams[3] = "Mainz 05";
    teams[4] = "Eintracht Frankfurt";
    teams[5] = "1899 Hoffenheim";
    teams[6] = "VfB Stuttgart";
    teams[7] = "VfL Bochum";
    teams[8] = "1. FC Köln";
    teams[9] = "Borussia Mönchengladbach";
    teams[10] = "Bayer 04 Leverkusen";
    teams[11] = "Union Berlin";
    teams[12] = "VfL Wolfsburg";
    teams[13] = "SV Werder Bremen";
    teams[14] = "SC Freiburg";
    teams[15] = "RB Leipzig";
    teams[16] = "1. FC Heidenheim";
    teams[17] = "Darmstadt 98";


class Matches {
    
    constructor (matchIndex, spieltag, heimTeam,auswTeam, heimTip,auswTip,heimErg,auswErg,punkte){
        this.matchIndex = matchIndex;
        this.spieltag = spieltag;
        this.heimTeam = heimTeam;
        this.auswTeam = auswTeam;
        this.heimTip = heimTip;
        this.auswTip = auswTip;
        this.heimErg = heimErg;
        this.auswErg = auswErg;
        this.punkte = punkte;
    }
}
var matches = [313]
matches[0] = new Matches (1, 1, teams [0], teams[17], 0, 0, 6, 5, 0);
matches[1] = new Matches (2, 1, teams [1], teams[16], 0, 0, 0, 2, 0);
matches[2] = new Matches (3, 1, teams [2], teams[15], 0, 0, 0, 3, 0);
matches[3] = new Matches (4, 1, teams [3], teams[14], 0, 0, 3, 1, 0);
matches[4] = new Matches (5, 1, teams [4], teams[13], 0, 0, 1, 1, 0);
matches[5] = new Matches (6, 1, teams [5], teams[12], 0, 0, 0, 0, 0);
matches[6] = new Matches (7, 1, teams [6], teams[11], 0, 0, 2, 0, 0);
matches[7] = new Matches (8, 1, teams [7], teams[10], 0, 0, 2, 2, 0);
matches[8] = new Matches (9, 1, teams [8], teams[9], 0, 0, 0, 5, 0);

var gesamtpunktzahl = 0;


for(var i = 0; i < matches.length; i++){

    if (matches[i].heimTip == matches[i].heimErg && matches[i].auswTip == matches[i].auswErg){
        matches[i].punkte = 3;
    }
    else if(matches[i].heimTip >> matches[i].auswTip && matches[i].heimErg >> matches[i].auswErg && matches[i].heimTip != matches[i].heimErg){
        matches[i].punkte = 2;
    }
    else{matches[i].punkte = 0;}
gesamtpunktzahl += matches[i].punkte;


console.log("Spielnummer: " + matches[i].matchIndex);
console.log("Spieltag: " + matches[i].spieltag);
console.log("Begegnung: " + matches[i].heimTeam + " - " + matches[i].auswTeam);
console.log("Mein Tipp: " + matches[i].heimTip + ":" + matches[i].auswTip);
console.log("Das Ergebnis: " + matches[i].heimErg + ":" + matches[i].auswErg);
console.log("erzielte Punktzahl: " + matches[i].punkte);
console.log("_____________________________");

}
console.log("Deine Gesamtpunktzahl des Spieltages: " + gesamtpunktzahl);

document.getElementById('gesamtpunktzahl').textContent = gesamtpunktzahl;




function tipabgabe(){
    
    matches[0].heimTip = $('#spiel1HeimTip').val();
    matches[0].auswTip = $('#spiel1AuswTip').val();
    matches[1].heimTip = $('#spiel2HeimTip').val();
    matches[1].auswTip = $('#spiel2AuswTip').val();
    matches[2].heimTip = $('#spiel3HeimTip').val();
    matches[2].auswTip = $('#spiel3AuswTip').val();
    matches[3].heimTip = $('#spiel4HeimTip').val();
    matches[3].auswTip = $('#spiel4AuswTip').val();
    matches[4].heimTip = $('#spiel5HeimTip').val();
    matches[4].auswTip = $('#spiel5AuswTip').val();
    matches[5].heimTip = $('#spiel6HeimTip').val();
    matches[5].auswTip = $('#spiel6AuswTip').val();
    matches[6].heimTip = $('#spiel7HeimTip').val();
    matches[6].auswTip = $('#spiel7AuswTip').val();
    matches[7].heimTip = $('#spiel8HeimTip').val();
    matches[7].auswTip = $('#spiel8AuswTip').val();
    matches[8].heimTip = $('#spiel9HeimTip').val();
    matches[8].auswTip = $('#spiel9AuswTip').val();
    alert("Ihre Tips wurden abgegeben!");
    
console.log(matches[0].heimTip);
console.log(matches[0]);
}

function punktestandBerechnen(){

var gesamtpunktzahl = 0;
for(var i = 0; i < matches.length; i++){

    if (matches[i].heimTip == matches[i].heimErg && matches[i].auswTip == matches[i].auswErg){
        matches[i].punkte = 3;
    }
    else if(matches[i].heimTip >> matches[i].auswTip && matches[i].heimErg >> matches[i].auswErg && matches[i].heimTip != matches[i].heimErg){
        matches[i].punkte = 2;
    }
    else{matches[i].punkte = 0;}
gesamtpunktzahl += matches[i].punkte;
}

for (var j = 0; j<matches.length;j++){
    $("#ausgabe").append(
        `<tr>
        <td>${matches[j].heimTeam}</td>
        <td>${matches[j].auswTeam}</td>
        <td>${matches[j].heimTip}</td>
        <td>${matches[j].auswTip}</td>
        <td>${matches[j].heimErg}</td>
        <td>${matches[j].auswErg}</td>
        <td>${matches[j].punkte}</td>
        </tr>`
    );        
}
}

