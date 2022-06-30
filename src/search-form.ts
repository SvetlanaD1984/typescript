import { renderBlock } from "./lib.js";

export function renderSearchFormBlock(dayStart, dayFinish) {
 
 let today = new Date();
 console.log(today);
 
 let maxDayFinish = new Date(today.getFullYear(), today.getMonth()+2, 0);
 console.log(maxDayFinish);
 
 let defaultStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
 console.log(defaultStart);
 
 let defaultFinish = new Date(today.getFullYear(), today.getMonth(), today.getDate()+3);
 console.log(defaultFinish);

 //document.getElementById('check-in-date').innerHTML = today;
 //document.getElementById('check-out-date').innerHTML = maxDayFinish;

 
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
          <input id="check-in-date" type="date" value="2022-07-01" min="2022-07-01" max="2022-08-31" name="checkin" />
        </div>
        <div>
          <label for="check-out-date">Дата выезда</label>
          <input id="check-out-date" type="date" value="2022-08-31" min="2022-07-03" max="2022-08-31" name="checkout" />
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
}


