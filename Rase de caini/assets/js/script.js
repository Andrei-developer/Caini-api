async function Cauta() {
  try {
    const dogName = document.getElementById("DogName").value.toLowerCase();
    if (dogName === "") {
      alert("Selecteaza o rasa");
    } else {
      const fixedName = dogName.replace("-", "/");
      const response = await fetch(
        `https://dog.ceo/api/breed/${fixedName}/images/random`
      );
      if (!response.ok) {
        throw new Error("Rasa nu a fost gasita");
      }
      const data = await response.json();

      const DogImg = document.getElementById("DogImg");
      DogImg.src = data.message;
      DogImg.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}

async function options(option, img) {
  try {
    const option1 = document.getElementById(option).value;
    const option1Fixed = option1.replace("-", "/");
    const Img1 = document.getElementById(img);
    const raspuns = await fetch(
      `https://dog.ceo/api/breed/${option1Fixed}/images/random`
    );
    if (!raspuns.ok) {
      throw new Error("nu sa gasit raspuns");
    }
    const data = await raspuns.json();
    Img1.src = data.message;
    Img1.style.display = "block";
  } catch (e) {
    console.error(e);
  }
}

options("option1", "img1");
options("option2", "img2");
options("option3", "img3");
options("option4", "img4");
options("option5", "img5");
options("option6", "img6");
options("option7", "img7");
options("option8", "img8");
options("option9", "img9");
options("option10", "img10");

async function search(option) {
  try {
    const option1 = document.getElementById(option).value;
    const fixedOption = option1.replace("-", "/");

    const response = await fetch(
      `https://dog.ceo/api/breed/${fixedOption}/images/random`
    );
    if (!response.ok) {
      throw new Error("a aparut o eroare");
    }
    const data = await response.json();

    const DogImg = document.getElementById("DogImg");
    DogImg.src = data.message;
    DogImg.style.display = "block";
  } catch (e) {
    console.error(e);
  }
}

const container1 = document.getElementById(`container1`);
container1.addEventListener("click", () => {
  search("option1");
});

const container2 = document.getElementById(`container2`);
container2.addEventListener("click", () => {
  search("option2");
});

const container3 = document.getElementById(`container3`);
container3.addEventListener("click", () => {
  search("option3");
});

const container4 = document.getElementById(`container4`);
container4.addEventListener("click", () => {
  search("option4");
});

const container5 = document.getElementById(`container5`);
container5.addEventListener("click", () => {
  search("option5");
});

const container6 = document.getElementById(`container6`);
container6.addEventListener("click", () => {
  search("option6");
});

const container7 = document.getElementById(`container7`);
container7.addEventListener("click", () => {
  search("option7");
});

const container8 = document.getElementById(`container8`);
container8.addEventListener("click", () => {
  search("option8");
});

const container9 = document.getElementById(`container9`);
container9.addEventListener("click", () => {
  search("option9");
});

const container10 = document.getElementById(`container10`);
container10.addEventListener("click", () => {
  search("option10");
});
