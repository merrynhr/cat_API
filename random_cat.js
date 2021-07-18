const result = document.getElementById('result')
const get_cat = document.getElementById('get_cat')

get_cat.addEventListener('click', getRandomCat)

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
      .then(res => res.json())
      .then(data => {
          result.innerHTML = `<img src="${data.file}" />`
      })
}