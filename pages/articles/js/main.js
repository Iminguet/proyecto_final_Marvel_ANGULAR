'use-stric';

const marvelApi = {
  showMethod: () => {
    const url =
      'https://gateway.marvel.com:443/v1/public/characters?&ts=5&apikey=3cf2caefb545a81ca97caaadf3d94029&hash=971422defcb3d60f08c8be54e5a0f13f&limit=12&offset=500';

    const container = document.getElementById('main-mainContainer');
    let htmlContainer = '';

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        for (const character of json.data.results) {
          // let heroWiki = character.urls[0].url;
          console.log(character);

          // htmlContainer += `
          //   <div class="muestra">
          //     <a href="${heroWiki}" target="_blank">
          //       <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
          //     </a>
          //     <h3>${character.name}</h3>
          //     <p>${character.description}</p>
          //   </div>`;

          htmlContainer += `

          <div class="articles-article">
            <div class="articles-expandDetail">
              <img src="./assets/atras.png" id="articles-backButton" alt="back icon" />
              <div class="articles-detailCard">
                  <div class="articles-imageDetail"></div>
                  <div class="articles-detailHistory"></div>
                  <div class="articles-detailLinks">
                    <a href="" target="_blank">
                      <img src="./assets/ironMan.png" alt="" />
                    </a>
                    <a href="" target="_blank">
                      <img src="./assets/ironMan.png" alt="" />
                    </a>
                  </div>
              </div>
            </div>
            <div class="articles-Card">
              <div class="articles-imgContainer">
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
              </div>
              <div class="articles-articleName"><p>${character.name}</p></div>
            </div>
          </div>
          `;
        }
        container.innerHTML = htmlContainer;
      });
  },
};

marvelApi.showMethod();
// <div class="articles-expandDetail">
//     <img src="./assets/atras.png" id="articles-backButton" alt="back icon" />

//     <div class="articles-detailCard">
//       <div class="articles-imageDetail"></div>
//       <div class="articles-detailHistory"></div>
//       <div class="articles-detailLinks">
//         <a href="" target="_blank">
//           <img src="./assets/ironMan.png" alt="" />
//         </a>
//         <a href="" target="_blank">
//           <img src="./assets/ironMan.png" alt="" />
//         </a>
//       </div>
//     </div>
//   </div>
//   <div class="articles-Card">
//     <div class="articles-imgContainer"></div>
//     <div class="articles-articleName"><p></p></div>
//   </div>
// <!-- JavaScript Bundle with Popper -->
