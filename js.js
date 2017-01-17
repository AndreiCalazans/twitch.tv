
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx",
 "RobotCaleb", "noobs2ninjas","comster404","brunofin", "ognglobal","quin69"];
var channelsGotten = [];
var channelsOnline = [];
var channelsSection = document.querySelector(".channels");
var iframe = document.querySelector("iframe");


// controls for the dropdown info of each channel (jquery)
//////////////////////////////////////////////////////////////////
var toggleSlider = document.querySelector(".slider");
var open = false;
toggleSlider.addEventListener("click",function(){

  if(!open || undefined ){
    $(".channelRow").css("left", "0");
    $(".slider").css("right","20px" );
    $(".slider").css("transform","rotate(180deg)");
    open=true;
  }else{
    $(".channelRow").css("left", "-100%");
    $(".slider").css("right","-20px" );
    $(".slider").css("transform","rotate(0deg)");
    open= false;
  }

})


function isOnline(streamer){
  var name = streamer.stream.channel.name;
  var div = document.querySelector("#"+name).dataset.status = "online";
  document.querySelector("#info"+name).innerHTML = '<div class="organizer"><p class="current"></p><p class="game"></p><p class="users"></p><button onClick="playVid(this)" id='+name+' class="watchIt btn btn-danger">Watch</button></div>'
  document.querySelector("#info"+name+" .current").innerHTML = streamer.stream.channel.status;
  document.querySelector("#info"+name+" .game").innerHTML = streamer.stream.game;
  document.querySelector("#info"+name+" .users").innerHTML = streamer.stream.viewers +" people currently watching";
};
///////////////////////////////////
function playVid(e){
  iframe.src = 'http://player.twitch.tv/?channel={'+e.id+'}';
}
//////////////////////////////////////////////////////////

function activate(selected){
  document.getElementById(selected).style.background = "rgba(0,0,0,0.5)";
  if(selected == "online"){
    document.getElementById("offline").style.background = "none";
    document.getElementById("all").style.background = "none";
  }else if(selected == "offline"){
    document.getElementById("online").style.background = "none";
    document.getElementById("all").style.background = "none";
  }else{
    document.getElementById("offline").style.background = "none";
    document.getElementById("online").style.background = "none";
  }

}
////////////////////////////////////////////////////////////
window.addEventListener("resize",function(){
  if(window.innerWidth > 780){
    $(".channelRow").css("left", "0");
    $(".slider").css("right","20px" );
    $(".slider").css("transform","rotate(180deg)");
    open=true;
  }else{
    $(".channelRow").css("left", "-100%");
    $(".slider").css("right","-20px" );
    $(".slider").css("transform","rotate(0deg)");
    open= false;
  }
})
////////////////////////////////////////////////////////////
function showThisStatus(a){
var profiles = document.querySelectorAll(".profile");
  if(a === "online"){
    activate('online');
    for(var i = 0 ; i < profiles.length ; i++){
      if(profiles[i].dataset.status != "online"){
        profiles[i].style.display = "none";
      }else{
        profiles[i].style.display = "flex";
      }
    }
  }else if(a == "offline"){
    activate('offline');
    for(var i = 0 ; i < profiles.length ; i++){
      if(profiles[i].dataset.status == "online"){
        profiles[i].style.display = "none";
      }else{
        profiles[i].style.display = "flex";
      }
    }
  }else{
    for(var i = 0 ; i < profiles.length ; i++){
        activate('all');
        profiles[i].style.display = "flex";

    }
  }

};
/////////////////////////////////////////////////////////////
function buildElements(){
  channelsGotten.forEach(function(e){ makeDivs(e.name , e.logo, e.message);});

var profiles = document.querySelectorAll(".profile");
for(var i = 0 ; i < profiles.length; i++){
  profiles[i].addEventListener('click', function(){
        $("#info"+this.id).slideToggle();
  })
}
/////////// put info in the online channels
for(var i = 0 ; i < channelsOnline.length ; i++){
  isOnline(channelsOnline[i]);
};
};

////////////////////////////////////////////////////////////
channels.forEach(function(element){

  $.ajax({
    type: "GET",
    url: "https://wind-bow.gomix.me/twitch-api/channels/"+element,
    dataType:"jsonp",
    success: function(json){
        channelsGotten.push(json);
    }
  });

  $.ajax({
    type: "GET",
    url: "https://wind-bow.gomix.me/twitch-api/streams/"+element,
    dataType:"jsonp",
    success: function(json){
        if(json.stream != null){
          channelsOnline.push(json);
        }
    }
  });
});


function makeDivs(name, logo){

if(logo === undefined){

  logo = 'fi-torso.svg';
}
if(name == undefined){
  name = arguments[2];
}

 $(".channels").append(
'<div class="channel"><div class="profile" id="'+name+'"><img src="'+logo+'" alt="logo"><p class="nameOfChannel">'+name+'</p><i class="toggle fa fa-plus" aria-hidden="true"></i></div><div id=info'+name+' class="profileInfo"><div class="organizer"><p>Offline</p></div></div></div>'
 );
}


//
// $("button").on("click", function(){
//   var id = this.id;
//  if(id == "online"){
//   $("."+id).removeClass("hidden");
//    $(".offline").addClass("hidden");
//   }else if (id == "offline"){
//     $("."+ id).removeClass("hidden");
//     $(".online").addClass("hidden");
//     }else {
//       $(".streamer").removeClass("hidden");
//     }
//
// })
