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
matches[0] = new Matches (1, 1, teams [0], teams[17], 0, 0, 0, 0, 0);
matches[1] = new Matches (2, 1, teams [1], teams[16], 0, 0, 0, 0, 0);
matches[2] = new Matches (3, 1, teams [2], teams[15], 0, 0, 0, 0, 0);
matches[3] = new Matches (4, 1, teams [3], teams[14], 0, 0, 0, 0, 0);
matches[4] = new Matches (5, 1, teams [4], teams[13], 0, 0, 0, 0, 0);
matches[5] = new Matches (6, 1, teams [5], teams[12], 0, 0, 0, 0, 0);
matches[6] = new Matches (7, 1, teams [6], teams[11], 0, 0, 0, 0, 0);
matches[7] = new Matches (8, 1, teams [7], teams[10], 0, 0, 0, 0, 0);
matches[8] = new Matches (9, 1, teams [8], teams[9], 0, 0, 0, 0, 0);

matches[9] = new Matches (10, 2, teams[17], teams [8], 0, 0, 0, 0, 0);
matches[10] = new Matches (11, 2,teams[16],teams [7], 0, 0, 0, 0, 0);
matches[11] = new Matches (12, 2,teams[15],teams [6], 0, 0, 0, 0, 0);
matches[12] = new Matches (13, 2,teams[14],teams [5], 0, 0, 0, 0, 0);
matches[13] = new Matches (14, 2,teams[13],teams [4], 0, 0, 0, 0, 0);
matches[14] = new Matches (15, 2,teams[12],teams [3], 0, 0, 0, 0, 0);
matches[15] = new Matches (16, 2,teams[11],teams [2], 0, 0, 0, 0, 0);
matches[16] = new Matches (17, 2,teams[10],teams [1], 0, 0, 0, 0, 0);
matches[17] = new Matches (18, 2, teams[9],teams [0], 0, 0, 0, 0, 0);

/*$(document).ready(()=>{
    if(localStorage.getItem('matches') != null)
    matches = JSON.parse(localStorage.getItem('matches'));
});*/

//Abgabe der einzelnen Tipps je Partie über die Eingabefelder:
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
    
    localStorage.setItem('matches', JSON.stringify(matches));
    }

    function ergeingabe(){
        matches[0].heimErg = $('#spiel1HeimErg').val();
        matches[0].auswErg = $('#spiel1AuswErg').val();
        matches[1].heimErg = $('#spiel2HeimErg').val();
        matches[1].auswErg = $('#spiel2AuswErg').val();
        matches[2].heimErg = $('#spiel3HeimErg').val();
        matches[2].auswErg = $('#spiel3AuswErg').val();
        matches[3].heimErg = $('#spiel4HeimErg').val();
        matches[3].auswErg = $('#spiel4AuswErg').val();
        matches[4].heimErg = $('#spiel5HeimErg').val();
        matches[4].auswErg = $('#spiel5AuswErg').val();
        matches[5].heimErg = $('#spiel6HeimErg').val();
        matches[5].auswErg = $('#spiel6AuswErg').val();
        matches[6].heimErg = $('#spiel7HeimErg').val();
        matches[6].auswErg = $('#spiel7AuswErg').val();
        matches[7].heimErg = $('#spiel8HeimErg').val();
        matches[7].auswErg = $('#spiel8AuswErg').val();
        matches[8].heimErg = $('#spiel9HeimErg').val();
        matches[8].auswErg = $('#spiel9AuswErg').val();
        alert("Die Ergebnisse wurden eingegeben!");  
        
        punktestandBerechnen();
        ausgabe();
    
        localStorage.setItem('matches', JSON.stringify(matches));
        }

//Ermittlung der Punktzahl durch Algorithmus: 
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
    document.getElementById('gesamtpunktzahl').textContent = gesamtpunktzahl;
    }
    }
//Ausgabe der Ergebnisse und der Punktzahl je Spiel:
function ausgabe(){  
    for (var j = 0; j<matches.length;j++){
        $("#erg").append(
            `<tr>
            <td>${matches[j].punkte}</td>
            </tr>`
        );            
    }
    }
//Startfunktion zur Einblendung der einzelnen Partien:
function partienEinblenden(){
    
    var eingabeSpieltag = document.getElementById("spieltag").value;
    for(var counter = 0;counter<1;counter++){
        
        for (var j = 0; j<matches.length;j++){
            if (matches[j].spieltag == eingabeSpieltag){
            $("#partie").append(
                `<tr>
                <td>${matches[j].heimTeam}</td>
                <td>${matches[j].auswTeam}</td>
                </tr>`
                );   
            }
        }
    
    }
    
    partienEinblenden = function() {
        console.log('Die Funktion wurde bereits ausgeführt');
    }
    
}

function ausgabekomplett(){
    
        var matches = JSON.parse(localStorage.getItem('matches'));
       
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
    document.getElementById('gesamtpunktzahl2').textContent = gesamtpunktzahl;
    }

    }

function deleteStorage(){
        localStorage.clear();
        location.reload();
        alert("Sie haben nun alle Eingaben und Tipps gelöscht!");  
    }