const url = 'https://api.myjson.com/bins/152f9j';

var container = document.querySelector('.container');

fetch(url)
    .then(response => response.json())
    .then(data => {
            const rawData = data.data;
            return rawData
                .map(post => {

                        // .then(data => {
                        //   for (let post of data.data) {
                        // all needed data is listed below as an entity 
                        console.log(post);
                        let createdAt = post.createdAt,
                            description = post.description,
                            img = post.image,
                            tags = post.tags,
                            title = post.title;

                        setTimeout(() => {
                            // declare container element for future posts
                            // declate 1 template post
                            let postEl = document.createElement("article");
                            // add title for current post    
                            let header = document.createElement("h2");
                            header.append(title)
                            postEl.appendChild(header);
                            // add time, the post was created   
                            let time = document.createElement("div");
                            time.setAttribute("class", "post-time");
                            time.append(createdAt);
                            postEl.appendChild(time);
                            // add description for current post
                            let desc = document.createElement("figcaption");
                            desc.append(description)
                            postEl.appendChild(desc);

                            // add image for current post
                            let image = document.createElement("img");
                            image.setAttribute("src", img);
                            postEl.appendChild(image);

                            // add Delete button and its Event Listener
                            const deleteBtn = document.createElement("button");
                            deleteBtn.setAttribute("class", "delete-button");
                            deleteBtn.innerHTML = "Delete the post";

                            function deletePost(e) {
                                e.preventDefault();
                                postEl.remove();
                            }

                            postEl.appendChild(deleteBtn);
                            deleteBtn.onclick = deletePost;
                            // deleteBtn.addEventListener("click", deletePost, false);
                            // deleteBtn.addEventListener("click", function(){console.log("Post was deleted")},false);
                            container.appendChild(postEl);

                        }, 500)

                    });
                })
.catch((error) => {
    console.log(JSON.stringify(error));
});

// .then(data => {
//     var sortPosts = document.createElement("button");
//     sortPosts.setAttribute("class", "asc-sorting");
//     container.appendChild(sortPosts);
// })



// function sortPostsByDate(posts) {
//     return posts.map(post => {
//          const dateString = post.createAt.split('/').reverse().toString();
//          const dateTimestamp = Date.parse(dateString);

//          post.submissionDate = dateTimestamp;

//          return post;
//     }).sort((a, b) => b.submissionDate – a.submissionDate).map(record => {
//         const submissionDate = new Date(post.submissionDate).toLocaleDateString('en-GB');
//         post.submissionDate = submissionDate;

//         return post;
//    });
// };

// Scroll TBD
  // document.querySelector('body').onscroll = function(e) {
  //   let body = document.body
  //   if (this.scrollY >= body.scrollHeight / 2) { // Половина и более экрана прокрученно
  //     if (this.scrollY % 100 && ar.length) { // Подгружает если в массиве есть элементы

  //       b.appendChild(ar.shift()); // Добавляет элемент
  //     }
  //   }

  // };


   //     .map(post => {
   //       let createdAt = post.createdAt;       

   //       const dateString = post.createAt.split('/').reverse().toString();
   //       const dateTimestamp = Date.parse(dateString);

   //       post.submissionDate = dateTimestamp;

   //       return post;
   //  })
   //     .sort((a, b) => b.submissionDate - a.submissionDate).map(record => {
   //      const submissionDate = new Date(post.submissionDate).toLocaleDateString('en-GB');
   //      post.submissionDate = submissionDate;

   //      return post;
   // });
