"use strict";function e(e){e.target.playVideo()}function t(e){e.data===YT.PlayerState.ENDED&&fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCuLogcAxAdf8sOTbGMizydQ&type=video&eventType=completed&order=date&maxResults=1&key=AIzaSyCIgq5mfPWs9GEfcZgZu0r7QJVTqeWM9Dg").then(e=>e.json()).then(e=>{if(e.items.length>0){let t=e.items[0].id.videoId;player.loadVideoById(t)}}).catch(e=>{console.error("Error:",e)})}!function(){let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCuLogcAxAdf8sOTbGMizydQ&type=video&eventType=completed&order=date&maxResults=1&key=AIzaSyCIgq5mfPWs9GEfcZgZu0r7QJVTqeWM9Dg").then(e=>e.json()).then(o=>{if(o.items.length>0){let r=o.items[0].id.videoId;new YT.Player("player",{videoId:r,events:{onReady:e,onStateChange:t}})}}).catch(e=>{console.error("Error:",e)});
//# sourceMappingURL=index.7a5898ad.js.map
