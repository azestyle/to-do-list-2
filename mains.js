let form = document.querySelector(".form");
let planhdr = document.querySelector(".tittle");
let plantxt = document.querySelector(".textplan");
let planbody = document.querySelector(".plan-body");
let localebox = JSON.parse(localStorage.getItem("cartgr")) || [];



form.addEventListener("submit", (el) => {
  el.preventDefault();
  Handleplan(planhdr, plantxt);
});

function Handleplan(hdr, text) {
  let table = {};

  if (hdr.value.trim() !== "" && text.value.trim() !== "") {
    table = {
      tbltittle: hdr.value,
      tblplan: text.value,
    };

    localebox.push(table);
    localStorage.setItem("cartgr", JSON.stringify(localebox));
    getdisplay();
    hdr.value = "";
    text.value = "";
  }
}
function getdisplay() {
  planbody.innerHTML = "";
  let takeitem = JSON.parse(localStorage.getItem("cartgr")) || [];
  takeitem.forEach((el, index) => {
    let handlediv = document.createElement("div");
    handlediv.classList.add("handlediv");
    handlediv.innerHTML = `<h1>${el.tbltittle}</h1>
              <textarea disabled class="headertxtarea">${el.tblplan}</textarea> 
              <div> 
              <button class="edit">Məlumatı yenilə</button>
              <button class="delete">Listi sil</button>
              </div>`;
    
    
    handlediv.querySelector(".delete").addEventListener("click", () => {
      handlediv.remove();
      localebox.splice(index, 1);
      localStorage.setItem("cartgr", JSON.stringify(localebox));
      getdisplay();
    });

    handlediv.querySelector(".edit").addEventListener("click", () => {
      let headertxtare = handlediv.querySelector(".headertxtarea");
      if (headertxtare.disabled) {
        headertxtare.disabled = false;
      } else {
        headertxtare.disabled = true;
        localebox[index].tblplan=headertxtare.value;
        localStorage.setItem("cartgr", JSON.stringify(localebox));
        getdisplay();
      }
    });
    planbody.append(handlediv);
  });
}

document.addEventListener("DOMContentLoaded", (mani) => {
  getdisplay();
});
