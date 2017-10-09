(function () {
  class Burger {
    constructor (selector = '', opts = {}) {
      this.selector = selector
      this.opts = opts
      this.init()
    }
    init () {
     const _opts = {
        bars: 4,
        width: 50,
        height: 7,
        background: '#fff',
        anime: 'ease-in',
        cb: null
      }
      Object.assign()
      console.log(this._opts)
    }
    render () {
      const f = document.createDocumentFragment() 
      
    }
    listener () {
      
    }
    
  }
  new Burger('burger', {
    width: 60
  })
})()


const cb = function () { console.log('toggle open') }

const container = document.querySelector('.container')

container.addEventListener('click', (e) => {
  container.classList.toggle('open')
  cb.call(this)
}, false)














