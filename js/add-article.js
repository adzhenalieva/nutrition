(function (w, d) {
    const editor = new window.EditorJS({
        holderId: 'editor',
        placeholder: 'Текст статьи...',
        tools: {
            header: {
                class: window.Header,
                config: {
                    placeholder: 'Заголовок',
                    levels: [2, 3, 4],
                    defaultLevel: 2
                }
            },
            embed: {
                class: window.Embed,
                inlineToolbar: true,
                config: {
                    placeholder: 'Введите описание',
                    services: {
                        youtube: true,
                    }
                }
            },
            list: {
                class: window.List,
                inlineToolbar: true,
            },
            checklist: {
                class: window.Checklist,
                inlineToolbar: true,
            },
            quote: {
                class: window.Quote,
                config: {
                    quotePlaceholder: 'Введите цитату',
                    captionPlaceholder: 'Введите автора',
                }
            },
            image: window.SimpleImage,
        }
    });

    const url = 'https://nutririon-7eadd.firebaseio.com/articles.json';

     function sendData(data) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

    const saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', function () {
        editor.save().then((savedData) => {
           sendData(savedData);
        });
    });


})(window, document);
