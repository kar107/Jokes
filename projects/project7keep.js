const addButton = document.getElementById("add");

const addNewNote = (text = "thpa") => {
  // console.log("ASDA");
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData =
    '<div class="operation"><button class="edit"><i class="fas fa-edit"></i></button><button class="delete"><i class="fas fa-trash-alt"></i></button></div><div class="main ${text ? "" : "hidden"}"></div><textarea class="${text ? "hidden" : ""}"></textarea>';

  note.insertAdjacentHTML("afterbegin", htmlData);

  // getting the refferences
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");
  // deletting the node
  delButton.addEventListener("click", () => {
    note.remove();
  });
  //

  document.body.appendChild(note);
};

addButton.addEventListener("click", () => addNewNote());
