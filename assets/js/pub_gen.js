// generate publication list from data.json
"use strict"


function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, false); //fase for synchronous requests
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}
let journal_data;
let conference_data;
readTextFile('https://raw.githubusercontent.com/wlouyang/wlouyang.github.io/master/data.json', function(text){
  let data = JSON.parse(text);
  journal_data = data.journals;
  conference_data = data.conferences;
});


function journalPubItemConstructor(pubitem) {
  let obj;
  obj = document.createElement('template');
  let html_template = `
    <div>
      <div class="row">
        <div class="small-4 column">
            <img src="IMAGE" style="width: 100%">
        </div>
        <div class="small-8 column">
          <p>
            <b>TITLE</b>
            <br>
            AUTHORS
            <br> 
            JOURNAL
            <br>
          </p>
        </div>
          
      </div>
      <hr>
    </div>
  `;
  obj.innerHTML = html_template
  .replace("AUTHORS", pubitem.authors)
  .replace("TITLE", pubitem.title)
  .replace("JOURNAL", pubitem.publisher)
  .replace("IMAGE", pubitem.image)
  .replace(`<img style="width: 336Px;" alt="Wanli" src="" width="336px" height="200px">`, "");

  return obj.content.firstElementChild;
}

function conferencePubItemConstructor(pubitem) {
  let obj = document.createElement('template');
  let html_template = `
  <div>
    <div class="row">
      <div class="small-4 column">
        MAIN_IMAGES
      </div>
      <div class="small-8 column">
        <p>
          PAPER_LIST
        </p>
      </div>
    </div>
    <hr>
  </div>
  `

  let image_list = "";
  let main_image;
  for (main_image of pubitem.main_images) {
    image_list += `<img alt="" border="0" src="${main_image}" width="304px" height="200" >`
  }


  let paper_list = "";
  let paper;
  for (paper of pubitem.papers) {
    paper_list += `
      <br>
      ${paper.authors}, "${paper.title}", ${paper.publisher}
      <br>
    `
  }

  obj.innerHTML = html_template
  .replace("MAIN_IMAGES", image_list)
  .replace("PAPER_LIST", paper_list);

  return obj.content.firstElementChild;
}

//Journal list generation
let journal_list = document.getElementById("journal_list");
let pubitem;
for (pubitem of journal_data.reverse()) {
  journal_list.prepend(journalPubItemConstructor(pubitem))
}

let conference_list = document.getElementById("conference_list");
for (pubitem of conference_data.reverse()) {
  conference_list.prepend(conferencePubItemConstructor(pubitem))
}

//Conference list generation