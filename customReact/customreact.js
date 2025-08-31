function customRender(reactElement, container){
    /*const domElement = document.createElement
    (reactElement.type) //empty element gotcreated
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} //react uder the hood. lib use must use and write in such way and add this element in root

const mainContainer = document.querySelector('#root')

//render
customRender(reactElement, mainContainer)//inject react in main