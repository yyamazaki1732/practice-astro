const heading = document.getElementsByClassName('l-section__heading--secondary');

for (let i = 0; i < heading.length; i++) {
  heading[i].addEventListener('click', () => {
    console.log(heading[i])
  })
}