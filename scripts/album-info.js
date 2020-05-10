{
//insert the album title into the #album-title element
$('#album-title').text(album.title);
/*
Use jQuery's .attr() method to add album.albumArtUrl to
the src attribute of the img#album-cover-art element
*/
$('#img#album-cover-art').attr('src', album.albumArtUrl);

}
