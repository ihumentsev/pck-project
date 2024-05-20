(() => {
  const refs = {
    filterBtns: document.querySelectorAll("[data-filter]"),
    filteringItems: document.querySelectorAll("[data-item]"),
  };

  refs.filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.dataset.filter;

      // Убираем класс "active" со всех кнопок
      refs.filterBtns.forEach((otherBtn) => {
        otherBtn.classList.remove("active");
      });

      // Добавляем класс "active" только к нажатой кнопке
      btn.classList.add("active");

      console.log("Указаній фильтр в дата-атрибуте", filterValue); // Получаем значение фильтра из атрибута data-filter кнопки
      refs.filteringItems.forEach((item) => {
        console.log("Наш єлемент списка карточек", item);
        const contentValue = item.dataset.item; // Получаем значение контента из атрибута data-content элемента
        console.log("указаное фильтр-слово в дата-атрибуте", contentValue);
        if (contentValue === filterValue) {
          item.classList.add("filtred"); // Добавляем класс "filtred" элементу, если значение контента соответствует значению фильтра
        } else if (filterValue === "all") {
          item.classList.add("filtred");
        } else {
          item.classList.remove("filtred"); // Удаляем класс "filtred" у элемента, если значение контента не соответствует значению фильтра
        }
      });
    });
  });
})();
