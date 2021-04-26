window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.content')
  fetch('https://608672f6a3b9c200173b5def.mockapi.io/news?categoryId=1')

    .then(res => res.json())

    .then( (data) => {
      console.log(data)
      const bossBar = document.createElement('div')
      for(let i = 0; i < 2; i++){
        let mainNews = document.createElement('div')

        let imgNews = document.createElement('img')

        imgNews.classList.add('mainImg')

        let head = document.createElement('h4');
        head.prepend(data[i].title);
        mainNews.classList.add('img');
        imgNews.src = data[i].img
        mainNews.prepend(imgNews)
        mainNews.append(head)
        container.append(bossBar)
        bossBar.append(mainNews)

      }

      const sideBar = document.createElement('sideBar');
      sideBar.classList.add('sideBar');
      for (let i = 1; i < data.length; i++) {
        let newsDiv = document.createElement('div');
        newsDiv.classList.add('newsDiv');
        let image = document.createElement('img');
        image.classList.add('image');
        let h4 = document.createElement('h4');
        image.src = data[i].img;
        newsDiv.append(image);
        newsDiv.append(h4);
        h4.prepend(data[i].title)
        container.append(sideBar);
        sideBar.append(newsDiv);

      }
  })



})