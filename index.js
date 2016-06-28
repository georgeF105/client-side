var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var spaceInfo = require('./views/space-info.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

document.getElementById('refresh-button').addEventListener("click", refreshInfo)

function refreshInfo() {
  xhr.get(endpoint, function (err, data) {
    if (err) {
      console.error(err)
    }

    // In case you're curious
    console.log(JSON.parse(data.body)) // FYI: data.body is a string

    // Replace 'Space' below with the response
    // var target = document.getElementsByTagName('main')[0]
    var pageTitle = document.getElementById("page-title")
    console.log('page title', pageTitle)
    var pageInfo = document.getElementById('page-data')
    pageTitle.innerHTML = greeting({name: 'Space'})
    pageInfo.innerHTML = spaceInfo(JSON.parse(data.body))


  })
}

refreshInfo()
