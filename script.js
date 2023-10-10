let page = document.documentElement
const n_o_l = document.createElement("DIV")
const n_o_l_r = document.createElement("input")

n_o_l_r.type = 'range'
n_o_l_r.min = 1
n_o_l_r.max = 10
n_o_l_r.value = 2
n_o_l_r.id = 'n_o_l_r'
n_o_l_r.style.zIndex = '9002'
n_o_l_r.style.position = 'fixed'
n_o_l_r.style.right = 0
n_o_l_r.style.bottom = '7px'
n_o_l_r.style.backgroundColor = 'black'
n_o_l_r.style.accentColor = 'red'
n_o_l_r.style.pointerEvents = 'all'

n_o_l_r.oninput = (e) => {
    n_o_l.style.backgroundColor = `rgba(0,0,0,${+e.target.value / 10})`
}

n_o_l.style.zIndex = '9001'
n_o_l.style.position = 'fixed'
n_o_l.style.overflow = 'hidden'
n_o_l.style.right = '0'
n_o_l.style.top = '0'
n_o_l.style.backgroundColor = 'rgba(0,0,0,0.2)'
// n_o_l.style.resize = 'both'
// n_o_l.style.overflow = 'auto'
n_o_l.style.width = '100vw'
n_o_l.style.height = '100vh'
// n_o_l.style.transform = 'rotateY(180deg)'
// n_o_l.style.maxWidth = '99.2vw'
// n_o_l.style.maxHeight = '99.9vh'
n_o_l.style.pointerEvents = 'none'
// n_o_l.style

page.appendChild(n_o_l)
// page.appendChild(n_o_l_r)
n_o_l.appendChild(n_o_l_r)


// Check if the altKey and keyCode properties are true for Alt + N
document.addEventListener("keydown", function (event) {
    if (event.altKey && event.keyCode == 78) {
        n_o_l.classList.toggle('no_light')
        n_o_l_r.focus()
    }
});
