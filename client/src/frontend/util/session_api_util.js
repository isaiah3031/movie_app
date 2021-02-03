import $ from "jquery"

window.$ = $
window.jQuery = $

export const signup = user => 
  $.ajax({
    crossDomain: true,
    type: 'POST',
    url: 'http://localhost:3001/api/users',
    data: { user: user }
  })


export const login = user => 
  $.ajax({
    crossDomain: true,
    type: 'POST', 
    url: 'http://localhost:3001/api/sessions',
    data: { user: user }
  })

export const logout = () => 
  $.ajax({
    crossDomain: true,
    type: 'DELETE',
    url: 'http://localhost:3001/api/sessions'
  })
  