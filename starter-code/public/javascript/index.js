
function writeMaxMin(x,y){
  var min = Math.min.apply(0,y);
  var max = Math.max.apply(0,y);
  console.log(min, max);
  document.getElementById("max").value = max;
  document.getElementById("min").value= min;
}

$("#currency").change(function(){
  var currency = document.getElementById("currency").value;
  console.log(currency);
  getFinancialDatabyCurrency(currency);
});

function getFinancialDatabyCurrency(currency) {
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json?currency="+currency,
    method: "GET",
    success: function (response) {

      console.log(response);
      var obj = jQuery.parseJSON(response);
      console.log(obj);
      console.log(obj.bpi);
      var data=obj.bpi;
      var x = Object.keys(obj.bpi);
      var y = Object.values(obj.bpi);
      console.log(data);
      console.log(x);
      console.log(y);
      ploter(x,y);
      writeMaxMin(x,y);

      console.log("respuesta recogida");
      return data;
    },
    error: function (err) {
      console.log(err);
    },
  });
}



function getFinInfo(id) {
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json",
    method: "GET",
    success: function (response) {

      console.log(response);
      var obj = jQuery.parseJSON(response);
      console.log(obj);
      console.log(obj.bpi);
      var data=obj.bpi;
      var x = Object.keys(obj.bpi);
      var y = Object.values(obj.bpi);
      console.log(data);
      console.log(x);
      console.log(y);
      ploter(x,y);
      writeMaxMin(x,y);


      console.log("respuesta recogida");
      return data;
    },
    error: function (err) {
      console.log(err);
    },
  });
}

$("#finButton").on('click', function(){
  const data = getFinInfo(5);
  console.log(data);

});

$('#dates').click(function(){
  event.preventDefault();
  console.log('intento');
  var dataInit=document.getElementById('start-date').value;
  var dataEnd=document.getElementById('end-date').value;

  console.log(dataInit,dataEnd);

  getFinancialDatabyDate(dataInit,dataEnd);

});

document.getElementById('start-date').addEventListener('click',function(){
    event.preventDefault();
  var dataInit=document.getElementById('start-date').value;
  var dataEnd=document.getElementById('end-date').value;
  console.log('on event listener start-date');
  console.log(dataInit,dataEnd);

  getFinancialDatabyDate(dataInit,dataEnd);
});

document.getElementById('end-date').addEventListener('click',function(){
    event.preventDefault();
  var dataInit=document.getElementById('start-date').value;
  var dataEnd=document.getElementById('end-date').value;
  console.log('on event listener start-date');
  console.log(dataInit,dataEnd);

  getFinancialDatabyDate(dataInit,dataEnd);
});

function getFinancialDatabyDate(dataInit,dataEnd){
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json?start="+dataInit+"&end="+dataEnd,
    method: "GET",
    //dataType: 'JSON',
    success: function(response){
      console.log(response);

      var obj = jQuery.parseJSON(response);
      console.log(obj);
      console.log(obj.bpi);
      var data=obj.bpi;
      var x = Object.keys(obj.bpi);
      var y = Object.values(obj.bpi);
      //console.log(data);
      console.log(x);
      console.log(y);
      ploter(x,y);
      writeMaxMin(x,y);
      console.log("respuesta recogida");
      return data;
      //return response.bpi;
      },
      error: function (err) {
      console.log(err);
      },
  });
}
