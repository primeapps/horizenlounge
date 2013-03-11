$(document).live('pageinit',function(event){
	$('[data-position=fixed]').fixedtoolbar({ tapToggle:false});
});

$( '#gallery' ).live( 'pageinit',function(event){
	var options = {};
	$("#photo-gal a").photoSwipe(options);
	$("#photo-gal-2 a").photoSwipe(options);
});

$(function() {
	// Also works with: var yourStartLatLng = '13.724732, 100.539279';
	var yourStartLatLng = new google.maps.LatLng(31.22605,121.500028);

	$('#map_canvas').css({height:screen.height}); 

	//$('#map_canvas').gmap({'center': yourStartLatLng,'zoom':10});


//	$('#map_canvas').gmap('addMarker', { 'position': yourStartLatLng } );

var locationStr = '<strong>HORIZEN Lounge</strong> <p>ZHONG SHAN DONG ER road 12, 23rd floor, near JIN LING DONG road</p>';

var map_canvas = $('#map_canvas');
map_canvas.gmap(
	{'center' : yourStartLatLng,
	'zoom' : 10,
	//'disableDefaultUI':true,
	'callback':function(){
		var self = this;
		var marker = self.addMarker({ 'position' : yourStartLatLng });
		marker.click(function(){
			self.openInfoWindow({ 'content' : locationStr }, this);
		});
	}
});

});