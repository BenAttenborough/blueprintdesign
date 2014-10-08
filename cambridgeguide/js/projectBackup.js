var select;
var selectStatus = [false, false, false, false, false, false, false, false, false, false];
var buttonName = ['#select44a', '#select122', '#selectBhara', '#selectBrook', '#selectDitch', '#selectKinema', '#selectBridge', '#selectPeter', '#selectLabour', '#selectBath', '#selectLodge', '#selectMill'];

function intialiseButtons() {
       for (i=0; i<buttonName.length; i++) {
       selectStatus[i] = false;
       $(buttonName[i]).removeClass('ui-btn-active');
       }
}

function selectClick(select) {
    if(selectStatus[select] === false) {
        intialiseButtons ();
        $(buttonName[select]).addClass('ui-btn-active');
        $selectStatus[select] = true;
    }

}
    

    
    
function initialize() {
    
        //The following code removes point of view functions
    var myStyles =[
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    }
];
    
  var myLatlng = new google.maps.LatLng(52.198612, 0.141132);    
  var MillLane176 = new google.maps.LatLng(52.197977, 0.143192);
  var Rawlinsons = new google.maps.LatLng(52.197233, 0.146260);
  var GoodButcher = new google.maps.LatLng(52.199269, 0.139085);
    
    var contentMillLane176 = '<div id="content">'+
      '<div id="siteNotice">'+
      '<h1 id="firstHeading" class="firstHeading">176 Mill Lane</h1>'+
      '<div id="bodyContent">'+
      '<img src="Images/MillLane195.png" width="300" height="212" id="MillLane195">'+
      '<p></p>'+
      '</div>'+
      '</div>'+
        '</div>';
    
      var contentRawlinsons = '<div id="content">'+
      '<div id="siteNotice">'+
      '<h1 id="firstHeading" class="firstHeading">Rawlinsons</h1>'+
      '<div id="bodyContent">'+
      '<img src="Images/Rawlinsons.png" width="300" height="193" id="Rawlinsons">'+
      '<p></p>'+
      '</div>'+
      '</div>'+
        '</div>';
    
          var contentGoodButcher = '<div id="content">'+
      '<div id="siteNotice">'+
      '<h1 id="firstHeading" class="firstHeading">A. W. Good Butcher</h1>'+
      '<div id="bodyContent">'+
      '<img src="Images/GoodButcher.png" width="300" height="369" id="GoodButcher">'+
      '<p></p>'+
      '</div>'+
      '</div>'+
        '</div>';
    
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    styles: myStyles
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var contentString = contentMillLane176; 
      


  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
    
//var marker44a = new google.maps.Marker({
//};

  var markerMillLane176 = new google.maps.Marker({
      position: MillLane176,
      map: map,
      title: '176 Mill Road'
  });
    
  var markerRawlinsons = new google.maps.Marker({
      position: Rawlinsons,
      map: map,
      title: '195 Mill Road'
  });
    
    var markerGoodButcher = new google.maps.Marker({
      position: GoodButcher,
      map: map,
      title: 'A. W. Good Butcher'
  });
    
    google.maps.event.addListener(markerMillLane176, 'click', function() {
         infowindow = new google.maps.InfoWindow({
      content: contentMillLane176});
        infowindow.open(map,markerMillLane176);    
  });
    
    google.maps.event.addListener(markerRawlinsons, 'click', function() {
        infowindow = new google.maps.InfoWindow({
      content: contentRawlinsons});

    infowindow.open(map,markerRawlinsons);    
  });

    google.maps.event.addListener(markerGoodButcher, 'click', function() {
    infowindow = new google.maps.InfoWindow({
  content: contentGoodButcher});

        infowindow.open(map,markerGoodButcher);    
  });

    
}

google.maps.event.addDomListener(window, 'load', initialize);

function ScaleContentToDevice() {
    scroll(0, 0);
    var viewportHeight = $(window).height();
    var content = $("#selectionPane");
    var contentMargins = content.outerHeight() - content.height();
//    var contentheight = viewportHeight - contentMargins;
    var contentheight = "380px";
    content.height(contentheight);
};

$(document).on("pageshow", function () {
    ScaleContentToDevice();
});
$(window).on('resize orientationchange', function () {
    ScaleContentToDevice()
}); 