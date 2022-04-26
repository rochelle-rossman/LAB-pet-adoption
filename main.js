console.log("Pet Adoption")

const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://www.gannett-cdn.com/presto/2021/02/19/NTFO/cfc111cf-468c-4b93-a344-9ac92808576c-dino_1.jpg?crop=3221,1812,x0,y69&width=3200&height=1801&format=pjpg&auto=webp"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://iwc9c3sa3hy1j923hc1io8za-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/Hdr_Dino_Image_01.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2022/02/RR-COMP-p30-dino.jpg?strip=all&w=960"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://static.scientificamerican.com/sciam/cache/file/B4520B4E-BCC1-411C-BEC6541928BDB992_source.jpg?w=590&h=800&9DD618C2-44B0-4723-A4E1CF610359A966"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.pe.com/wp-content/uploads/2021/02/RPE-L-VDAYDINO-01-WP-1.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://cdn.shopify.com/s/files/1/2281/5369/products/101006_5_512x512.jpg?v=1625656974"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://cdn.shopify.com/s/files/1/1832/0821/files/catshark.jpg?v=1649869148"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://assets.puzzlefactory.pl/puzzle/211/488/original.jpg"
    }
];
  


let domString = "";
//UTILITY FUNCTION
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const renderButtons = () => {
  let domString = "";
  domString =
    `<button id="cat" type="button" class="btn btn-primary">Cat</button>
    <button id="dog" type="button" class="btn btn-primary">Dog</button>
    <button id="dino" type="button" class="btn btn-primary">Dino</button>
    <button id="all" type="button" class="btn btn-primary">All</button>`;
  renderToDom("#buttonContainer", domString)
};

//CARDS ON DOM
const cardsOnDom = (taco) => {
  let domString = "";
  for (const animal of taco) {
    domString +=
      `<div class="card" style="width: 18rem;">
  
      <div id="name" class="card-header">${animal.name}</div>
      <div id="image"><img src="${animal.imageUrl}" class="card-img-top" alt="..."></div>
      <div id="color"><h6>${animal.color}</h6></div>
      <div id="specialSkill">${animal.specialSkill}</div>
      <div id="type" class="card-footer">${animal.type}</div>
  
      </div>`;
  }
  renderToDom('#cardContainer', domString);
};

//MODAL ON DOM
const addPetModal = () => {
  let domString = "";
  domString = `<!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-pet">
    Add Pet
    </button>
    <!-- Modal -->
    <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Pet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">
        
          <form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Animal Id" id="animalId" aria-label="animal id" required>
            <label for="animalId">Pet's name</label>
          </div>

           <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="imageURL" id="imageUrl" aria-label="imageUrl" required>
            <label for="animalId">ImageURL</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
            <label for="title">Color</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="specialSkill" id="specialSkill" aria-label="specialSkill" required>
            <label for="title">Special Skill</label>
          </div>

          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="type" aria-label="type" required>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="dino">Dino</option>
            </select>
            <label for="category">Type</label>
          </div>
      
      <button type="submit" class="btn btn-success">Submit</button>
        </form>
          </div>
        </div>
      </div>
    </div>`;
  renderToDom('#modalContainer', domString);
  console.log("Modal");
};

//EVENT LISTENERS
function eventListeners() {
  let domString = "";
  document.querySelector('#buttonContainer').addEventListener('click', (e) => {
    console.log('clicked', e.target.id);
    if (e.target.id === 'all') {
      cardsOnDom(pets);
    } else if (e.target.id === "dog") {
      const dog = pets.filter((taco) => taco.type === e.target.id);
      domString = dog;
      cardsOnDom(dog);
    } else if (e.target.id === "cat") {
      const cat = pets.filter((taco) => taco.type === e.target.id);
      domString = cat;
      cardsOnDom(cat);
    } else if (e.target.id === "dino") {
      const dino = pets.filter((taco) => taco.type === e.target.id);
      domString = dino;
      cardsOnDom(dino);
    }
  }
  );
  const form = document.querySelector('form');
  form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      newPetObject = {
        name: document.querySelector("#animalId").value,
        color: document.querySelector("#color").value,
        specialSkill: document.querySelector("#specialSkill").value,
        type: document.querySelector("#type").value,
        // imageUrl: document.querySelector("#imageURL").value,
      },
    pets.push(newPetObject); 
    cardsOnDom(pets); 
    form.reset()

    });
};

  


//ON APP START
function startApp() {
  renderButtons();
  addPetModal();
  cardsOnDom(pets);
  eventListeners();
}

startApp();
