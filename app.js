var drop = require('drag-and-drop-files')
var fileReader = require('filereader-stream')
var concat = require('concat-stream')

var ui = {
  main: document.querySelector('main')
}

drop(ui.main, function (files) {
  fileReader(files[0]).pipe(concat(function (data) {
    var src = 'data:' + files[0].type + ';base64,' + data.toString('base64')
    var img = document.createElement('img')
    img.src = src
    document.body.appendChild(img)
  }))
})
