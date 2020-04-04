var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/foxneo/repos?per_page=100', true);

request.onload = function () {

  var data = JSON.parse(this.response);

  var compHTML = '';
  $.each(data, function(i, status) {
    compHTML += '<tr>';
    compHTML += '<td>' + status.id + '</td>';
    compHTML += '<td>' + status.name + '</td>';
    compHTML += '<td>' + status.html_url + '</td>';
    compHTML += '<td>' + status.language + '</td>';
    compHTML += '</tr>';
  });
  $('tbody').html(compHTML);
  $("#loading-bar").hide();
}

request.send();