export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      console.log('本地存储已被禁止')
    }
  }
}
