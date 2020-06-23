(function (w, d) {
    const url = 'https://nutririon-7eadd.firebaseio.com/articles';
    const articleId = new URL(document.URL).searchParams.get('id');

    function getData() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', `${url}/${articleId}.json`, true);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            if (xhr.status !== 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                const editor = new window.EditorJS({
                    holderId: 'editor',
                    data: xhr.response,
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

            }
        };
    }

    getData();


})(window, document);
