const app = "I don't do much.";

// fetch('https://api.github.com/davidtenenbaum87/repos').
//   then(res => res.json()).
//   then(json => console.log(json))

const token = '77068a6bad180d5e656ea90cf20579425c3d0a9f'
fetch('https://api.github.com/davidtenenbaum87/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
