import { renderBlock } from "./lib.js";

export let today = new Date();
 console.log(today);
 
 export let maxDayFinish = new Date(today.getFullYear(), today.getMonth()+2, 0);
 console.log(maxDayFinish);
 
 export let defaultStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
 console.log(defaultStart);
 
 export let defaultFinish = new Date(today.getFullYear(), today.getMonth(), today.getDate()+3);
 console.log(defaultFinish);


export function renderSearchFormBlock(today, maxDayFinish) {
 
 
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
          <input id="check-in-date" type="date" value="${today || defaultStart}" min="${today}" max="${maxDayFinish}" name="checkin" />
        </div>
        <div>
          <label for="check-out-date">Дата выезда</label>
          <input id="check-out-date" type="date" value="${defaultFinish}" min="${defaultFinish}" max="${maxDayFinish}" name="checkout" />
        </div>
        <div>
          <label for="max-price">Макс. цена суток</label>
          <input id="max-price" type="text" value="" name="price" class="max-price" />
        </div>
        <div>
          <div><button>Найти</button></div>defaultStart
        </div>
      </div>
    </fieldset>
  </form>
  `
)
}


interface SearchFormData {
  city: string;
  dayStart: Date;
  dayFinish: Date;
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
  }

  search(formData);
