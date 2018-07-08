/* Default value */
document.getElementById('expectedSum').value = 1000;
document.getElementById('expectPeriod').value = 50;
document.getElementById('totalVal').innerHTML = '$' + 50000;
document.getElementById("updateText").innerHTML = 'widgets';
document.getElementById("setPeriod").innerHTML = 'year';
document.getElementById("totalPer").innerHTML = 'year';
document.getElementById('textCalc').value = 'widgets';


function updateValue(event, id) {
    const new_value = event.value;
    document.getElementById(id).innerHTML = new_value;
    
   
}

function inputSize(id) {
  let value = document.getElementById(id).value;
  document.getElementById(id).size = ( value.length > 10 ) ? value.length : 10;
  
}

function isNumberKey(evt)
{
    let charCode = (evt.which) ? evt.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

    return true;
}

let nextWord = ((id) => {
    let wordArray = ['week','day','year'];
    let count = -1;

    return () => {
      
      return wordArray[++count % wordArray.length];
    }
  })();


  let nextWord2 = ((id) => {
    let wordArray = ['month','day','year'];
    let count = -1;

    return () => {
      
      return wordArray[++count % wordArray.length];
    }
  })();


  function toggleCalculator() {
    var mainFrameOne = document.getElementById("calculator1"); 
    var mainFrameTwo = document.getElementById("calculator2");
 
    mainFrameOne.style.display = (
        mainFrameOne.style.display == "none" ? "block" : "none"); 
    mainFrameTwo.style.display = (
        mainFrameTwo.style.display == "none" ? "block" : "none"); 
 }
/* ============================================ */


function checkTotal() {
  let total;
  expectedSum = document.getElementById('expectedSum').value;
  expectedPeriod = document.getElementById('expectPeriod').value;

  perSum = document.getElementById ( "setPeriod" ).textContent;
  perTotal = document.getElementById ( "totalPer" ).textContent;

  if(perSum == perTotal) {
    total = expectedSum * expectedPeriod;
  }
  if(perSum == 'year' && perTotal == 'month') {
    total = ((expectedSum * expectedPeriod)/12).toFixed(2);
  }
  if(perSum == 'year' && perTotal == 'day') {
    total = ((expectedSum * expectedPeriod) /365).toFixed(2);
  }
  if(perSum == 'week' && perTotal == 'year') {
    total = (expectedSum * expectedPeriod * 52).toFixed(2);
  }
  if(perSum == 'week' && perTotal == 'month') {
    total = ((expectedSum * expectedPeriod) *4).toFixed(2);
  }
  if(perSum == 'week' && perTotal == 'day') {
    total = ((expectedSum * expectedPeriod) /30).toFixed(2);
  }
  if(perSum == 'day' && perTotal == 'year') {
    total = ((expectedSum * expectedPeriod) *365).toFixed(2);
  }
  if(perSum == 'day' && perTotal == 'month') {
    total = ((expectedSum * expectedPeriod) * 12).toFixed(2);;
  }

  document.getElementById('totalVal').innerHTML =  '$' + total;
}

function checkTotal2() {
  let total;
  expectedSum = document.getElementById('cal2ExpectedSum').value;
  expectedPeriod = document.getElementById('cal2ExpectPeriod').value;
  perSum = document.getElementById ( "cal2SumPeriod" ).textContent;
  perTotal = document.getElementById ( "cal2PartPeriod" ).textContent;

  if(perSum == perTotal) {
    total = expectedSum / expectedPeriod;
  }
  if(perSum == 'year' && perTotal == 'month') {
    total = ((expectedSum / expectedPeriod)/12).toFixed(2);
  }
  if(perSum == 'year' && perTotal == 'day') {
    total = (expectedSum / (expectedPeriod * 365)).toFixed(2);
  }
  if(perSum == 'week' && perTotal == 'year') {
    total = ((expectedSum *52) / expectedPeriod ).toFixed(2);
  }
  if(perSum == 'week' && perTotal == 'month') {
    total = ((expectedSum *4) / expectedPeriod ).toFixed(2);
  }
  if(perSum == 'week' && perTotal == 'day') {
  total = ((expectedSum / 7) / expectedPeriod ).toFixed(2);
  }
  if(perSum == 'day' && perTotal == 'year') {
    total = ((expectedSum * 365) / expectedPeriod ).toFixed(2);
  }
  if(perSum == 'day' && perTotal == 'month') {
    total = ((expectedSum * 30) / expectedPeriod ).toFixed(2);;
  }

  document.getElementById('cal2TotalVal').innerHTML =  '$' + total;
}
