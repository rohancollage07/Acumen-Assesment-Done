const searchButton = document.getElementById('searchButton')
const categoryInput = document.getElementById('categoryInput')
const gallery = document.querySelector('.gallery')



searchButton.addEventListener('click', fetchPicture)

function fetchPicture() {
  const category = categoryInput.value
  const apiUrl = `https://api.unsplash.com/search/photos?query=${category}&client_id=19MHB3pi8fvfwZDJx7S8nV4PxcQ6KHK9ut1wEKC8ijk`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        displayPicture(data.results[0])
      } else {
        gallery.innerHTML = 'No image found.'
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

function displayPicture(picture) {
  gallery.innerHTML = ''
  const img = document.createElement('img')
  img.src = picture.urls.regular
  img.alt = picture.alt_description

  const author = document.createElement('p')
  author.textContent = `Author: ${picture.user.name}`

  const description = document.createElement('p')
  description.textContent = `Description: ${picture.description}`

  const link = document.createElement('a')
  link.href = picture.links.html
  link.textContent = 'View on Unsplash'

  const pictureContainer = document.createElement('div')
  pictureContainer.classList.add('picture')
  pictureContainer.appendChild(img)
  pictureContainer.appendChild(author)
  pictureContainer.appendChild(description)
  pictureContainer.appendChild(link)

  gallery.appendChild(pictureContainer)
}
