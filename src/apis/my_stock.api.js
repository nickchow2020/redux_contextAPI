export const getInitStockInfo = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({
            stockAmount:5,
            incrementAmount:3,
            decrementAmount:3})
      }, 5000)
  })
}