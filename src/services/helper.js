function createData(id, name, color, availability) {
  return { id, name, color, availability };
}

export const generateRows = (products) => {
  let rows = [];
  products?.map(product => {
    rows.push(createData(product.id, product.name, product.color, product.availability))
  })

  return rows;
}

export const filterData = (rows, next, inputTxt, keys, filterOptions) => {
  let res = [];
  if (inputTxt !== "")
    res = rows?.slice(0, next).filter(item => {
      return keys.some(key => item[key].toLowerCase().includes(inputTxt))
    })
  if (res.length === 0) res = rows?.slice(0, next);

  let res2 = []
  if (filterOptions["availability"] !== '') {
    res2 = res?.slice(0, next).filter(function (item) {
      if (item["availability"] === undefined || item["availability"] != filterOptions["availability"]) {
        return false;
      } else {
        return true;
      }
    })
  } else {
    res2 = res;
  }
  if (res2.length === 0 && res.length === 0) res2 = rows?.slice(0, next);

  let res3 = []
  if (filterOptions["color"] !== '') {
    res3 = res2?.filter(function (item) {
      if (item["color"] === undefined || item["color"] != filterOptions["color"]) {
        return false;
      } else {
        return true;
      }
    })
  } else {
    res3 = res2;
  }
  if (res3.length === 0) res3 = rows?.slice(0, next);
  return res3;
}