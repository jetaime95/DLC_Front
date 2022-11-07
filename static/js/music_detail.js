// window.onload = ()=>{
//     console.log("로딩되었음")
// }

const backend_base_url = "http://127.0.0.1:8000"
const frontend_base_url = "http://127.0.0.1:5500"

//127.0.0.1/:5500/music_detail.html?id=1/

window.onload = async function loadMusic(){

    const urlStr = window.location.href;
    console.log(urlStr)

    const url = new URL(urlStr);

    const urlParams = url.searchParams;

    const id = urlParams.get('id')


    console.log(typeof parseInt(id))

    const response = await fetch('http://127.0.0.1:8000/music/'+parseInt(id), {method:'GET'})
    ///"GET /music/null/ HTTP/1.1" 404 3151  "GET /music/NaN HTTP/1.1" 404 3145
    // + ${id} + ''
    response_json = await response.json()

    console.log(response_json) // ƒ json() { [native code] }

    const music_image = document.getElementById('music_image')

    console.log(response_json.music_image)

    music_image.src=response_json.music_image

    const music_name = document.getElementById('music_name')

    music_name.innerText = response_json.name

    const music_year = document.getElementById('music_year')

    music_year.innerText = response_json.year

    const artist_name = document.getElementById('artist_name')

    artist_name.innerText = response_json.artists

    const music_album = document.getElementById('music_album')

    music_album.innerText = response_json.album

  

    response_json.forEach(element => {
        console.log(elemnet.name)
        const newMusic = document.createElement("div")
        const newMusic2 = '<div class=music_list>${elment.name}</div>'
        musics.insertAdjacentHTML("music_list", newMusic2)

    });
}

// async function Music() {
//     const payload = localStorage.getItem("payload");
//     const payload_parse = JSON.parse(payload)
//     const user_id = payload_parse.music_id
//     const response = await fetch(`${backend_base_url}/music/${music_id}/`, {
//         method: 'GET',
//     })
//     const data = await response.json();
//     console.log(data)
//     const username = document.getElementById("username")
//     username.innerText = payload_parse.username
//     const email = document.getElementById("email")
//     email.innerText = data.email
//     const bio = document.getElementById("bio")
//     bio.innerText = data.bio
// }




function search(){
    $('#nav-search').show()
    $('#nav-main').hide()
}
function close_search(){
    $('#nav-search').hide()
    $('#nav-main').show()
}

$('html').click(function(e) {   
    if(!$(e.target).hasClass("area")) {
        $('#nav-search').hide()
        $('#nav-main').show()
    }
});  
document.addEventListener('DOMContentLoaded', function() {
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', () => { 
likeButton.classList.toggle('selected');
});
});