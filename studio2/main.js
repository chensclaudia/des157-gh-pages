// Get modal
var modal = document.getElementById('myModal');

// get image and insert it into modal
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// get element to close
var span = document.getElementsByClassName("close")[0];

// When clicked, close
span.onclick = function() {
  modal.style.display = "none";
}
