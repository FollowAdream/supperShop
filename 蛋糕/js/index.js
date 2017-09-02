$(function(){
			var index=0;//保存当前显示的图片的索引
			var timer=setInterval(change,2000);//自动轮播

			//轮播区域鼠标事件
			$("#carousel").hover(function(){
				
				clearInterval(timer);//停止轮播
			},function(){
								
				timer=setInterval(change,2000);//启动轮播
			});

			

			//添加圆点控制器事件
			$("#control li").mouseover(function(){								
				index=$(this).index();//获取被点击的指示器的索引并赋值给index
				show();							
			});

			//图片切换下一张
			function change(){			
				index++;
				//最后一张时，切换第一张
				if(index==$("#content div").size()){
					index=0;
				}
				show();
			};


			function show(){
				//图片的切换
				$("#content div").eq(index).addClass("current").siblings().removeClass("current");
				//指示器的切换
				$("#control li").eq(index).addClass("sel").siblings().removeClass("sel");
			}
		});




$(function(){
			$("#h_1 li").mouseover(function(){
				$(this).addClass("hot_sale").siblings().removeClass("hot_sale");
				

				$("#hot_brand_nr ul").eq($("#h_1 li").index($(this))).addClass("ceng1").siblings().removeClass("ceng1");
			});
		});


$(function(){
			$("#sr_1 li").mouseover(function(){
				$(this).addClass("sr_sale").siblings().removeClass("sr_sale");
				

				$("#sr_brand_nr ul").eq($("#sr_1 li").index($(this))).addClass("ceng2").siblings().removeClass("ceng2");
			});
		});

$(function(){
			$("#party_1 li").mouseover(function(){
				$(this).addClass("party_sale").siblings().removeClass("party_sale");
				

				$("#party_brand_nr ul").eq($("#party_1 li").index($(this))).addClass("ceng3").siblings().removeClass("ceng3");
			});
		});


$(function(){
			$("#love_1 li").mouseover(function(){
				$(this).addClass("love_sale").siblings().removeClass("love_sale");
				

				$("#love_brand_nr ul").eq($("#love_1 li").index($(this))).addClass("ceng4").siblings().removeClass("ceng4");
			});
		});


$(function(){
			$("#ts_1 li").mouseover(function(){
				$(this).addClass("ts_sale").siblings().removeClass("ts_sale");
				

				$("#ts_brand_nr ul").eq($("#ts_1 li").index($(this))).addClass("ceng5").siblings().removeClass("ceng5");
			});
		});


$(function(){
			$("#hua_1 li").mouseover(function(){
				$(this).addClass("hua_sale").siblings().removeClass("hua_sale");
				

				$("#hua_brand_nr ul").eq($("#hua_1 li").index($(this))).addClass("ceng6").siblings().removeClass("ceng6");
			});
		});


$(function(){
			$("#zh_1 li").mouseover(function(){
				$(this).addClass("zh_sale").siblings().removeClass("zh_sale");
				

				$("#zh_brand_nr ul").eq($("#zh_1 li").index($(this))).addClass("ceng7").siblings().removeClass("ceng7");
			});
		});


$(function(){
			$("#lw_1 li").mouseover(function(){
				$(this).addClass("lw_sale").siblings().removeClass("lw_sale");
				

				$("#lw_brand_nr ul").eq($("#lw_1 li").index($(this))).addClass("ceng8").siblings().removeClass("ceng8");
			});
		});

$(function(){
    jQuery(".slideBox2").slide({effect:"leftLoop",autoPlay:true});
});