{
  /*click handler that targets the #play-pause button
  and calls player.playPause().*/
  $('button#play-pause').on('click', function(){
    player.playPause();

    /*use the jQuery .attr() method to set the attribute,
    and we can set it to the player object's playState property.*/
    $(this).attr('playState', player.playState);
  });
  //adding a new click handler to the #next button
  $('button#next').on('click', function(){
    /*Use player.playState to check if a song is
    playing, and if not, execute a return statement. */
    if(player.playState !== 'playing'){return;}

    /*Use .indexOf() to get the index of player.currentlyPlaying
    in album.songs, and assign it to a variable, songIndex.*/
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

    //Create another variable for the next song's index and call it nextSongIndex
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length){return;}


    //Use nextSongIndex to get the next song in album.songs and assign that to a nextSong variable.
    const nextSong = album.songs[nextSongIndex];

    //call player.playPause() and pass it nextSong.
    player.playPause(nextSong);
  });

  //adding a new click handler to the #next button
  $('button#previous').on('click', function(){
    // console.log('im here');
    if(player.playState !== 'playing'){return;}
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

    const previousSongIndex = currentSongIndex - 1;
    if(previousSongIndex >= album.songs.length){return;}

    const previousSong = album.songs[previousSongIndex];

    player.playPause(previousSong);

  })
  /*create an event handler that responds to input changes
  on the time control range input. jQuery doesn't have a
  dedicated method for "input" events, but we can use jQuery's
  .on() method to bind to any DOM event.*/
  $('#time-control input').on('input', function (event) {

    /*use the player object's .skipTo() method to change
    the time in the audio file. .skipTo() accepts a
    percentage as a parameter, so we can pass it the
    value property of our seek bar, event.target.*/
    player.skipTo(event.target.value);
  });

  /*Pass setInterval() an empty function (a callback function)
  as its first parameter and the number 1000 as the next
  parameter. 1000 is the number of milliseconds between intervals.
  Since there are 1000 milliseconds in a second, the callback
  function will execute once every second.*/
  setInterval( () => {
    /*We don't want our setInterval callback function to do
    anything if a song isn't currently playing, so add a
    line that executes a return statement if player.playState
    doesn't equal 'playing'.*/
    if (player.playState !== 'playing') {return; }

    /*We'll use the player object's .getTime() to get the
    part and the .getDuration() method to get the whole.*/
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;

    /*Use jQuery's .text() method to set #time-control .current-time
    to the value of the currentTime variable.*/
    $('#time-control .current-time').text( prettyTime(currentTime) );

    //set the input's value using jQuery's .val() method.
    $('#time-control input').val(percent);

    //add total time
    $('#time-control .total-time').text( prettyTime(duration) );
      }, 1000);


  $('#volume-control input').on('input', function (event){
    player.setVolume(event.target.value);
  })

  function prettyTime(timeInSeconds){
    var minutes = Math.floor(timeInSeconds/60) %60;
    var seconds = Math.round(timeInSeconds % 60);

    return [minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v,i) => v !== "00" || i > 0)
    .join(":")
  };

}
