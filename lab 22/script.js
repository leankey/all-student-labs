document.addEventListener('DOMContentLoaded', function() {


// Список продуктов
const itemList = [
    { id: "item1", name: "item1name", price: "item1price", num: "item1num", addBtn: "item1AddBtn" },
    { id: "item2", name: "item2name", price: "item2price", num: "item2num", addBtn: "item2AddBtn" },
    { id: "item3", name: "item3name", price: "item3price", num: "item3num", addBtn: "item3AddBtn" },
    { id: "item4", name: "item4name", price: "item4price", num: "item4num", addBtn: "item4AddBtn" },
  ];
  
  // Общая сумма корзины
  let totalPrice = 0;
  
  // Количество товаров в корзине
  let itemsCount = 0;
  
  // Функция для обновления счетчика товаров в корзине
  function updateItemsCount() {
    const countSpan = document.getElementById("itemsCount");
    countSpan.innerText = itemsCount;
  }
  
  // Функция для обновления общей суммы корзины
  function updateTotalPrice() {
    const priceSpan = document.getElementById("totalPrice");
    priceSpan.innerText = "$" + totalPrice;
  }
  
  // Функция для добавления продукта в корзину
  function addItemToCart(item) {
    const name = document.getElementById(item.name).innerText;
    const price = Number(document.getElementById(item.price).innerText.replace("$", ""));
    const num = Number(document.getElementById(item.num).value);
    const cartList = document.getElementById("allItems");
    let itemInCart = false;
    
    // Проверяем, есть ли уже такой товар в корзине
    for (let i = 0; i < cartList.children.length; i++) {
      const li = cartList.children[i];
      if (li.dataset.item === item.id) {
        const countSpan = li.querySelector(".count");
        const count = Number(countSpan.innerText);
        countSpan.innerText = count + num;
        itemInCart = true;
        break;
      }
    }
    
    // Если товара еще нет в корзине, добавляем новый элемент
    if (!itemInCart) {
      const li = document.createElement("li");
      li.dataset.item = item.id;
      const countSpan = document.createElement("span");
      countSpan.className = "count";
      countSpan.innerText = num;
      li.appendChild(countSpan);
      li.appendChild(document.createTextNode(` x ${name}`));
      cartList.appendChild(li);
    }
    
    // Обновляем сумму корзины и количество товаров
    totalPrice += price  * num;
    itemsCount += num;
    updateTotalPrice();
    updateItemsCount();
  }
  
  // Добавляем обработчик события на кнопки "Добавить в корзину"
  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    const addBtn = document.getElementById(item.addBtn);
    addBtn.addEventListener("click", function() {
      addItemToCart(item);
    });
  }

    
});