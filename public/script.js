window.onload = function() {
  //showdown library
  var converter = new showdown.Converter();
  
  var pad = document.getElementById('pad');
  var markdownArea = document.getElementById('markdown');

  var convertTextAreaToMarkdown = function() {
    //textarea.value
    var markdownText = pad.value;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };
  pad.addEventListener('input', convertTextAreaToMarkdown);

  convertTextAreaToMarkdown();

};
