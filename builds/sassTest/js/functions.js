const createProductsList = (div = 'root', amount = 3) => {
  const products = document.getElementById(div)
  if (products === null) {
    console.log(
      'createProductsList: ERROR: the root folders id does not exist!'
    )
    return false
  }
  for (let i = 1; i <= amount; i++) {
    const child = document.createElement('li')
    child.classList = 'item'
    const href = document.createElement('a')
    href.setAttribute('href', '#')
    const h2 = document.createElement('h2')
    h2.innerText = `Product ${i}`
    const p = document.createElement('p')
    p.innerText = `Text about the product ${i}`
    h2.classList = 'head'
    const fragment = new DocumentFragment()
    fragment.appendChild(h2)
    fragment.appendChild(p)
    products.appendChild(child).appendChild(href).appendChild(fragment)
  }
}
