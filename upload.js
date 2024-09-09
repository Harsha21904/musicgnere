let fileupload = document.getElementsByClassName('upload-box');
fileupload.addEventListener('input',()=>{
    if(fileupload.files.length){
        let filename = fileupload.files[0].name;
        console.log(filename);
    }
}
);