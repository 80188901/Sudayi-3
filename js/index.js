
       $.get(serverURL+'mobile/welcome/get_pics_a',function(data){
          var obj = JSON.parse(data);
          var str = "";
          var address='http://shop.29mins.com/';
          for(var i in obj){
            if(obj[i]){
            str+='<div class="mui-card" id="level_A">';
            str+='<div class="level_A_logo">'+'<img src="images/logo.png">'+'</div>'
            str+='<div class="level_A_content">'
            str+='<div class="subtitle">'+'iPhone 6 Plus 全网通'+'</div>'
            str+='<div class="subhead">'+'稀缺现货,全网独享,抢完为止'+'</div>'
            str+='<div class="pic">'+'$3333'+'</div>'
            str+='<div class="buy">'
            str+='<span>'+'立即抢购'
            str+='<div class="right-triangle">'
            str+='</div>'
            str+='</span>'
            str+='</div>'
            str+='</div>'
            str+='<a href="#">'+'<img src='+address+obj[i]['url']['url'].toString()+' id='+obj[i]['product_id']+'>'+'</a>'
            str+='</div>'
            // str+='<a href="#man_list">';
            // str += '<img src='+address+obj[i]['url']['url'].toString()+' id='+obj[i]['product_id']+'>'+'<br>';
            // str+='</a>';
            // str+='</div>';
            }
            else{
              continue;
            }
          }
                     
            $("#pic").append(str);//A级图片

           
           //A级详细图片列表
            $(".home_list").each(function(){
                $(this).click(function(){
                var id=$(this).find("img").attr("id");
                
                setItem('refresh_id',id);

                  $.get(serverURL+'mobile/welcome/get_images_by_pid',{pid:id},function(data){
                  var obj = JSON.parse(data);
                  var str2 = "";
                  var str3 = " ";
                  var str4 = " ";
                  var address='http://192.168.1.113';

                for(var i in obj){
                      if(obj[i]['iscover'] == 1 ){
                             str2+='<a href="#man_list_cont_list">';
                             str2+='<img class="man_list_cover" src='+address+obj[i]['url']['url'].toString()+'>';
                             str2+='</a>';
                          }
                      if(obj[i]){
                             str3+='<img src='+address+obj[i]['url']['url'].toString()+'>';
                             str4+='<img src='+address+obj[i]['url']['url'].toString()+'>';
                                  }  
                  }
                        $('.man_list_top').html(str2);
                        $('.man_main').html(str3);
                        $('.man_list_cont_list').html(str4);
                })
                  //A级商品详细商品内容
                  $.get(serverURL+'mobile/welcome/get_product_by_id',{pid:id},function(data){
                        var obj = JSON.parse(data);
                        $(".man_list_pic").html("");
                        $(".man_list_title").html("");
                        var str=" ";
                        var str1=" ";
                 
                    if(obj['name']){
                      str += '<span >'+obj['name']+'</span>'; 
                      }
                    if(obj['price']){
                      str1 += '<span class="new">'+obj['price']+'</span>';
                    }
                    else{
                      str1 += '<span class="new">面议</span>'
                    }
                        $('.man_list_title').append(str);
                        $('.man_list_pic').append(str1);
                })
                  $(this).unbind('click');
      })
 
                })//A级详细图片列表

                var id= getItem('refresh_id');
                  
                    $.get(serverURL+'mobile/welcome/get_images_by_pid',{pid:id},function(data){
                         var obj = JSON.parse(data);
                         var str2 = "";
                         var str3 = " ";
                         var str4 = " ";
                         var address='http://192.168.1.113';
                
                for(var i in obj){
                      if(obj[i]['iscover'] == 1 ){
                             str2+='<a href="#man_list_cont_list">';
                             str2+='<img class="man_list_cover" src='+address+obj[i]['url']['url'].toString()+'>';
                             str2+='</a>';
                          }
                      if(obj[i]){
                             
                             str3+='<img src='+address+obj[i]['url']['url'].toString()+'>';
                             str4+='<img src='+address+obj[i]['url']['url'].toString()+'>';
                          }
                        
                  }
                  $('.man_list_top').html(str2);
                  $('.man_main').html(str3);
                  $('.man_list_cont_list').html(str4);
                })

                  $.get(serverURL+'mobile/welcome/get_product_by_id',{pid:id},function(data){
                  var obj = JSON.parse(data);
                   $(".man_list_pic").html("");
                    $(".man_list_title").html("");
                  var str=" ";
                  var str1=" ";
                 
                    if(obj['name']){
                      str += '<span >'+obj['name']+'</span>';
                      
                    }
                    if(obj['price']){
                    
                      str1 += '<span class="new">'+obj['price']+'</span>';
                    }
                    else{
                      str1 += '<span class="new">面议</span>'
                    }
                  $('.man_list_title').append(str);
                  $('.man_list_pic').append(str1);
                })
            });
                 

    })