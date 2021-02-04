import $ from "jquery"

export const editUserProfile = (profileData, userId) => {
  
  return $.ajax({
    type: 'GET',
    url: `http://localhost:3001/api/users/${userId}/edit`,
    data: {user: {watch_history: profileData['watchHistory']}},
  })
}