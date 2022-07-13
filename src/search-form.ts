import { renderBlock } from "./lib.js";
import { today, defaultStart, defaultFinish, maxDayFinish } from './dates.js'
//import { searchHandler } from './helpers/search-handler.js'
import { baseUrl } from './SDK/index.js'
import { renderSearchResultBlock} from './search-results.js'


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
//searchHandler();
fetchPlaces();
})
function fetchPlaces() {
  fetch(baseUrl + '/places/1')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
}

}

interface SearchFormData {
  city: string;
  checkInDate: any;
  checkOutDate: any;
  maxPrice: number
 }

 let formData: SearchFormData = {
   
  city: "Санкт-Петербург",
  checkInDate: 2022-7-22,
  checkOutDate: 2022-7-22,
  maxPrice: 4000
}

function search(searchForm: SearchFormData): void {
  console.log("city: ", searchForm.city);
  console.log("dayStart: ", searchForm.checkInDate);
  console.log("dayFinish: ", searchForm.checkOutDate);
  console.log(" maxPrice: ", searchForm.maxPrice);
  }

  search(formData);
