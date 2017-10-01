function bookSearch() {
	// store user input
	var search = document.getElementById('search').value
	// empty any previous data
	document.getElementById('results').innerHTML = ""
	console.log(search)


	// make data request
	$.ajax({
		// url for the data base
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType:'json',

		// on success, then do this
		success: function(data){
			// loop through data in data.items
			for (i = 0; i < data.items.length; i++) {
				// store search books vlolume info
				var bookData = data.items[i].volumeInfo

				// create new elements
				// create newBook div to store each book result
				var newBook = document.createElement('div')
				// create new tag to store info for each book that can put in newBook div
				var newBookImg = document.createElement('img')
				var newBookTitle = document.createElement('h2')

				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
				 + "<img src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "''>"

				// console.log(data)
			}
		},

		type:'GET'
	})
}

document.getElementById('button').addEventListener('click', bookSearch, false)






// <img src="   ">