function upcoming(){
	$.get("https://conference-list-.herokuapp.com/upcoming.php", function(data){
		cont = '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">';
		cont += data;
		cont += '</div>';
		$('.conferences')[0].innerHTML = cont;
	});
}

function past(year){
	$.get("https://conference-list-.herokuapp.com/past.php?year=" + year, function(data){
		cont = '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">';
		cont += '<hr>';
		cont += '<h2 class="intro-text text-center">Past Conferences</h2>';
		cont += '<hr>';
		cont += '<nav aria-lable="past_conf" class="past_conf">';
		cont += '<ul class="pagination">';
		for(i=2015; i<=new Date().getFullYear()+1; i++){
			if(i == year){
				cont += '<li class="active"><a href="javascript:past(' + i + ')">' + i + '</a></li>';
			}else{
				cont += '<li><a href="javascript:past(' + i + ')">' + i + '</a></li>';
			}
		}
		cont += '</ul>';
		cont += '</nav>';
		cont += data;
		cont += '</div>';
		$('.conferences')[0].innerHTML = cont;
	});
}



