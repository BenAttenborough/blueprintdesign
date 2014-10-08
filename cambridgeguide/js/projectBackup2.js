var myLatlng = new google.maps.LatLng(52.198612, 0.141132);  
var mill44a = new google.maps.LatLng(52.200468, 0.135925);
var mill122 = new google.maps.LatLng(52.198830, 0.139779);
var Bharat = new google.maps.LatLng(52.199228, 0.139704);
var Brookfields = new google.maps.LatLng(52.196236, 0.155561);
var Ditchburn = new google.maps.LatLng(52.200425, 0.136582);
var Kinema = new google.maps.LatLng(52.200004, 0.137515);
var Bridge = new google.maps.LatLng(52.198617, 0.141045);
var Peter = new google.maps.LatLng(52.201516, 0.133932);
var Romsey = new google.maps.LatLng(52.197012, 0.149864);
var Bath = new google.maps.LatLng(52.199675, 0.138502);
var Lodge = new google.maps.LatLng(52.198294, 0.142043);
var Mill = new google.maps.LatLng(52.200445, 0.135777);

var MillLane176 = new google.maps.LatLng(52.197977, 0.143192);
var Rawlinsons = new google.maps.LatLng(52.197233, 0.146260);
var GoodButcher = new google.maps.LatLng(52.199269, 0.139085);

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

  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    styles: myStyles
  }

var select;
var selectStatus = [false, false, false, false, false, false, false, false, false, false];
var buttonName = ['#selectmill44a', '#selectmill122', '#selectBhara', '#selectBrook', '#selectDitch', '#selectKinema', '#selectBridge', '#selectPeter', '#selectLabour', '#selectBath', '#selectLodge', '#selectMill'];
var userLoc;

var dataBtn;
var dataStatus = [true, false, false, false];
var dataName = ['#dataMaps', '#dataPhotos', '#dataHistory', '#dataInterviews'];



function initializeButtons() {
       for (i=0; i<buttonName.length; i++) {
       selectStatus[i] = false;
       $(buttonName[i]).removeClass('ui-btn-active');
       }
}

function selectClick(select) {
    if(select==0) {
    userLoc = mill44a;
}

else {
    userLoc=myLatlng;
}
    if(selectStatus[select] === false) {
            mapOptions = {
            zoom: 15,
            center: userLoc,
            styles: myStyles
            };
        initialize ();
        initializeButtons ();
        $(buttonName[select]).addClass('ui-btn-active');
        $selectStatus[select] = true;
    }

}

function hideAllContainers () {
    $('#map-canvas').removeClass('visible');
    $('#map-canvas').addClass('hidden');
    $('#mapContainer').removeClass('visible');
    $('#mapContainer').addClass('hidden');
    $('#photoContainer').removeClass('visible');
    $('#photoContainer').addClass('hidden');
}

function initiDataBtns() {
       for (i=0; i<dataName.length; i++) {
       dataStatus[i] = false;
       $(dataName[i]).removeClass('ui-btn-active');
       }
}

function dataClick(dataBtn) {
    if(dataBtn === 0) {
        hideAllContainers;
        $('#map-canvas').removeClass('hidden');
        $('#map-canvas').addClass('visible');
        $('#mapContainer').removeClass('hidden');
        $('#mapContainer').addClass('visible');
        initialize ();
        $('#photoContainer').removeClass('visible');
        $('#photoContainer').addClass('hidden');
    }
        
    
    if(dataBtn === 1) {
        hideAllContainers();
        $('#photoContainer').addClass('visible');
        $('#photoContainer').removeClass('hidden'); 
        $(function(){
            $("#photoContainer").slidesjs({
                width: 500,
                height: 320,
                navigation: false,
                pagination: false
            });
        });
    }
    if(dataStatus[dataBtn] === false) {
        initiDataBtns ();
        $(dataName[dataBtn]).addClass('ui-btn-active');

        $dataStatus[dataBtn] = true;
    }

}



    
    
function initialize() {
    
 

    
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
    

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var contentString = contentMillLane176; 
      


  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

//Want to build an object constructor to make the following better    
    
var placeM = function (position, title) {
  new google.maps.Marker({
      position: position,
      map: map,
      title: title
  });
};

placeM (mill44a, "44a Mill Road");
placeM (mill122, "122 Mill Road");
placeM (Bharat, "122 Mill Road");
placeM (Brookfields, "122 Mill Road");
placeM (Ditchburn, "122 Mill Road");    
placeM (Kinema, "122 Mill Road");
placeM (Bridge, "122 Mill Road");
placeM (Peter, "122 Mill Road");
placeM (Romsey, "122 Mill Road");
placeM (Bath, "122 Mill Road");
placeM (Lodge, "122 Mill Road");
placeM (Mill, "122 Mill Road");

    
//var marker44a = new google.maps.Marker({
//      position: mill44a,
//      map: map,
//      title: '44a Mill Road'
//});
//    
//    var marker122 = new google.maps.Marker({
//      position: mill122,
//      map: map,
//      title: '122 Mill Road'
//});
//    
//    var markerBharat = new google.maps.Marker({
//      position: Bharat,
//      map: map,
//      title: 'Bharat Bhavan'
//});
//    
//    var markerBrook = new google.maps.Marker({
//      position: Brookfields,
//      map: map,
//      title: '44a Mill Road'
//});
//    
//    
//    var markerDitch = new google.maps.Marker({
//      position: Ditchburn,
//      map: map,
//      title: 'Ditchburn Pace'
//});
//    
//    
//        var markerKinema = new google.maps.Marker({
//      position: Kinema,
//      map: map,
//      title: 'Kinema'
//});
//    
//    
//    
//        var markerBridge = new google.maps.Marker({
//      position: Bridge,
//      map: map,
//      title: 'Mill Road Bridge'
//});
//    
//    
//        var markerPeter = new google.maps.Marker({
//      position: Peter,
//      map: map,
//      title: 'Petersfield Lodge'
//});
//    
//    
//            var markerRomsey = new google.maps.Marker({
//      position: Romsey,
//      map: map,
//      title: 'Romsey Labour Club'
//});
//            var markerBath = new google.maps.Marker({
//      position: Bath,
//      map: map,
//      title: 'The Bath House'
//});
//            var markerLodge = new google.maps.Marker({
//      position: Lodge,
//      map: map,
//      title: 'The Lodge'
//});
//            var markerMill = new google.maps.Marker({
//      position: Mill,
//      map: map,
//      title: 'The Mill'
//});
//    
//    
//    
//    
//    
//    
//    
//    
//    
//
//  var markerMillLane176 = new google.maps.Marker({
//      position: MillLane176,
//      map: map,
//      title: '176 Mill Road'
//  });
//    
//  var markerRawlinsons = new google.maps.Marker({
//      position: Rawlinsons,
//      map: map,
//      title: '195 Mill Road'
//  });
//    
//    var markerGoodButcher = new google.maps.Marker({
//      position: GoodButcher,
//      map: map,
//      title: 'A. W. Good Butcher'
//  });
//    
//    google.maps.event.addListener(markerMillLane176, 'click', function() {
//         infowindow = new google.maps.InfoWindow({
//      content: contentMillLane176});
//        infowindow.open(map,markerMillLane176);    
//  });
//    
//    google.maps.event.addListener(markerRawlinsons, 'click', function() {
//        infowindow = new google.maps.InfoWindow({
//      content: contentRawlinsons});
//
//    infowindow.open(map,markerRawlinsons);    
//  });
//
//    google.maps.event.addListener(markerGoodButcher, 'click', function() {
//    infowindow = new google.maps.InfoWindow({
//  content: contentGoodButcher});
//
//        infowindow.open(map,markerGoodButcher);    
//  });
//
//    
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