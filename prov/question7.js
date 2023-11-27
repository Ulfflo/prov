// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1
const posts = document.querySelector("#posts");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.filter((user) => {
    if (user.userId == 1) {
      const postId1 = document.createElement("div");
      postId1.setAttribute("class", "post");
      postId1.innerHTML = `<div class="title">${user.title}</div><div>${user.body}</div>`;
      posts.appendChild(postId1);
    }
  });
  return user.userId == 1;
}

getPosts();
// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

const comments = document.querySelector("#postsWithComments");

async function getComments() {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response2 = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const data1 = await response1.json();
  const data2 = await response2.json();

  data1.forEach((user) => {
    const postId = document.createElement("div");
    postId.setAttribute("class", "post");
    postId.innerHTML = `<div class="title">${user.title}</div><div>${user.body}</div>`;
    postsWithComments.appendChild(postId);
  });

  data2.forEach((user) => {
    const comment = document.createElement("div");
    comment.innerHTML = `<div>${user.name}</div><div>${user.body}</div>`;
    postId.appendChild(comment);
  });
}

getComments();
