function showPreview(){
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "<style>"+document.getElementById("cssCode").value+"</style>";
  var jsCode = "<scri"+"pt>"+document.getElementById("jsCode").value+"</scri"+"pt>";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode+cssCode+jsCode);
  frame.close();
}
var options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#A9A9A9',  // default: '#fff'
  buttonColorDark: '#000000',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '💡', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();