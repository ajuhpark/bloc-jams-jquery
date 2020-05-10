{
//insert the album title into the #album-title element
$('#album-title').text(album.title);
/*
Use jQuery's .attr() method to add album.albumArtUrl to
the src attribute of the img#album-cover-art element
*/
$('#img#album-cover-art').attr('src', album.albumArtUrl);

//<h2 class="artist"></h2>
$(‘.artist’).text(album.artist);

// for <div id="release-info"></div>
$(‘#release-info’).text(album.releaseInfo);

}
