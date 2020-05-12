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
    */
    song.element = $(`
      <tr>
        <td>${index + 1}</td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
    `);

    //pass the .playPause() method a song object inside a click event handler.
    song.element.on('click', event => {
      player.playPause(song);
    });


    //.append() method to append song.element to #song-list
    $('#song-list').append(song.element);
  });
}
