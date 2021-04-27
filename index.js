window.addEventListener("DOMContentLoaded", () => {



  const container = document.querySelector('.content')

  const sportsNews = document.querySelector('.sportsNews');

  const logo = document.querySelector('.logo')

  logo.addEventListener('click',() => {
    container.textContent = "";
    newsGlav();
  })
  newsGlav()
  function newsGlav() {
    fetch('https://608672f6a3b9c200173b5def.mockapi.io/news')

      .then(res => res.json())

      .then((data) => {
        const bossBar = document.createElement('div')
        for (let i = 0; i < 6; i++) {

          let mainNews = document.createElement('div')
          let imgNews = document.createElement('img')
          imgNews.classList.add('mainNews')
          let head = document.createElement('h4');
          head.prepend(data[i].title);
          mainNews.classList.add('img');
          imgNews.src = data[i].img
          mainNews.prepend(imgNews)
          mainNews.append(head)
          container.append(bossBar)
          bossBar.append(mainNews)
          mainNews.id = data[i].id
        }

          const sideBar = document.createElement('sideBar');
          sideBar.classList.add('sideBar');
          for (let i = 6; i < data.length; i++) {
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

  }






  sportsNews.addEventListener('click', () => {


    container.textContent = '';

  fetch('https://608672f6a3b9c200173b5def.mockapi.io/news?categoryId=1')

    .then(res => res.json())

    .then( (data) => {
      const bossBar = document.createElement('div')
      for(let i = 0; i < 2; i++){
        let mainNews = document.createElement('div')
        let imgNews = document.createElement('img')
        imgNews.classList.add('mainNews')
        let head = document.createElement('h4');
        head.prepend(data[i].title);
        mainNews.classList.add('img');
        imgNews.src = data[i].img
        mainNews.prepend(imgNews)
        mainNews.append(head)
        container.append(bossBar)
        bossBar.append(mainNews)
        mainNews.id = data[i].id


            mainNews.addEventListener('click', () =>{
              const id = mainNews.id - 1;
              container.textContent = '';
              head.prepend(data[i].title);
              mainNews.classList.add('img');
              imgNews.src = data[i].img
              mainNews.prepend(imgNews)
              mainNews.append(head)
              mainNews.append(data[i].text)
              container.prepend(mainNews)

        })
      }


      const sideBar = document.createElement('sideBar');
      sideBar.classList.add('sideBar');
      for (let i = 1; i < data.length; i++) {
        let mainNews = document.createElement('div');
        mainNews.classList.add('newsDiv');
        let imgNews = document.createElement('img');
        imgNews.classList.add('image');
        let head = document.createElement('h4');
        imgNews.src = data[i].img;
        mainNews.append(imgNews);
        mainNews.append(head);
        head.prepend(data[i].title)
        container.append(sideBar);
        sideBar.append(mainNews);
        mainNews.id = data[i].id


            mainNews.addEventListener('click', () =>{
              const id = mainNews.id - 1;
              container.textContent = '';
              head.prepend(data[i].title);
              mainNews.classList.add('img');
              imgNews.src = data[i].img
              mainNews.prepend(imgNews)
              mainNews.append(head)
              mainNews.append(data[i].text)
              container.prepend(mainNews)
            })
          }

  })
  })


  const politsNews = document.querySelector('.politsNews');

  politsNews.addEventListener('click', () =>{
    container.textContent = '';
    fetch('https://608672f6a3b9c200173b5def.mockapi.io/news?categoryId=2')

      .then(res => res.json())
      .then(data => {
        const bossBar = document.createElement('div');
        for(let i = 0; i < 2; i++){
          let mainNews = document.createElement('div')
          let imgNews = document.createElement('img')
          imgNews.classList.add('mainNews')
          let head = document.createElement('h4');
          head.prepend(data[i].title);
          mainNews.classList.add('img');
          imgNews.src = data[i].img
          mainNews.prepend(imgNews)
          mainNews.append(head)
          container.append(bossBar)
          bossBar.append(mainNews)
          mainNews.id = data[i].id


          mainNews.addEventListener('click', () =>{
            container.textContent = '';
            head.prepend(data[i].title);
            mainNews.classList.add('img');
            imgNews.src = data[i].img
            mainNews.prepend(imgNews)
            mainNews.append(head)
            mainNews.append(data[i].text)
            container.prepend(mainNews)

          })
        }


        const sideBar = document.createElement('sideBar');
        sideBar.classList.add('sideBar');
        for (let i = 1; i < data.length; i++) {
          let mainNews = document.createElement('div');
          mainNews.classList.add('newsDiv');
          let imgNews = document.createElement('img');
          imgNews.classList.add('image');
          let head = document.createElement('h4');
          imgNews.src = data[i].img;
          mainNews.append(imgNews);
          mainNews.append(head);
          head.prepend(data[i].title)
          container.append(sideBar);
          sideBar.append(mainNews);
          mainNews.id = data[i].id


          mainNews.addEventListener('click', () =>{
            const id = mainNews.id - 1;
            container.textContent = '';
            head.prepend(data[i].title);
            mainNews.classList.add('img');
            imgNews.src = data[i].img
            mainNews.prepend(imgNews)
            mainNews.append(head)
            mainNews.append(data[i].text)
            container.prepend(mainNews)
          })
        }

      })
  })


  const incidentsNews = document.querySelector('.incidentsNews');

  incidentsNews.addEventListener('click', () =>{
    container.textContent = '';
    fetch('https://608672f6a3b9c200173b5def.mockapi.io/news?categoryId=3')

      .then(res => res.json())
      .then(data => {
        const bossBar = document.createElement('div');
        for (let i = 0; i < 2; i++) {
          let mainNews = document.createElement('div');
          let imgNews = document.createElement('img');
          mainNews.classList.add('mainNews');
          imgNews.classList.add('img');
          let head = document.createElement('h4');
          mainNews.append(imgNews);
          mainNews.append(head);
          imgNews.src = data[i].img;
          head.prepend(data[i].title);
          bossBar.append(mainNews);
          container.append(bossBar);
          mainNews.id = data[i].id


              mainNews.addEventListener('click', () =>{
                const id = mainNews.id - 1;
                container.textContent = '';
                head.prepend(data[i].title);
                mainNews.classList.add('img');
                imgNews.src = data[i].img
                mainNews.prepend(imgNews)
                mainNews.append(head)
                mainNews.append(data[i].text)
                container.prepend(mainNews)

          })

        }

        const sideBar = document.createElement('sideBar');
        sideBar.classList.add('sideBar');
        for (let i = 2; i < data.length; i++) {
          let mainNews = document.createElement('div');
          mainNews.classList.add('newsDiv');
          let image = document.createElement('img');
          image.classList.add('image');
          let head = document.createElement('h4');
          image.src = data[i].img;
          mainNews.append(image);
          mainNews.append(head);
          head.prepend(data[i].title)
          container.append(sideBar);
          sideBar.append(mainNews);
          mainNews.id = data[i].id

              mainNews.addEventListener('click', () =>{
                container.textContent = '';
                head.prepend(data[i].title);
                mainNews.classList.add('img');
                image.src = data[i].img
                mainNews.prepend(image)
                mainNews.append(head)
                mainNews.append(data[i].text)
                container.prepend(mainNews)
              })

        }
      })
  })


  const itNews = document.querySelector('.itNews');

  itNews.addEventListener('click', () =>{
    container.textContent = '';
    fetch('https://60868e61a3b9c200173b63d0.mockapi.io/itNews?categoryIt=4')

      .then(res => res.json())
      .then(data => {
        const bossBar = document.createElement('div');
        for (let i = 0; i < 2; i++) {
          let mainNews = document.createElement('div');
          let imgNews = document.createElement('img');
          mainNews.classList.add('mainNews');
          imgNews.classList.add('img');
          let head = document.createElement('h4');
          mainNews.append(imgNews);
          mainNews.append(head);
          imgNews.src = data[i].img;
          head.prepend(data[i].title);
          bossBar.append(mainNews);
          container.append(bossBar);
          mainNews.id = data[i].id


                mainNews.addEventListener('click', () =>{
                const id = mainNews.id - 1;
                container.textContent = '';
                head.prepend(data[i].title);
                mainNews.classList.add('img');
                imgNews.src = data[i].img
                mainNews.prepend(imgNews)
                mainNews.append(head)
                mainNews.append(data[i].text)
                container.prepend(mainNews)
              })



        }

        const sideBar = document.createElement('sideBar');
        sideBar.classList.add('sideBar');
        for (let i = 2; i < data.length; i++) {
          let mainNews = document.createElement('div');
          mainNews.classList.add('newsDiv');
          let imgNews = document.createElement('img');
          imgNews.classList.add('image');
          let head = document.createElement('h4');
          imgNews.src = data[i].img;
          mainNews.append(imgNews);
          mainNews.append(head);
          head.prepend(data[i].title)
          container.append(sideBar);
          sideBar.append(mainNews);
          mainNews.id = data[i].id



              mainNews.addEventListener('click', () =>{
                const id = mainNews.id - 1;
                container.textContent = '';
                head.prepend(data[i].title);
                mainNews.classList.add('img');
                imgNews.src = data[i].img
                mainNews.prepend(imgNews)
                mainNews.append(head)
                mainNews.append(data[i].text)
                container.prepend(mainNews)
              })
            }


      })
  })

})

