// Utility functions

export const generateUUID = () =>
  ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/1|0/g, function () {
      return (0 | Math.random() * 16)
        .toString(16)
    })


export const getStateFromStorage = () =>
  JSON.parse(window.localStorage.getItem('hyperapp-boilerplate'))

export const storeStateInStorage = (state) =>
  window.localStorage.setItem('hyperapp-boilerplate', JSON.stringify(state))
