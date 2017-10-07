(function () {
  class Burger {
    constructor (selector = "", opt = {}) {
      this.selector = selector
      this.opt = opt
      this.init()
    }
    init () {

    }
    render () {
      const temp = `<div class=""></div>`
    }
    listener () {
      
    }
  }
})()

const cb = function () { console.log('toggle open') }

const container = document.querySelector('.container')

container.addEventListener('click', (e) => {
  container.classList.toggle('open')
  cb.call(this)
}, false)














