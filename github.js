const input = document.querySelector("#input-search");
const btn = document.querySelector("#btn-search");
const nameProfile = document.querySelector("#name-profile");
const imgProfile = document.querySelector("#img-profile");
const userCreated = document.querySelector("#user-created");
const userLogin = document.querySelector("#user-login");
const userBio = document.querySelector("#user-bio");
const userRepos = document.querySelector("#user-repos");
const userFollowers = document.querySelector("#user-followers");     
const userFollowing = document.querySelector("#user-followings");
const userLocation = document.querySelector("#user-location");
const userBlog = document.querySelector("#user-blog");
const userTwitter = document.querySelector("#user-twitter");
const userCompany = document.querySelector("#user-company");

btn.onclick = () => {
    const username = input.value;
    input.value = "";
    if (username === "") {
        Swal.fire({
            title:"Error",
            text: "Campo vacío",
            icon:"error",
        });
    }
    obtenerDatos(username);
}

input.addEventListener("keyup", (e) => {
    if(e.key === "enter"){
        obtenerDatos(e.target.value);
    }
});

const obtenerDatos = async (username = "linder3hs") => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    
    if(data.message == "Not found"){
        Swal.fire({
            title:"Error",
            text: "Usuario no existe",
            icon:"error",
        });
        return;
    }
    setDataUser(data);
};

const setDataUser = (data) => {
    nameProfile.textContent = data.name;
    imgProfile.src = data.avatar_url;
    userCreated.textContent = data.created_at;
    userLogin.textContent = data.login;
    userBio.textContent = data.bio;
    userRepos.textContent = data.public_repos;
    userFollowers.textContent = data.followers;
    userFollowing.textContent = data.following;
    userLocation.textContent = data.location;
    userBlog.textContent = data.blog;
    userTwitter.textContent = data.twitter_username;
    userCompany.textContent = data.company;
};

obtenerDatos();





