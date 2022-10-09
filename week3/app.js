const url =
  "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json";

let titles = [];
let pictures = [];

async function getData() {
  try {
    let data = await fetch(url);
    let parseData = await data.json();
    //console.log(parseData);
    return parseData.result.results;
  } catch (err) {
    console.log("fetch failed:err");
  }
}
const main = async () => {
  results = await getData();

  for (let place of results) {
    // 判斷時間
    let xpostDate = place["xpostDate"].slice(0, 4);
    if (Number(xpostDate) >= 2015) {
      let address = place["address"].slice(5, 8); //地址
      //console.log(address);

      let title = place["stitle"]; // 景點名稱
      titles.push(title);
      let longitude = place["longitude"]; // 經度
      let latitude = place["latitude"]; // 緯度

      let file = place["file"].toLowerCase();
      let findFile = file.indexOf(".jpg");
      let picture = place["file"].slice(0, findFile + 4); // 照片
      pictures.push(picture);
    }
  }
  let btn = document.querySelector("#btn");

  for (let i = 0; i < titles.length; i++) {
    let box = document.querySelectorAll(".box");
    let img = document.createElement("img");

    let pictureTitle = document.querySelectorAll(".pictureTitle");

    let photo = document.createElement("div");
    photo.className = "picture";
    let word = document.createElement("div");
    let name = document.createElement("div");

    if (i < 2) {
      box[i].appendChild(img);
      img.setAttribute("src", pictures[i]);
      // box[i].textContent = titles[i];
      box[i].appendChild(word);
      word.textContent = titles[i];
      word.className = "word";
    } else if ((i >= 2) & (i < 10)) {
      pictureTitle[i - 2].appendChild(photo);
      photo.appendChild(img);
      img.setAttribute("src", pictures[i]);
      pictureTitle[i - 2].appendChild(name);
      name.textContent = titles[i];
      name.className = "name";
    }
  }
  function mouseOver() {
    btn.className = "btnIn";
  }
  function mouseOut() {
    btn.className = "btnOut";
  }
  btn.addEventListener("mouseover", mouseOver);
  btn.addEventListener("mouseout", mouseOut);
};

main();

let currentItems = 10;
async function loadMore() {
  results = await getData();
  const btn = document.querySelector("#btn");

  if (currentItems < pictures.length) {
    for (let i = currentItems; i < currentItems + 8; i++) {
      const pictureTitles = [...document.querySelectorAll(".pictureTitle")];
      let photo = document.createElement("div");
      photo.className = "picture";
      let name = document.createElement("div");
      let img = document.createElement("img");
      pictureTitles[i - 2].appendChild(photo);
      photo.appendChild(img);
      img.setAttribute("src", pictures[i]);
      pictureTitles[i - 2].appendChild(name);
      name.textContent = titles[i];
      name.className = "name";
    }
  } else {
    btn.style.display = "none";
    alert("已經到底了！！");
  }
  currentItems += 8;
}
