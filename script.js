var submitButton = $(".submit");
var answer = $(".final");
var happy = 0;
var sad = 0;
var empowered = 0;
var chill = 0;
var love = 0;

submitButton.on("click", score);

function score() { 
  if (document.getElementById('forest').checked) {
    chill += 2;
    sad += 4;
  } else if (document.getElementById('mountain').checked) {
    empowered += 3;
  } else if (document.getElementById('beach').checked) {
    happy += 4;
    chill += 2;
    love += 3;
  } else if (document.getElementById('city').checked) {
    empowered += 2;
    happy += 1;
    sad += 2;
x  }

  if (document.getElementById('winter').checked) {
    chill += 2;
    sad += 5;
  } else if (document.getElementById('spring').checked) {
    happy += 4;
    love += 3;
    empowered += 4;
  } else if (document.getElementById('autumn').checked) {
    chill += 3;
    love += 2;
  } else if (document.getElementById('summer').checked) {
    empowered += 2;
    happy += 5;
    love += 3;
  }

  if (document.getElementById('sports').checked) {
    empowered += 5;
    happy += 3;
  } else if (document.getElementById('reading').checked) {
    chill += 5;
    sad += 3;
    happy += 3;
    love += 2;
  } else if (document.getElementById('drawing').checked) {
    chill += 4;
    empowered += 2;
  } else if (document.getElementById('work').checked) {
    empowered += 2;
    happy += 3;
    chill += 3;
  } else if (document.getElementById('chores').checked) {
    empowered += 4;
    happy += 3;
    chill += 3;
  }

  if (document.getElementById('dogs').checked) {
    love += 5;
    happy += 3;
  } else if (document.getElementById('cats').checked) {
    chill += 5;
    sad += 3;
    love += 2;
  } else if (document.getElementById('pandas').checked) {
    chill += 4;
    love += 2;
  } else if (document.getElementById('lions').checked) {
    empowered += 5;
    happy += 2;
  } else if (document.getElementById('sloths').checked) {
    chill += 5;
    happy += 3;
    sad += 2;
  }

  if (document.getElementById('ice-cream').checked) {
    happy += 4;
    chill += 1;
  } else if (document.getElementById('donuts').checked) {
    happy += 5;
    empowered += 1;
    love += 2;
  } else if (document.getElementById('dark-chocolate').checked) {
    sad += 4;
    chill += 3;
    empowered += 2;
  } else if (document.getElementById('cake').checked) {
    empowered += 2;
    happy += 5;
    love =+ 3;
  } else if (document.getElementById('cookies').checked) {
    happy += 5;
    love += 3;
  }

  if (happy > sad && happy > empowered && happy > chill && happy > love) {
    answer.append(`<div class="result"><p class="test">You got the coral playlist, which is filled with happy, upbeat songs to match your vibe! If you're not happy with your playlist, click the button to try again. All playlists can be found in the <a href="mood.html">mood playlists</a> page.</p> <br> <a href = "https://open.spotify.com/playlist/4zHnffwy5zWqUiSzhN6GKi?si=a04f168678154a6c"><button class="playlist">Coral Playlist 🪸</button></a> <br> <a href = "quiz.html" <button class = "playlist">Try Again?</button></a> </div>`)
  } else if (sad > happy && sad > empowered && sad > chill && sad > love) {
    answer.append(`<div class="result"><p class="test">You got the whale playlist, which is filled with melancholy songs to cry to. If you're not happy with your playlist, click the button to try again. All playlists can be found in the <a href="mood.html">mood playlists</a> page.</p> <br> <a href = "https://open.spotify.com/playlist/7007oxZ7vIvmThd3JQygdC?si=965c45d981c74ba7"><button class="playlist">Whale Playlist 🐋</button></a> <br> <a href = "quiz.html" <button class = "playlist">Try Again?</button></a> </div>`)
  } else if (empowered > happy && empowered > sad && empowered > chill && empowered > love) {
    answer.append(`<div class="result"><p class="test">You got the shark playlist, which is filled with upbeat, motivating songs to empower you! If you're not happy with your playlist, click the button to try again. All playlists can be found in the <a href="mood.html">mood playlists</a> page.</p> <br> <a href = "https://open.spotify.com/playlist/0D0STVlwqEKUAoGOffOn1F?si=b39bbc3db0684c87"><button class="playlist">Shark Playlist 🦈</button></a> <br> <a href = "quiz.html" <button class = "playlist">Try Again?</button></a> </div>`)
  } else if (chill > happy && chill > sad && chill > empowered && chill > love) {
    answer.append(`<div class="result"v><p class="test">You got the jellyfish playlist, which is filled with chill, mellow songs to vibe to. If you're not happy with your playlist, click the button to try again. All playlists can be found in the <a href="mood.html">mood playlists</a> page.</p> <br> <a href = "https://open.spotify.com/playlist/2o3hK4ZTb4VFU2E4VB5des?si=c69fb478ccf14e7b"><button class="playlist">Jellyfish Playlist 🪼</button></a> <br> <a href = "quiz.html" <button class = "playlist">Try Again?</button></a> </div>`)
  } else if (love > happy && love > empowered && love > chill && love > sad) {
    answer.append(`<div class="result"><p class="test">You got the turtle playlist, which is filled with songs about love! If you're not happy with your playlist, click the button to try again. All playlists can be found in the <a href="mood.html">mood playlists</a> page.</p> <br> <a href = "https://open.spotify.com/playlist/2w2qAVDOd8WlJe84D2PC26?si=5e80ae77c7034c8f"><button class="playlist">Turtle Playlist 🐢</button></a> <br> <a href = "quiz.html" <button class = "playlist">Try Again?</button></a> </div>`)
  } else {
    answer.append(`<div class="result"><p class="test">Your results were inconclusive. All playlists can be found in the <a href="mood.html">mood playlists</a> page.</p> <a href = "quiz.html" <button class = "playlist">Try Again?</button></a> </div>`)
  }
}

