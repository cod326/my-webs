let fileInput = document.querySelector(".file-input");
let image = document.querySelector(".image");
let uploadImg = document.querySelector(".upload-img");
let exhance = document.querySelector(".exhance");
let realImg = document.querySelector("#realImg");
let newImg = document.querySelector("#newImg");
let urlInput =document.querySelector("#url-input");
let exhanced = document.querySelector(".exhanced");
let download = document.querySelector(".download");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

uploadImg.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        urlInput.style.display = "none";
        reader.onload = (event) => {
            realImg.setAttribute("src", event.target.result);
            newImg.setAttribute("src", event.target.result);
            image.setAttribute("src", event.target.result);
            image.style.width = "100%";
            image.style.height = "100%";
        };
        
        reader.readAsDataURL(file);
    }
});

exhance.onclick = () => {
    if(fileInput.value !== "" || urlInput.value !== ""){
    uploadImg.style.display = "none";
    urlInput.style.display = "none";
    exhance.style.display = "none";
    newImg.style.display = "inline";
    realImg.style.display = "inline";
    exhanced.style.display= "block";
    }
    if (urlInput.value.trim() !== "") {
        realImg.setAttribute("src", urlInput.value);
        newImg.setAttribute("src", urlInput.value);
    }

    if (realImg.clientWidth > 125) {
        realImg.style.width = "125px";
        newImg.style.width = "125px";
    }
}


download.addEventListener("click", () => {
    canvas.width = realImg.naturalWidth;
    canvas.height = realImg.naturalHeight; 

    ctx.drawImage(realImg, 0, 0);

    const imgDataURL = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = imgDataURL;
    link.download = "undefined.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
        window.location.reload();
    }, 1000);
});
