import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { renderSearchSortBlock } from "./search-results.js";

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Wade Warren", "0", 3);
  renderSearchFormBlock("2022-08-5", "2022-08-21");
  renderSearchStubBlock();
  //renderSearchSortBlock ();
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
