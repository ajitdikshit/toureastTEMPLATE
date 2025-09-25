
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";


const firebaseConfig = {
  //YOUR_FIREBASE_CONFIG
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const databaseURL = "https://toureast-c1b24-default-rtdb.asia-southeast1.firebasedatabase.app";
const db = getDatabase(app, databaseURL);


const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

postForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim() || 'Anonymous';
  const experience = document.getElementById('experienceInput').value.trim();

  if (experience.length > 0) {
    const postRef = ref(db, 'posts');
   
    push(postRef, {
      name: name,
      experience: experience,
      time: Date.now()
    });
    postForm.reset();
  }
});


function renderPosts(postsArray) {
  postsContainer.innerHTML = '';
  postsArray.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';

    const author = document.createElement('div');
    author.className = 'post-author';
    author.textContent = post.name;

    const content = document.createElement('div');
    content.className = 'post-content';
    content.textContent = post.experience;

    card.appendChild(author);
    card.appendChild(content);
    postsContainer.appendChild(card);
  });
}

const postsRef = ref(db, 'posts');
onValue(postsRef, (snapshot) => {
  const postsObject = snapshot.val();

  const postsArray = postsObject ? Object.values(postsObject).sort((a,b)=>b.time-a.time) : [];
  renderPosts(postsArray);
});

