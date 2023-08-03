'use strict';

// Загрузка YouTube IFrame Player API
function loadYouTubePlayerAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';

  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Создание плеера
function createPlayer(videoId) {
  const player = new YT.Player('player', {
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Вызывается, когда плеер готов
function onPlayerReady(event) {
  event.target.playVideo();
}

// Вызывается при изменении состояния плеера
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    loadNextVideo();
  }
}

// Загрузка следующего видео из раздела "Трансляции"
function loadNextVideo() {
  fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCuLogcAxAdf8sOTbGMizydQ&type=video&eventType=completed&order=date&maxResults=1&key=AIzaSyCIgq5mfPWs9GEfcZgZu0r7QJVTqeWM9Dg')
    .then(response => response.json())
    .then(data => {
      if (data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        player.loadVideoById(videoId);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Загрузка YouTube IFrame Player API
loadYouTubePlayerAPI();

// Запрос информации о последнем сохраненном видео из раздела "Трансляции" (здесь используется ваш API-ключ и идентификатор канала)
fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCuLogcAxAdf8sOTbGMizydQ&type=video&eventType=completed&order=date&maxResults=1&key=AIzaSyCIgq5mfPWs9GEfcZgZu0r7QJVTqeWM9Dg')
  .then(response => response.json())
  .then(data => {
    if (data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      createPlayer(videoId);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
