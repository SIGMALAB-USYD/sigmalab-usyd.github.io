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
  function filter_mandatory_members(value, index, arr) {
    let mandatory_members = ["authors", "title", "publisher", "image"];
    return !mandatory_members.includes(value);
  }
  let all_members = Object.keys(pubitem);
  all_members = all_members.filter(filter_mandatory_members);
  let obj;
  obj = document.createElement("template");
  let additional_link_template = `[<a class="aLink" href="LINK_TO_REPLACE" >TEXT_TO_REPLACE</a>]`;
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
          ADDITIONAL_LINKS
          <br>
        </p>
      </div>
        
    </div>
    <hr>
  </div>
  `;
  let additional_links = "";
  let num_links = all_members.length;
  for (let i = 0; i < num_links; i++) {
    additional_links = additional_links.concat(
      additional_link_template
        .replace("LINK_TO_REPLACE", pubitem[all_members[i]])
        .replace("TEXT_TO_REPLACE", all_members[i])
    );
  }
  obj.innerHTML = html_template
    .replace("AUTHORS", pubitem.authors)
    .replace("TITLE", pubitem.title)
    .replace("JOURNAL", pubitem.publisher)
    .replace("IMAGE", pubitem.image)
    .replace("ADDITIONAL_LINKS", additional_links)
    .replace(
      `<img style="width: 336Px;" alt="Wanli" src="" width="336px" height="200px">`,
      ""
    );

  return obj.content.firstElementChild;
}

// function journalPubItemConstructor(pubitem) {
//   let obj;
//   obj = document.createElement('template');
//   let html_template = `
//     <div>
//       <div class="row">
//         <div class="small-4 column">
//             <img src="IMAGE" style="width: 100%">
//         </div>
//         <div class="small-8 column">
//           <p>
//             <b>TITLE</b>
//             <br>
//             AUTHORS
//             <br> 
//             JOURNAL
//             <br>
//           </p>
//         </div>
          
//       </div>
//       <hr>
//     </div>
//   `;
//   obj.innerHTML = html_template
//   .replace("AUTHORS", pubitem.authors)
//   .replace("TITLE", pubitem.title)
//   .replace("JOURNAL", pubitem.publisher)
//   .replace("IMAGE", pubitem.image)
//   .replace(`<img style="width: 336Px;" alt="Wanli" src="" width="336px" height="200px">`, "");

//   return obj.content.firstElementChild;
// }

function conferencePubItemConstructor(pubitem) {
  function filter_mandatory_members(value, index, arr) {
    let mandatory_members = ["authors", "title", "publisher"];
    return !mandatory_members.includes(value);
  }
  // let all_members = Object.keys(pubitem);
  // all_members = all_members.filter(filter_mandatory_members)
  let obj = document.createElement("template");
  let html_template = `
  <div>
    <h4> CONFERENCE_NAME </h4>
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
  `;

  let image_list = "";
  let main_image;
  for (main_image of pubitem.main_images) {
    image_list += `<img alt="" border="0" src="${main_image}" width="304px" height="200" >`;
  }

  let paper_list = "";
  let paper;
  let all_members;
  let additional_links;
  let additional_link_template = `[<a class="aLink" href="LINK_TO_REPLACE" >TEXT_TO_REPLACE</a>]`;
  for (paper of pubitem.papers) {
    all_members = Object.keys(paper);
    all_members = all_members.filter(filter_mandatory_members);
    additional_links = "";
    let num_links = all_members.length;
    for (let i = 0; i < num_links; i++) {
      additional_links = additional_links.concat(
        additional_link_template
          .replace("LINK_TO_REPLACE", paper[all_members[i]])
          .replace("TEXT_TO_REPLACE", all_members[i])
      );
    }
    paper_list += `
      <br>
      ${paper.authors}, "${paper.title}", ${paper.publisher}
      ${additional_links}
      <br>
    `;
  }

  obj.innerHTML = html_template
    .replace("CONFERENCE_NAME", pubitem.conference_name)
    .replace("MAIN_IMAGES", image_list)
    .replace("PAPER_LIST", paper_list);

  return obj.content.firstElementChild;
}

// function conferencePubItemConstructor(pubitem) {
//   let obj = document.createElement('template');
//   let html_template = `
//   <div>
//     <div class="row">
//       <div class="small-4 column">
//         MAIN_IMAGES
//       </div>
//       <div class="small-8 column">
//         <p>
//           PAPER_LIST
//         </p>
//       </div>
//     </div>
//     <hr>
//   </div>
//   `

//   let image_list = "";
//   let main_image;
//   for (main_image of pubitem.main_images) {
//     image_list += `<img alt="" border="0" src="${main_image}" width="304px" height="200" >`
//   }


//   let paper_list = "";
//   let paper;
//   for (paper of pubitem.papers) {
//     paper_list += `
//       <br>
//       ${paper.authors}, "${paper.title}", ${paper.publisher}
//       <br>
//     `
//   }

//   obj.innerHTML = html_template
//   .replace("MAIN_IMAGES", image_list)
//   .replace("PAPER_LIST", paper_list);

//   return obj.content.firstElementChild;
// }

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