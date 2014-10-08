var windowHeight = $(window).height();
var windowWidth = $(window).width();
var headerHeight;
var buttonChoice;
console.log("Window height is " + windowHeight);  
console.log("Window width is " + windowWidth); 
 



function doOnOrientationChange()
  {
      windowHeight = $(window).height();
      windowWidth = $(window).width();
      console.log("Orientation has changed");
      dataClick(buttonChoice);

    switch(window.orientation) 
    {  
      case -90:
      case 90:
        console.log('landscape');
        console.log(window.orientation);
        console.log("New window height is " + windowHeight);  
        console.log("New window width is " + windowWidth);
        break; 
      default:
        console.log('portrait');
        console.log(window.orientation);
        console.log("New window height is " + windowHeight);  
        console.log("New window width is " + windowWidth);
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();

//Exprimental code!!!

function buildElement(photos) {
//    window.onload = (headerHeight = document.getElementById('navbar').innerHeight);
    console.log("dataHeader height: " + headerHeight);
    console.log("Building element");
                var picContainer=document.createElement("div");
                picContainer.setAttribute("id", "picContainer");
                document.getElementById("mapContainer").appendChild(picContainer);
                document.getElementById("picContainer").innerHTML = photos;
                var newHeight = (windowHeight-160);
                console.log("Old width: "+windowWidth);
                $(function(){
                    $("#picContainer").slidesjs({
                        width: windowWidth,
                        height: newHeight,
                        navigation: false,
                        pagination: false
                    });
                });
}
        
        function removeElement() {
            var element = document.getElementById("picContainer");
            element.parentNode.removeChild(element);
        }

window.onload = init;

            function init(){
//                var selectDivHeight = $("#selectDiv").height();
//                var selectionPaneHeight = $("#selectionPane").height();
//                console.log("Height of selectDiv is " + selectDivHeight);
//                console.log("Height of selectionPane is " + selectionPaneHeight);
//                selectionPaneHeight -= (selectDivHeight);
//                console.log("NEW selectionPane height is " + selectionPaneHeight);
//                $("#selectionPane").height(selectionPaneHeight);
//                console.log($("#selectionPane").height());
//                console.log($("#selectDiv").height());
                buildElement();
            }
            

//Exprimental code!!!

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

function selectClick(choicex) {
    $(document).ready(function() {
        google.maps.event.addDomListener(window, 'load', initialize);
        document.getElementById("buildingName").innerHTML = buttons[choicex].name;
        console.log("You have selected button " + choicex);
        var newLoc = (new google.maps.LatLng(buttons[choicex].lat, buttons[choicex].lang));
        console.log("New location = "+newLoc);
        userLoc = newLoc;
        console.log("User location = "+userLoc);
        mapOptions = {
            zoom: 17,
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
//        initializeButtons ();
        refresh ();
//        $("#"+buttons[choicex].idname).addClass('ui-btn-active');
        (buttons[choicex].status) = true;
        console.log(buttons[choicex].idname);
            userChoice=(buttons[choicex].idname);
            console.log(userChoice);
//        window.location.href = "#data";
                $('#infoContainer').removeClass('visible');
        $('#infoContainer').addClass('hidden');
        $('#picContainer').removeClass('visible');
        $('#picContainer').addClass('hidden');
        $('#map-canvas').removeClass('hidden');
        $('#map-canvas').addClass('visible');
    })
}

function dataClick(choice) {
    buttonChoice = choice;
    if(choice ==="map"){
       console.log("You selected" + choice);
        //hide other containers
        $('#infoContainer').removeClass('visible');
        $('#infoContainer').addClass('hidden');
        $('#picContainer').removeClass('visible');
        $('#picContainer').addClass('hidden');
        $('#map-canvas').removeClass('hidden');
        $('#map-canvas').addClass('visible');
        refresh();
        //show map container
    }
    if(choice ==="info"){
        console.log("You selected data button " + choice);
        console.log("You selected building " + userChoice);
        $('#map-canvas').removeClass('visible');
        $('#map-canvas').addClass('hidden');
        $('#picContainer').removeClass('visible');
        $('#picContainer').addClass('hidden');
        $('#infoContainer').removeClass('hidden');
        $('#infoContainer').addClass('visible');
        if(userChoice == "selectKings") {
             document.getElementById("infoContainer").innerHTML = kingsText;
        }
        else if(userChoice == "selectRound") {
             document.getElementById("infoContainer").innerHTML = RoundText;
        }
                else if(userChoice == "selectMarket") {
             document.getElementById("infoContainer").innerHTML = MarketText;
        }
                else if(userChoice == "selectTrinity") {
             document.getElementById("infoContainer").innerHTML = TrinityText;
        }
                else if(userChoice == "selectJohns") {
             document.getElementById("infoContainer").innerHTML = JohnsText;
        }
                else if(userChoice == "selectQueens") {
             document.getElementById("infoContainer").innerHTML = QueensText;
        }
                else if(userChoice == "selectFitz") {
             document.getElementById("infoContainer").innerHTML = FitzText;
        }
                else if(userChoice == "selectFolk") {
             document.getElementById("infoContainer").innerHTML = FolkText;
        }
                else if(userChoice == "selectGardens") {
             document.getElementById("infoContainer").innerHTML = GardensText;
        }
                else if(userChoice == "selectYard") {
             document.getElementById("infoContainer").innerHTML = YardText;
        }
                else if(userChoice == "selectTech") {
             document.getElementById("infoContainer").innerHTML = TechText;
        }
                else if(userChoice == "selectMAA") {
             document.getElementById("infoContainer").innerHTML = MAAText;
        }
                else if(userChoice == "selectOverview") {
             document.getElementById("infoContainer").innerHTML = OverviewText;
        }
        
    }
    if(choice ==="eye"){
       console.log("You selected " + choice);
                $('#map-canvas').removeClass('visible');
        $('#map-canvas').addClass('hidden');
        $('#infoContainer').removeClass('visible');
        $('#infoContainer').addClass('hidden');        
        $('#picContainer').removeClass('hidden');
        $('#picContainer').addClass('visible');
        if(userChoice == "selectKings") {
            switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/kings2_v.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/kings1_v.jpg" width=100%>'
                break; 
            }
            
            
            
//            var photos = '<img src="img/LandMarks/kings1_v.jpg" width=100%>' + '<img src="img/LandMarks/kings2_v.jpg" width=100%>' + '<a href="#" class="slidesjs-previous slidesjs-navigation"><img src="img/backBtn.png"></a>' + '<a href="#" class="slidesjs-next slidesjs-navigation"><img src="img/forwardBtn.png"></a>'
//            removeElement();
//            buildElement(photos);
        }
        else if(userChoice == "selectRound") {
                    switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Round_h.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Round.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectMarket") {
                    switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Market.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Market_v.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectTrinity") {
                                        switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Trinity.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Trinity_v.jpg" width=100%>'
                break; 
            }
                    
                    
                    
                    
//             document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Trinity.jpg" width=100%>';
        }
                else if(userChoice == "selectJohns") {
                                                            switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/StJohns.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/StJohns_v.jpg" width=100%>'
                break; 
            }
//             document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/StJohns.jpg" width=100%>';
        }
                else if(userChoice == "selectQueens") {
                    switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Queens.JPG" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Queens_v.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectFitz") {
                                        switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/FitzwilliamMuseum.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/FitzwilliamMuseum_v.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectFolk") {
                                        switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Folk.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Folk_v.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectGardens") {
                                        switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/gardens_h.JPG" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/gardens_v.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectYard") {
                                        switch(window.orientation)
            {  
              case -90:
              case 90:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/KettlesYard.jpg" width=100%>';
                break; 
              default:
                    document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/KettlesYard_v.jpg" width=100%>'
                break; 
            }
        }
                else if(userChoice == "selectTech") {
                        switch(window.orientation)
                        {  
                          case -90:
                          case 90:
                                document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Tech2.jpg" width=100%>';
                            break; 
                          default:
                                document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/Tech.jpg" width=100%>'
                            break; 
                        }
                    
        }
                else if(userChoice == "selectMAA") {
                    switch(window.orientation)
                        {  
                          case -90:
                          case 90:
                                document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/MMA_v.jpg" width=100%>';
                            break; 
                          default:
                                document.getElementById("picContainer").innerHTML = '<img src="img/LandMarks/MMA_h.jpg" width=100%>'
                            break; 
                        }

                    }

                else if(userChoice == "selectOverview") {
             document.getElementById("picContainer").innerHTML = OverviewText;
        }
    }
    
    if(choice ==="hide"){
        $('#dataHeader').removeClass('visible');
        $('#dataHeader').addClass('hidden');        
        $('#footer').removeClass('visible');
        $('#footer').addClass('hidden');
        document.getElementById("mapContainer").style.position= "absolute";
        document.getElementById("mapContainer").style.top = ("0px");
        buildShow();
        $(document.getElementById("showBox")).addClass('ui-btn');
        console.log("Remove footer darn it!");
        $('#footer').removeClass('visible');
        $('#footer').addClass('hidden');
    }
    
}

function showMenus() {
    console.log("Box clicked");
    $('#dataHeader').removeClass('hidden');
    $('#dataHeader').addClass('visible');        
    $('#footer').removeClass('hidden');
    $('#footer').addClass('visible');
    document.getElementById("mapContainer").style.position= "relative";
    var element = document.getElementById("showBox");
    element.parentNode.removeChild(element);    
}

function buildShow() {
                var showBox=document.createElement("div");
                showBox.setAttribute("id", "showBox");
                document.getElementById("mapContainer").appendChild(showBox);
//                document.getElementById("showBox").innerHTML = "Show menus";
                document.getElementById("showBox").className = "ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all";
                document.getElementById("showBox").style.position = "absolute";
                document.getElementById("showBox").style.top = ("2%");
                document.getElementById("showBox").style.right = ("5%");
                document.getElementById("showBox").onclick = showMenus;
    
//    elemm.onclick = function() { alert('blah'); };
}



function returnHome() {
    console.log("Returning home");
    window.location.href = "#home";
        location.reload();
}

var mapOptions = {
    zoom: 14,
    center: myLatlng,
    styles: myStyles
}

function initialize() {
    $('#data').on('pageinit', function() {
//    $('#data').show(3000, function() {
        $('#data').show(50, function() {
                console.log("Initializing map");
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
    })
    
    
}
//
function refresh() {
    $(document).ready(function() {
        console.log("Refreshing map");
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



//function ScaleContentToDevice() {
//    scroll(0, 0);
//    var viewportHeight = $(window).height();
//    var content = $("#selectionPane");
//    var contentMargins = content.outerHeight() - content.height();
////    var contentheight = viewportHeight - contentMargins;
//    var contentheight = "380px";
//    content.height(contentheight);
//};
//
//$(document).on("pageshow", function () {
//    ScaleContentToDevice();
//});
//$(window).on('resize orientationchange', function () {
//    ScaleContentToDevice()
//});