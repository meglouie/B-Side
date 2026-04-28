document.addEventListener("DOMContentLoaded", () => {
  const postTitle = document.getElementById("postTitle");
  const postBody = document.getElementById("postBody");
  const postTag = document.getElementById("postTag");
  const submitPost = document.getElementById("submitPost");
  const postsList = document.getElementById("postsList");
  const charCounter = document.getElementById("charCounter");
  const threadCount = document.getElementById("threadCount");
  const topTopic = document.getElementById("topTopic");

  // posts that would appear upon reload
  const seedPosts = [
    {
      title: "Best late-night album?",
      body: "Looking for something moody and calm. Any suggestions?",
      tag: "Recommendations",
      likes: 4,
      author: "Megan",
    },
    {
      title: "Thoughts on short albums",
      body: "Do you prefer quick 30-minute albums or longer tracklists?",
      tag: "Album Talk",
      likes: 3,
      author: "Khanh Ha",
    },
  ];

  const posts = [...seedPosts];

  function updateStats() {
    //update the number of posted posts for the side bar
    threadCount.textContent = posts.length;

    //the number of posts for each topic
    const counts = {};
    posts.forEach((post) => {
      counts[post.tag] = (counts[post.tag] || 0) + 1;
    });

    //get the most used topic
    let mostUsed = "-";
    let bestCount = 0;
    Object.entries(counts).forEach(([tag, count]) => {
      if (count > bestCount) {
        bestCount = count;
        mostUsed = tag;
      }
    });
    topTopic.textContent = mostUsed;
  }

  //called everytime we make a new post
  function renderPosts() {
    postsList.innerHTML = ""; //clear, making sure we don't re-render the old ones
    const visiblePosts = posts;

    //create posts
    visiblePosts.forEach((post) => {
      //components of each post: article, header, body, footer
      const article = document.createElement("article");
      article.className = "post-item";

      const header = document.createElement("div");
      header.className = "post-item-header";

      const title = document.createElement("h4");
      title.textContent = post.title;

      const tag = document.createElement("span");
      tag.className = "post-tag";
      tag.textContent = post.tag;

      header.appendChild(title);
      header.appendChild(tag);

      const body = document.createElement("p");
      body.textContent = post.body;

      const footer = document.createElement("div");
      footer.className = "post-item-footer";

      const author = document.createElement("span");
      author.textContent = "by " + post.author;

      //every click adds one like to the count
      const likeBtn = document.createElement("button");
      likeBtn.className = "like-btn";
      likeBtn.textContent = "Like " + post.likes;
      likeBtn.addEventListener("click", () => {
        post.likes += 1;
        likeBtn.textContent = "Like " + post.likes;
      });

      footer.appendChild(author);
      footer.appendChild(likeBtn);

      article.appendChild(header);
      article.appendChild(body);
      article.appendChild(footer);
      postsList.appendChild(article);
    });
  }

  //take in the string the uer types as the "input"
  // update the character counter using the lengths the text
  postBody.addEventListener("input", () => {
    charCounter.textContent = postBody.value.length + " / 300";
  });

  submitPost.addEventListener("click", () => {
    const title = postTitle.value.trim();
    const body = postBody.value.trim();

    if (!title || !body) {
      return;
    }

    //add the new post to the beginning of posts array
    posts.unshift({
      title,
      body,
      tag: postTag.value,
      likes: 0,
      author: "You",
    });

    //reset the contents
    postTitle.value = "";
    postBody.value = "";
    charCounter.textContent = "0 / 300";

    //runs everytime we submit a new post
    updateStats();
    renderPosts();
  });

  //initial load
  updateStats();
  renderPosts();
});
