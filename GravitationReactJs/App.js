
// const heading = document.createElement('h1')
// heading.textContent = "JS Says Heading"

// console.log(heading);
// const container = document.getElementById('root')
// container.appendChild(heading)

// Using react 
const data = ['Lion', 'Cheetah', 'Swan']
const lists = React.createElement('h1', {}, data.map(ele => 'Wild Cats' + ele + '---'))

const image = React.createElement('img', { src: 'https://cdn-icons-png.flaticon.com/256/4213/4213540.png' })

const heading1 = React.createElement('h1', { className: "heading", id: "h1" }, "Readt Says Heading")
console.log(heading1);
console.log(typeof heading1)

const heading2 = React.createElement('h2', {}, 'React Says Heading')
console.log(typeof heading2);

const container = React.createElement('div', { className: 'container' }, [lists, image, heading1, heading2])

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)