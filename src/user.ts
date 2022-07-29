import { renderBlock } from "./lib.js";

const user = {
  username: "Wade Warren",
  avatarUrl: "Wade Warren",
};
console.log(user);
localStorage.setItem("user", JSON.stringify(user));

const favoritesAmount = {
  favoriteItemsAmount: 3,
};
console.log(favoritesAmount);
localStorage.setItem("favoritesAmount", JSON.stringify(favoritesAmount));

const favoriteItems = {
  id: "1",
  name: "Wade",
  linkImg: "w",
};
console.log(favoriteItems);
localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));

export function renderUserBlock(username: string | null, avatarUrl: string | null, favoriteItemsAmount?: number | null) {
  const favoritesCaption =
    favoriteItemsAmount > 1 ? favoriteItemsAmount : "ничего нет";
  const hasFavoriteItems = favoriteItemsAmount > 1 ? true : false;
  const userBlock = localStorage.getItem("user");
  console.log(JSON.parse(userBlock));

  renderBlock(
    "user-block",
    `
    <div class="header-container">
      <img class="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}

function getUserData(user: unknown | null) {
  const userData = localStorage.getItem("user");
  console.log(JSON.parse(userData));
}

function getFavoritesAmount(favoritesAmount: unknown | null) {
  const favoritesData = localStorage.getItem("favoritesAmount");
  console.log(JSON.parse(favoritesData));
}

function toggleFavoriteItem(favoriteItems: unknown | null, favoriteItemsAmount?: number | null) {
  const hasFavoriteItems = favoriteItemsAmount > 1 ? true : false;
  if (!hasFavoriteItems) {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  } else {
    localStorage.removeItem("favoriteItems");
  }
}
