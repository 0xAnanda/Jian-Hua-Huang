async function searchName() {
  username = document.querySelector("#username").value;
  const url = `/api/member?username=${username}`;
  let data = await fetch(url);
  let parseData = await data.json();
  searchBox = document.querySelector("#searchBox");
  p = document.createElement("p");
  searchBox.appendChild(p);
  console.log(parseData.data.name);
  p.innerHTML = parseData.data.name + " (" + parseData.data.username + ")";
}

const changeName = async () => {
  wantChange = document.querySelector("#changeName").value;

  const data = { name: wantChange };
  const url = `/member`;
  return await fetch(url, {
    body: JSON.stringify(data),
    cache: "no-cache",
    credentials: "same-original",
    headers: { "Content-type": "application.json" },
    method: "PATCH",
    mode: "cors",
  })
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then((data) => {
      console.log(data);
    });
  // let parseData = await data.json();
  changeBox = document.querySelector("#changeBox");
  p = document.createElement("p");
  searchBox.appendChild(p);
  p.innerHTML = { res };
};
