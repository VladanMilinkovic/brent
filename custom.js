/* Default value */
let exSum = 1000;
let totVal = 5000;
let exPer = 50;
document.getElementById('expectedSum').value = exSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById('expectPeriod').value = exPer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById('totalVal').innerHTML =  totVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("updateText").innerHTML = 'widget';
document.getElementById("setPeriod").innerHTML = 'year';
document.getElementById("totalPer").innerHTML = 'year';
document.getElementById('textCalc').value = 'widgets';

document.getElementById('cal2ExpectedSum').value = totVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById('cal2ExpectPeriod').value = exSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


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
    let charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }else {
      return true;
    }
      

    
}

let nextWord = ((id) => {
    let wordArray = ['month','week','day','year'];
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

    if(document.getElementById("switch").className == "switch") {
      document.getElementById("switch").className = "switch2";
    } else {
      document.getElementById("switch").className = "switch";
    }
    
 }


 function resizeInput(type) {
   
  var input = document.getElementsByTagName('input')[type];  

  input.onkeyup  = function(event) {


      let num = input.value.replace(/,/gi, "");
      let num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
    
      input.value= num2;
    
      let charCode = (event.which) ? event.which : event.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      
      if(this.value.length > 3 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 38 & event.keyCode != 39 && event.keyCode != 40) {
        if (window.screen.availWidth < 600) {
          document.getElementsByTagName('input')[type].style.width = input.clientWidth + 30 + 'px';
        }else {
          document.getElementsByTagName('input')[type].style.width = input.clientWidth + 50 + 'px';
        }
        
      }
      if(event.keyCode == 8) {
        if (window.screen.availWidth < 600) { 
          if(input.clientWidth > 100) {
            document.getElementsByTagName('input')[type].style.width = input.clientWidth - 25 + 'px';
          } else {
            document.getElementsByTagName('input')[type].style.width = input.clientWidth - 25 + 'px';
          }
        }
        else {
          if(input.clientWidth > 100) {
            document.getElementsByTagName('input')[type].style.width = input.clientWidth - 45 + 'px';
          } else {
            document.getElementsByTagName('input')[type].style.width = input.clientWidth - 35 + 'px';
          }
        }
      
      }


     
      // Math.max(this.value.length, 10)
  };
}
/* ============================================ */


function checkTotal() {
  let total;
  check_expectedSum = document.getElementById('expectedSum').value.replace(',', '');
  check_expectedPeriod = document.getElementById('expectPeriod').value.replace(',', '');

  expectedSum = check_expectedSum.replace(/\,/g,'');
  expectedPeriod = check_expectedPeriod.replace(/\,/g,'');


  perSum = document.getElementById ( "setPeriod" ).textContent.replace(',', '');
  perTotal = document.getElementById ( "totalPer" ).textContent.replace(',', '');

  if(perSum == perTotal) {
    total = expectedSum * expectedPeriod;
  }
  if(perSum == 'year' && perTotal == 'month') {
    total = ((expectedSum * expectedPeriod)/12).toFixed(0);
  }
  if(perSum == 'year' && perTotal == 'day') {
    total = ((expectedSum * expectedPeriod) /365).toFixed(0);
  }
  if(perSum == 'year' && perTotal == 'week') {
    total = ((expectedSum / expectedPeriod) /52).toFixed(0);
  }
  if(perSum == 'week' && perTotal == 'year') {
    total = (expectedSum * expectedPeriod * 52).toFixed(0);
  }
  if(perSum == 'week' && perTotal == 'month') {
    total = ((expectedSum * expectedPeriod) *4).toFixed(0);
  }
  if(perSum == 'week' && perTotal == 'day') {
    total = ((expectedSum * expectedPeriod) /30).toFixed(0);
  }
  if(perSum == 'day' && perTotal == 'year') {
    total = ((expectedSum * expectedPeriod) *365).toFixed(0);
  }
  if(perSum == 'day' && perTotal == 'month') {
    total = ((expectedSum * expectedPeriod) * 12).toFixed(0);;
  }
  if(perSum == 'day' && perTotal == 'week') {
    total = ((expectedSum * expectedPeriod) * 7).toFixed(0);;
  }
  if(perSum == 'month' && perTotal == 'year') {
    total = ((expectedSum * expectedPeriod) *12).toFixed(0);
  }
  if(perSum == 'month' && perTotal == 'week') {
    total = ((expectedSum * expectedPeriod) / 4).toFixed(0);;
  }
  if(perSum == 'month' && perTotal == 'day') {
    total = ((expectedSum * expectedPeriod) / 30).toFixed(0);;
  }

  document.getElementById('totalVal').innerHTML =  total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
}

function checkTotal2() {
  let total;
  check_expectedSum = document.getElementById('cal2ExpectedSum').value.replace(',', '');
  check_expectedPeriod = document.getElementById('cal2ExpectPeriod').value.replace(',', '');

  expectedSum = check_expectedSum.replace(/\,/g,'');
  expectedPeriod = check_expectedPeriod.replace(/\,/g,'');

  perSum = document.getElementById ( "cal2SumPeriod" ).textContent;
  perTotal = document.getElementById ( "cal2PartPeriod" ).textContent;

  if(perSum == perTotal) {
    total = expectedSum / expectedPeriod;
  }
  if(perSum == 'year' && perTotal == 'month') {
    total = ((expectedSum / expectedPeriod)/12).toFixed(0);
  }
  if(perSum == 'year' && perTotal == 'day') {
    total = (expectedSum / (expectedPeriod * 365)).toFixed(0);
  }
  if(perSum == 'year' && perTotal == 'week') {
    total = (expectedSum / (expectedPeriod * 52)).toFixed(0);
  }
  if(perSum == 'week' && perTotal == 'year') {
    total = ((expectedSum *52) / expectedPeriod ).toFixed(0);
  }
  if(perSum == 'week' && perTotal == 'month') {
    total = ((expectedSum *4) / expectedPeriod ).toFixed(0);
  }
  if(perSum == 'week' && perTotal == 'day') {
  total = ((expectedSum / 7) / expectedPeriod ).toFixed(0);
  }
  if(perSum == 'day' && perTotal == 'year') {
    total = ((expectedSum * 365) / expectedPeriod ).toFixed(0);
  }
  if(perSum == 'day' && perTotal == 'month') {
    total = ((expectedSum * 30) / expectedPeriod ).toFixed(0);;
  }
  if(perSum == 'day' && perTotal == 'week') {
    total = ((expectedSum * 7) / expectedPeriod ).toFixed(0);;
  }
  if(perSum == 'month' && perTotal == 'day') {
    total = ((expectedSum / 30) / expectedPeriod ).toFixed(0);
  }
  if(perSum == 'month' && perTotal == 'year') {
    total = ((expectedSum * 12) / expectedPeriod ).toFixed(0);
  }
  if(perSum == 'month' && perTotal == 'week') {
    total = ((expectedSum / 7) / expectedPeriod ).toFixed(0);;
  }

  document.getElementById('cal2TotalVal').innerHTML =  total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

