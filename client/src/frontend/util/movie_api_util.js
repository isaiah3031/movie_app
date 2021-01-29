export const fetchMovies = (filters) => {
  return $.ajax({
    type: 'GET',
    url: 'http://img.omdbapi.com/?i=tt3896198&h=600&apikey=a70326c2',
    // data: {
    //   title: boundsObject(filters.bounds),
    //   genre: filters.minSeating,
    //   type: filters.type
    // },
    // error: (err) => console.log(err)
  })
}