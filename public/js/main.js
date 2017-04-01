window.onload = function () {
    "use strict";

    function showPosts(posts) {
        var postsHtml = document.createDocumentFragment();
        var t = document.querySelector('#mytemplate');

        posts.forEach(function addPost(post) {
            var clone = document.importNode(t.content, true);

            clone.querySelector('.title').innerText = post.title;
            clone.querySelector('.text').innerText = post.text;
            clone.querySelector('.created').innerText = post.dateCreated;
            clone.querySelector('.modified').innerText = post.dateModified;

            postsHtml.appendChild(clone)
        });

        document.querySelector("#blogContent").appendChild(postsHtml);
    }

    fetch("/posts")
        .then(function(response) { return response.json() })
        .then(showPosts)
        .catch(function (e) { console.error(e) });
}