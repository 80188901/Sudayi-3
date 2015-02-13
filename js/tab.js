function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	//鼠标滑过和点击事件
	var titles=$('notice-tit').getElementsByTagName('li'),
	    divs=$('notice-con').getElementsByClassName('mod');
//	    alert(divs.length);

//	     alert(divs.length);
	if(titles.length!=divs.length)
		return;
	//遍历titles下所有的li
	for(var i=0;i<titles.length;i++){
		titles[i].id=i;
		titles[i].onclick=function(){
		    
			// 清除所有LI上得class
			for(var j=0;j<titles.length;j++){
				titles[j].className='';
				divs[j].style.display='none';
			}
			//设置当前为高亮显示
			this.className='select';
			divs[this.id].style.display="block";
		}
	}
}