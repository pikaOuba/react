export const whichTransitionEvent = () => {
  const el = document.createElement('fakeelement')
  const transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  }

  const keys = Object.keys(transitions)

  for (let i = 0; i < keys.length; i++) {
    const t = keys[i]
    if (el.style[t] !== undefined) {
      return transitions[t]
    }
  }
}

export class Timer {
  constructor (callback, delay) {
    this._callback = callback
    this._remaining = delay
    this.resume()
  }

  pause () {
    this.clear()
    this._remaining -= new Date() - this.start
  }

  resume () {
    this._start = new Date()
    this.clear()
    this.timerId = setTimeout(this._callback, this._remaining)
  }

  clear () {
    clearTimeout(this._timerId)
  }
}