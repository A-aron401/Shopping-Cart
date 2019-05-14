var itemsArr=[];
var priceArr=[];
var totalP=0 ;
$(".first").click(function(){
   var items=$(".1").val();
   var price=parseInt($(".2").val());
   console.log(items);
  
   $(".cart").append("<p>"+items +" "+","+"$"+ price+"</p>");
   itemsArr.push(items);
   priceArr.push(price);
   
   $(".total").text("Total Number of Items:"+ itemsArr.length);
   priceArr.forEach(function(aPrice) {
   totalP = totalP+aPrice;
   
});

 
   
});
$(".second").click(function(){
    alert("Your total is"+" "+totalP+".Thank you for shopping with us!!!!");
});    
    
    
    