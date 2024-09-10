let home = document.getElementById("home");
let file_container = document.getElementById('file-container');
home.addEventListener("click",()=>{
    file_container.style.visibility="visible";
    searchBar.style.visibility="hidden";

});
let searchBar = document.getElementById('searchBar');
let searchSymbol = document.getElementById('searchSymbol');
searchSymbol.addEventListener("click",()=>{
  searchBar.style.visibility="visible";
  file_container.style.visibility="hidden";
});