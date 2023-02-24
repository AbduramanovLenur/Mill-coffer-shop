const sort = (event, productArray, sortTexts) => {
  let productSortArray = [...productArray];

  switch (event.target.value) {
    case sortTexts[0]:
      productSortArray = [...productArray];
      break;
    case sortTexts[1]:
      productSortArray.sort((a, b) => a.price - b.price);
      break;
    case sortTexts[2]:
      productSortArray.sort((a, b) => b.price - a.price);
      break;
    case sortTexts[3]:
      productSortArray.sort((a, b) => a.rating - b.rating);
      break;
  };

  return productSortArray;
};

export default sort;
