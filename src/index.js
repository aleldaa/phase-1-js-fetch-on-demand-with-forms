const init = () => {
    //selected the location to create event
  const inputForm = document.querySelector('form')
    //adds the event
  inputForm.addEventListener('submit', (event) => {
    //prevents website from resetting
    event.preventDefault()
    //getting the value we need
    const input = document.querySelector("input#searchByID")

    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            title.innerText = data.title;
            summary.innerText = data.summary
        })
  })
}

document.addEventListener('DOMContentLoaded', init);
