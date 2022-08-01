import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { dates } from "./dates.js";
//import { getUserData } from "./user.js";

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Wade Warren", "0", 3);
 // getUserData ();
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления.",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});


