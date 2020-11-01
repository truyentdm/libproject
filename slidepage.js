$(document).ready(function(){
	var than_height = $('#wp_slide').find('article').eq(0).height();
	//thiet lap gia tri mac dinh
	$('#wp_slide').find('article').hide();
	$('#wp_slide').find('article').eq(0).show();

	//total article 
	var total = $('#wp_slide').find('article').length;
	total = total -1;
	//anh dang visible
	var visible;
	for(var i =0 ;i<=total;i++){
		if($('#wp_slide').find('article').eq(i).is(':visible')){
			visible = i;
		}
		var cur_height = $('#wp_slide').find('article').eq(i).height();
		if(than_height < cur_height){
			than_height = cur_height;
		}
	}
	//set height
	$('#wp_slide article').height(than_height+"px");

	//tu tao control 1 2 3 4
	for(var i=0;i<=total;i++){
		y= i+1;
		var tmp = "<li><a stt=\""+i+"\">"+y+"</a></li>";
		$('.control').append(tmp);
	}
	//control dang active
	$('.control a').eq(visible).addClass('active');
	function showarticle(visible){
		$('#wp_slide article').hide();
		$('#wp_slide article').eq(visible).show();
		$('.control a').removeClass('active');
		$('.control a').eq(visible).addClass('active');
	}

	//set time
	// var time = setInterval(function(){ 
		// $('.next').click();
	// }, 1000);
	// function setTime(gt){
		// clearInterval(time);
		// time = setInterval(function(){ 
			// if(gt==0){
				// $('.prev').click();
			// }else{
				// $('.next').click();
			// }
			
		// }, 3000);
	// }

	$('.next').click(function(){
		
		 visible++;
		if(visible>total){
			visible = 0;
		}
		showarticle(visible);

		
		// setTime(1);
	});

	$('.prev').click(function(){
		
		 visible--;
		if(visible<0){
			visible = total;
		}

		showarticle(visible);


		// setTime(0);
		
	});
	
	//click control 1 2 3 4
	$('.control a').click(function(){
		var stt = $(this).attr('stt');
		visible = stt;
		showarticle(visible);

		// setTime(1)
	})

	
});
