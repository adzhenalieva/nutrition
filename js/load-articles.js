(function (w, d) {
    const main = d.querySelector('.articles');
    const url = 'https://nutririon-7eadd.firebaseio.com/articles.json';


    function showArticle(article, id) {
        const section = d.createElement('section');
        const heading = d.createElement('h2');
        const text = d.createElement('div');
        const date = d.createElement('p');
        article.blocks.forEach(i => {
            if (i.type === "header") {
                heading.textContent = i.data.text;
            }
        });

        section.classList.add('article-section');
        heading.classList.add('article-title');
        date.classList.add('date');
        date.textContent = `Опубликовано ${new Date(article.time).toLocaleString()}`;

        heading.addEventListener('click', function () {
            w.location.replace(`article.html?id=${id}`);
        });


        main.appendChild(section);
        section.appendChild(heading);
        section.appendChild(date);
        section.appendChild(text);
    }

    function loadArticles() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', `${url}`, true);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            if (xhr.status !== 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                for (let key in xhr.response) {
                    showArticle(xhr.response[key], key)
                }
            }
        };
    }


    loadArticles();
})(window, document);
