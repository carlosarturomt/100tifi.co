import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="Characters__inner">
      <article class="Characters__card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters__card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last Location: <span>${character.location.name}</span></h3>
      </article>
    </div>
    <div class="center">
      <ul class="pagination">
        <li class=""><a href="#/${character.id - 1}/"> < </a></li>
        <li class="select"><a href="#/${character.id}/">${character.id}</a></li>
        <li class=""><a href="#/${character.id + 1}/"> > </a></li>
      </ul>
    </div>
  `;
  return view;
};

export default Character; 