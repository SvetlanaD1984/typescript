import { renderBlock } from "./lib.js";
import { baseUrl } from './API/index.js'
import { renderSearchResultBlock} from './search-results.js'

const ONE_DAY = 1;
const TWO_DAY = 2;
const ONE_MONTH = 1;
const TWO_MONTH = 2;


const today = new Date();
console.log(today);

const maxDayFinish = new Date(today.getFullYear(), today.getMonth() + TWO_MONTH, 0);
console.log(maxDayFinish);

const defaultStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() + ONE_DAY);
console.log(defaultStart);

const defaultFinish = new Date(today.getFullYear(), today.getMonth(), today.getDate() + ONE_DAY + TWO_DAY);
console.log(defaultFinish);


export function renderSearchFormBlock(dayStart?: Date, dayFinish?: Date) {
 
  renderBlock(
  'search-form-block',
  `
  <form>
    <fieldset class="search-filedset">
      <div class="row">
        <div>
          <label for="city">Город</label>
          <input id="city" type="text" disabled value="Санкт-Петербург" />
          <input type="hidden" disabled value="59.9386,30.3141" />
        </div>
        <!--<div class="providers">
          <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
          <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
        </div>--!>
      </div>
      <div class="row">
        <div>
          <label for="check-in-date">Дата заезда</label>
          <input id="check-in-date" type="date" value="${dayStart || defaultStart}" min="${today}" max="${maxDayFinish}" name="checkin" />
        </div>
        <div>
          <label for="check-out-date">Дата выезда</label>
          <input id="check-out-date" type="date" value="${dayFinish || defaultFinish}" min="${today}" max="${maxDayFinish}" name="checkin" />
        </div>
        <div>
          <label for="max-price">Макс. цена суток</label>
          <input id="max-price" type="text" value="" name="price" class="max-price" />
        </div>
        <div>
          <div><button id="btn-search">Найти</button></div>
        </div>
      </div>
    </fieldset>
  </form>
  `
)

const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
//searchHandler();
fetchPlaces();
})
function fetchPlaces() {
const coordinates = '59.9386.30.3141';
const checkInDate = new Date(today).getTime() || new Date(defaultStart).getTime();
const checkOutDate = new Date(maxDayFinish).getTime() || new Date(defaultFinish).getTime();

  fetch(baseUrl + `/places?coordinates=${coordinates}&chekInDate=${checkInDate}&checkOutDate=${checkOutDate}&maxPrice=10000`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    renderSearchResultBlock(data)
  })
}

}


interface SearchFormData {
  city: string;
  dayStart: any;
  dayFinish: any;
  priceOfDay: number
 }

 let formData: SearchFormData = {
   
  city: "Санкт-Петербург",
  dayStart: 2022-7-22,
  dayFinish: 2022-7-22,
  priceOfDay: 4000
}

function search(searchForm: SearchFormData): void {
  console.log("city: ", searchForm.city);
  console.log("dayStart: ", searchForm.dayStart);
  console.log("dayFinish: ", searchForm.dayFinish);
  console.log("priceOfDay: ", searchForm.priceOfDay);
  
  localStorage.setItem("formData", JSON.stringify(searchForm));
  const formData = localStorage.getItem("searchForm");
  }

  search(formData);

