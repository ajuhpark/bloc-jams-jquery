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
}
