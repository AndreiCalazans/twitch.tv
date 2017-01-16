
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx",
 "RobotCaleb", "noobs2ninjas","comster404","brunofin"];
var channelsGotten = [];
var channelsOnline = [];














// 
// channels.forEach(function(element){
//   $.ajax({
//     type: "GET",
//     url:"https://wind-bow.gomix.me/twitch-api/channels/"+element,
//     dataType:"jsonp",
//     success: function(json){
//       channelsGotten.push(json);
//       $(".streamBox").append("<div class='streamer' id='"+element+"'><img src='"+json.logo+"'/><div class='title'><a href='https://www.twitch.tv/"+element+"'>"+element+"</a></div></div>");
//     }
//     })
//   $.ajax({
//     type: "GET",
//     url:"https://wind-bow.gomix.me/twitch-api/streams/"+element,
//     dataType:"jsonp",
//     success: function(json){
//       channelsOnline.push(json.stream);
//
//
//       var condition ;
//       function status(){
//
//         if(json.stream == null ){
//           condition = "offline";
//           $("#"+element).addClass(condition);
//                  return "Offline";
//                  }else {
//           condition = "online";
//           $("#"+element).addClass(condition);
//           return json.stream.channel.status;
//         }
//       }
//
//       $("#"+element).append("<div class='info'>"+status()+"<div/>");
//       }
//
//     })
//
//
// }) /*end of the function*/
//
//
//
//
//
//
//
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
