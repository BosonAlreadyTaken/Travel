let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log('本地存储已被禁止')
}

export default {
  city: defaultCity
}
