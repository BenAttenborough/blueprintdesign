var myLatlng = new google.maps.LatLng(52.206761, 0.123644);  
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
    zoom: 14,
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
var userChoice = "None";

    function button(name,idname,lat,lang) {
        this.name = name;
        this.idname = idname;
        this.lat = lat;
        this.lang = lang;
        this.status = false;
    }

    var buttons = new Array();
    buttons[0] = new button("Kings College Chapel", "selectKings", 52.204705, 0.116408);
    buttons[1] = new button("The Round Church", "selectRound", 52.208483, 0.118982);
    buttons[2] = new button("Cambridge Market", "selectMarket", 52.205569, 0.119677);
    buttons[3] = new button("Trinity College", "selectTrinity", 52.206945, 0.113039);
    buttons[4] = new button("St John's", "selectJohns", 52.207717, 0.117876);
    buttons[5] = new button("Queen's", "selectQueens", 52.202117, 0.114901);
    buttons[6] = new button("Fitzwilliam Museum", "selectFitz", 52.199509, 0.119934);
    buttons[7] = new button("Cambridge Folk Museum", "selectFolk", 52.210756, 0.114710);
    buttons[8] = new button("Botanic Gardens", "selectGardens", 52.194215, 0.125954);
    buttons[9] = new button("Kettles Yard", "selectYard", 52.210958, 0.114445);
    buttons[10] = new button("Museum of Technology", "selectTech", 52.212685, 0.143055);
    buttons[11] = new button("Museum of Archaeology and Anthropology", "selectMAA", 52.202785, 0.120857);
    buttons[12] = new button("Overview", "selectOverview", 52.206761, 0.123644);


    function initializeButtons() {
       for (i=0; i<buttons.length; i++) {
       buttons[i].status = false;
       $("#"+buttons[i].idname).removeClass('ui-btn-active');
       }
    }
    
    function selectClick(choicex) {
        $(document).ready(function() {
        var newLoc = (new google.maps.LatLng(buttons[choicex].lat, buttons[choicex].lang));
        console.log("New location = "+newLoc);
        userLoc = newLoc;
        console.log("User location = "+userLoc);
        mapOptions = {
            zoom: 18,
            center: userLoc,
            styles: myStyles
        };
        if(buttons[choicex].name===("Overview")) {
                    mapOptions = {
            zoom: 14,
            center: userLoc,
            styles: myStyles
        };
           }
        initializeButtons ();
        refresh ();
        $("#"+buttons[choicex].idname).addClass('ui-btn-active');
        (buttons[choicex].status) = true;
        console.log(buttons[choicex].idname);
            userChoice=(buttons[choicex].idname);
            console.log(userChoice);
        })
    }

function hideAllContainers () {
    $('#map-canvas').removeClass('visible');
    $('#map-canvas').addClass('hidden');
    $('#mapContainer').removeClass('visible');
    $('#mapContainer').addClass('hidden');
    $('#photoContainer').removeClass('visible');
    $('#photoContainer').addClass('hidden');
    $('#photoContainerKings').removeClass('visible');
    $('#photoContainerKings').addClass('hidden');
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
        refresh ();
        $('#photoContainer').removeClass('visible');
        $('#photoContainer').addClass('hidden');

    }
        
    
    if(dataBtn === 1) {
        hideAllContainers();
        console.log(userChoice);
        if(userChoice==="selectKings") {
            console.log("Kings selected!");
            $('#photoContainerKings').addClass('visible');
            $('#photoContainerKings').removeClass('hidden');
            $(function(){
                $("#photoContainerKings").slidesjs({
                    width: 500,
                    height: 320,
                    navigation: false,
                    pagination: false
                });
            });
            
            
        }
        else {
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
       

        

    }
    
    if(dataStatus[dataBtn] === false) {
        initiDataBtns ();
        $(dataName[dataBtn]).addClass('ui-btn-active');

        dataStatus[dataBtn] = true;
    }

}



    
    
function initialize() {
    $('#screenContainer').on('pageinit', function() { 
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var markers = [];
    function placeMarker (position, title) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
        });
        markers.push(marker);
    };
    function putMarkers (){
        for(i=0; i<buttons.length; i++) {
            var pos = new google.maps.LatLng(buttons[i].lat, buttons[i].lang);
            placeMarker(pos, buttons[i].name);
        }
    }
    
putMarkers ();
    })   
    
    
}

function refresh() {
    $(document).ready(function() { 
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var markers = [];
    function placeMarker (position, title) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
        });
        markers.push(marker);
    };
    function putMarkers (){
        for(i=0; i<buttons.length; i++) {
            var pos = new google.maps.LatLng(buttons[i].lat, buttons[i].lang);
            placeMarker(pos, buttons[i].name);
        }
    }
    
putMarkers ();
    })   
    
    
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
//})