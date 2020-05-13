{
/*
We'll iterate through album.songs.
The song parameter holds the song object for each
iteration of the loop. index holds the array index,
which we'll use to render the song number.
*/
  album.songs.forEach((song, index) => {
    /*
     Pass it a template literal so that we can insert data
     directly into the string. Assign it to song.element so
     that the player object can access the element.
     - Each table row is defined with the <tr> tag
     - A table data/cell is defined with the <td> tag.
    */
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
    `);

    //pass the .playPause() method a song object inside a click event handler.
    song.element.on('click', event => {
      player.playPause(song);
      /*add a line to the click handler that sets the playState attribute of
      button#play-pause to player.playState.*/
      $('button#play-pause').attr('playState, player.playState');
    });


    //.append() method to append song.element to #song-list
    $('#song-list').append(song.element);
  });
}
