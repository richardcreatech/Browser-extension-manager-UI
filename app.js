const extItems = document.getElementById('extItems');




extItems.innerHTML = ``

document.addEventListener('DOMContentLoaded', async () => {
  
  let dataFetcher = await fetch('data.json')
      .then(res => res.json())
    .then(data => data)
  let modifiedArray = [];


const display_all_items = async function () {
    extItems.innerHTML = ``
    
    
    
    
    // dataConverter = dataFetcher.json();
    
    // dataConverter.then()

    dataFetcher.forEach((element) => {
        extItems.innerHTML +=    `
         <div class="item-container">

          <!-- It holds both the extension icon and the description -->
          <div class="itemInfo1">
          <span class="extIcon">
          
         <!--  <i class="fa-solid fa-feather-pointed"></i>-->
          

         <img id="logo" src="${element.logo}" alt="" />
          
          </span>

          <span class="itemInfo2">
            <h2>${element.name}</h2>
            <p class="itemInfo2Paragragh">
              ${element.description}
            </p>
          </span>
          </div>

          <!-- This removes and toggles between active and inactive extensions -->
          <span class="toggleRemove">
            <button class="removeButton">Remove</button>

            <div class="toggleMe">
              <span>
                <i class="fa-solid fa-headphones-simple"></i>
              </span>
            </div>
          </span>

        </div>
        `;
    });


}
display_all_items()
const display_active_items = async function () {
    extItems.innerHTML = ``
    
    
    // dataConverter = dataFetcher.json();
    
    // dataConverter.then()

    dataFetcher.forEach(element => {
        extItems.innerHTML += element.isActive ?   `
         <div class="item-container">

          <!-- It holds both the extension icon and the description -->
          <div class="itemInfo1">
          <span class="extIcon">
          
         <!--  <i class="fa-solid fa-feather-pointed"></i>-->
          

         <img id="logo" src="${element.logo}" alt="" />
          
          </span>

          <span class="itemInfo2">
            <h2>${element.name}</h2>
            <p class="itemInfo2Paragragh">
              ${element.description}
            </p>
          </span>
          </div>

          <!-- This removes and toggles between active and inactive extensions -->
          <span class="toggleRemove">
            <button class="removeButton">Remove</button>

            <div class="toggleMe">
              <span>
                <i class="fa-solid fa-headphones-simple"></i>
              </span>
            </div>
          </span>

        </div>
        ` : '';
    });


}

const display_inactive_items = async function () {
    extItems.innerHTML = ``
   
    

    dataFetcher.forEach(element => {
        extItems.innerHTML += element.isActive ?  '' :   `
         <div class="item-container">

          <!-- It holds both the extension icon and the description -->
          <div class="itemInfo1">
          <span class="extIcon">
          
         <!--  <i class="fa-solid fa-feather-pointed"></i>-->
          

         <img id="logo" src="${element.logo}" alt="" />
          
          </span>

          <span class="itemInfo2">
            <h2>${element.name}</h2>
            <p class="itemInfo2Paragragh">
              ${element.description}
            </p>
          </span>
          </div>

          <!-- This removes and toggles between active and inactive extensions -->
          <span class="toggleRemove">
            <button class="removeButton">Remove</button>

            <div class="toggleMe">
              <span>
                <i class="fa-solid fa-headphones-simple"></i>
              </span>
            </div>
          </span>

        </div>
        `;
    });


}


const type_of_display = document.querySelectorAll('#type_of_display li');

type_of_display.forEach(li => {
    li.onclick = () => {
        
        
        if (li.id == 'all') {
            display_all_items();
        }
        
        else if (li.id == 'active') {
            display_active_items();
            
        }
        
        else if (li.id == 'inactive') {
            display_inactive_items();
            
        }
        li.classList.add('pickMe');
        
    }
})
  
  


})
