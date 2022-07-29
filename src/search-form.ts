import { renderBlock } from "./lib.js";
//import { today, defaultStart, defaultFinish, maxDayFinish } from './dates.js'
//import { searchHandler } from './helpers/search-handler.js'
import { baseUrl1 } from './API/index.js';
import { baseUrl2 } from './SDK/index.js';
import { renderSearchResultBlock} from './search-results.js'

export let today = new Date();
console.log(today);

export let maxDayFinish = new Date(today.getFullYear(), today.getMonth() + 2, 0);
console.log(maxDayFinish);

export let defaultStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
console.log(defaultStart);

export let defaultFinish = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
console.log(defaultFinish);

export function renderSearchFormBlock(checkInDate?: Date, checkOutDate?: Date) {
 
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
          <input id="check-in-date" type="date" value="${checkInDate || defaultStart}" min="${today}" max="${maxDayFinish}" name="checkin" />
        </div>
        <div>
          <label for="check-out-date">Дата выезда</label>
          <input id="check-out-date" type="date" value="${checkOutDate || defaultFinish}" min="${today}" max="${maxDayFinish}" name="checkin" />
        </div>
        <div>
          <label for="max-price">Макс. цена суток</label>
          <input id="max-price" type="text" value="" name="price" class="max-price" />
        </div>
        <div>
          <div><button>Найти</button></div>
        </div>
      </div>
    </fieldset>
  </form>
  `
)
const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();
fetchPlaces();
})
function fetchPlaces() {
const coordinates = '59.9386.30.3141';
const checkInDate = new Date(today).getTime() || new Date(defaultStart).getTime();
const checkOutDate = new Date(maxDayFinish).getTime() || new Date(defaultFinish).getTime();

  fetch(baseUrl2 + `/places?coordinates=${coordinates}&chekInDate=${checkInDate}&checkOutDate=${checkOutDate}&maxPrice=10000`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    renderSearchResultBlock(data)
  })
}

}
