import React from 'react'
import Select from 'react-select'

const SelectFilter = ({ field, color, availibility, products }) => {
  let options = [];
  let colors = [];
  for (let i = 0; i < products?.length; i++) {
    colors.push(products[i].color);
  }
  colors = colors.filter((value, index) => {
    return colors.indexOf(value) === index;
  })
  if (field === "color") {
    colors.forEach(element => options.push({ value: element, label: element }))
  } else {
    options = [
      { value: 'in stock', label: 'in stock' },
      { value: 'Out of stock', label: 'Out of stock' },
    ]
  }
  return (
    <div style={{ width: "100%" }} >
      {field === "color"
        ? <Select isSearchable={false} onChange={(e) => color(e.value)} options={options} />
        : <Select isSearchable={false} onChange={(e) => availibility(e.value)} options={options} />
      }
    </div>
  )
}

export default SelectFilter;
