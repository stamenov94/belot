var resultSum, oldResultOne, oldResultTwo, oldResultSumOne, oldResultSumTwo, tableResult;


function addItem() {
    var newResultTeam1 = document.getElementById('newResultTeam1').value;
    var newResultTeam2 = document.getElementById('newResultTeam2').value;

    var tableResult = document.getElementById('table');
    if (tableResult.rows.length > 2) {
        document.getElementById('table').deleteRow(tableResult.rows.length - 1);
    }

    var row = tableResult.insertRow(-1); //inserts in the last line

    var resultTeamOne = row.insertCell(0); //result cell 1
    var resultTeamTwo = row.insertCell(1); //result cell 2

    if (tableResult.rows.length < 2) {
        resultTeamOne.innerHTML = newResultTeam1;
        resultTeamTwo.innerHTML = newResultTeam2;
    } else {
        if (tableResult.rows.length > 2) {
            resultTeamOne.innerHTML = oldResultSumOne + ' - ' + newResultTeam1;
            resultTeamTwo.innerHTML = oldResultSumTwo + ' - ' + newResultTeam2;
        } else {
            resultTeamOne.innerHTML = oldResultOne + ' - ' + newResultTeam1;
            resultTeamTwo.innerHTML = oldResultTwo + ' - ' + newResultTeam2;
        }
    }

    if (tableResult.rows.length > 1) {
        var tableResult = document.getElementById('table');

        var rowNew = tableResult.insertRow(-1); // inserts last row
        var resultTeamOne1 = rowNew.insertCell(0);
        var resultTeamTwo2 = rowNew.insertCell(1);

        if (tableResult.rows.length > 3) {
            resultTeamOne1.innerHTML = +oldResultSumOne + +newResultTeam1;
            resultTeamTwo2.innerHTML = +oldResultSumTwo + +newResultTeam2;

            oldResultSumOne = +oldResultSumOne + +newResultTeam1;
            oldResultSumTwo = +oldResultSumTwo + +newResultTeam2;
        } else {
            resultTeamOne1.innerHTML = +oldResultOne + +newResultTeam1;
            resultTeamTwo2.innerHTML = +oldResultTwo + +newResultTeam2;
            oldResultSumOne = +oldResultOne + +newResultTeam1;
            oldResultSumTwo = +oldResultTwo + +newResultTeam2;
        }
    }



    if ((oldResultSumOne >= 151) || (oldResultSumTwo >= 151)) {
        if (oldResultSumOne > oldResultSumTwo) {
            alert('Отбор 1 печели');

        } else if (newResultTeam1 < newResultTeam2) {
            alert('Отбор 2 печели');

        } else {
            alert('Равен резултат');
        }
    }

    oldResultOne = newResultTeam1;
    oldResultTwo = newResultTeam2;



    document.getElementById('newResultTeam1').value = '';
    document.getElementById('newResultTeam2').value = '';

}