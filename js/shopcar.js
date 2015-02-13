
window.onload = function(){
	var row = document.getElementsByClassName('mui-card');
	var checkInputs = document.getElementsByClassName('check');
//	alert(checkInputs.length)
    var checkAllInputs = document.getElementsByClassName('check-all')
    var priceTotal = document.getElementById('priceTotal');
document.getElementsByTagName()
//全部商品价格、数量总计
 function getTotal(){
 	var price = 0;
 	for(var i= 0,len = row.length;i < len;i++){
 		//alert(row[i].getElementsByClassName('SubTotal')[i].innerHTML);
 		if(row[i].getElementsByTagName('input')[0].checked){
 			price +=  parseFloat(document.getElementsByClassName('SubTotal')[i].innerHTML);
 		}
 	}
 	priceTotal.innerHTML = price;
 }
 //单品小计
 function getSubTotal(dd){
//  alert(dd.innerHTML)
       	  var price = parseInt(dd.getElementsByClassName('price')[0].innerHTML);
       	  
 	      var ST = dd.getElementsByClassName('SubTotal')[0];
 	      
 	      
 	      var count = parseInt(dd.getElementsByTagName('input')[1].value);
// 	      alert(dd.getElementsByTagName('input')[1].value);
 	      var SubTotal = (price * count).toFixed(2).toString();

 	      ST.innerHTML = SubTotal
 	
 }
 //商品选择
for(var ii=0;ii < checkInputs.length;ii++){
	//alert(checkInputs[i]);
	checkInputs[ii].onclick = function(){
		if(this.className==='check-all check'){
			for(var jj=0;jj<checkInputs.length;jj++){
				checkInputs[jj].checked = this.checked;
			}
		}
		if(this.checked == false){
			for(var kk = 0;kk < checkAllInputs.length;kk++){
				checkAllInputs[kk].checked = false;
			}
		}
		
		getTotal();
		
	}
	
}

//mui.plusReady(function(){
//for(var i= 0;i < row.length;i++){
//		//alert(row.length)
//		//alert(getElementsByClassName('reduce').innerHTML);
//		//alert(document.getElementsByClassName('reduce')[1])
//document.getElementsByClassName('reduce')[i].addEventListener('tap', function() {
//	       //alert(this.parentNode);
//			var input = this.parentElement.getElementsByTagName('input')[0];
//			//alert(input);
//			//var yut = document.getElementsByClassName('content mui-card')[0];
//			//alert(document.getElementsByTagName('input')[2].value)
//			var val = parseInt(input.value);
//			input.value = val - 1;
//			if(input.value < 1){
//				input.value = 1
//			}
//			//alert(this.parentNode);
//			getSubTotal(this.parentNode.parentNode);
//			getTotal(this.parentNode.parentNode);
//		});
//	
//		  
//	document.getElementsByClassName('add')[i].addEventListener('tap', 
//	
//	$(".add").tap(function() {
//			var input = this.parentElement.getElementsByTagName('input')[0];
//			var val = parseInt(input.value);
//			input.value = val + 1;
//			getSubTotal(this.parentNode.parentNode);
//		    getTotal(this.parentNode.parentNode);
//		});	
//	
// 	document.getElementsByClassName('delete')[i].addEventListener('tap', function() {
//            var conf = confirm('确定要删除吗？');
//              if (conf) {
//              	alert(this);
//             this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);    
//                  }
//          getSubTotal(this.parentNode.parentNode);
//		    getTotal(this.parentNode.parentNode);
//				});
//			}
//}
//
//);


//商品的加减
	for(var i= 0;i < row.length;i++){
   		row[i].onclick = function(e){
   			var e = e || event;
   			var el = e.target || e.srcElement;
   			var cls = el.className;
   			var input = this.getElementsByTagName('input')[1];
   			var val = parseInt(input.value);
   			var reduce = this.getElementsByClassName('mui-icon mui-icon-minus reduce');
   			switch(cls){
   				case 'mui-icon mui-icon-plus add':
   				         input.value = val + 1;
   				           getSubTotal(this);
   				           
   					break;
   				case 'mui-icon mui-icon-minus reduce':
   						input.value = val - 1;
   					     if(input.value < 1){
   				         	input.value = 1;
   				         }
   					getSubTotal(this);
   				        
   					break;
   			    case 'mui-icon mui-icon-trash delete':
                    var conf = confirm('确定要删除吗？');
                    if (conf) {
                         this.parentNode.removeChild(this);
                    }
                    break;
   			}
   			getTotal(this);
   		}
   	    row[i].getElementsByTagName('input')[1].onkeyup = function () {
   	         var val = parseFloat(this.value);
           var tr = this.parentNode.parentNode;         
           if (isNaN(val) || val < 1) {
              val = 1;
          }
          this.value = val;
          getSubTotal(tr);
          getTotal();
     }
	}
		
}
