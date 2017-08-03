function upcoming(){
	$.get("https://conference-list-.herokuapp.com/upcoming.php", function(data){
		cont = '<div class="col-lg-12">';
		cont += data;
		cont += '<br>';
		cont += '<center>';
		cont += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
		cont += '<!-- bottom -->';
		cont += '<ins class="adsbygoogle"';
		cont += ' style="display:inline-block;width:728px;height:90px"';
		cont += ' data-ad-client="ca-pub-9318804591700644"';
		cont += ' data-ad-slot="3485438810"></ins>';
		cont += '<script>';
		cont += '(adsbygoogle = window.adsbygoogle || []).push({});';
		cont += '</script>';
		cont += '</center>';
		cont += '</div>';
		$('.conferences')[0].innerHTML = cont;
	});
}

function past(year){
	$.get("https://conference-list-.herokuapp.com/past.php?year=" + year, function(data){
		cont = '<div class="col-lg-12">';
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
		cont += '<br>';
		cont += '<center>';
		cont += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
		cont += '<!-- bottom -->';
		cont += '<ins class="adsbygoogle"';
		cont += ' style="display:inline-block;width:728px;height:90px"';
		cont += ' data-ad-client="ca-pub-9318804591700644"';
		cont += ' data-ad-slot="3485438810"></ins>';
		cont += '<script>';
		cont += '(adsbygoogle = window.adsbygoogle || []).push({});';
		cont += '</script>';
		cont += '</center>';
		cont += '</div>';
		$('.conferences')[0].innerHTML = cont;
	});
}



