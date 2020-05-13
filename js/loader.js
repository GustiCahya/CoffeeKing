// Selector
const $ = (target) => {
    const elements = document.querySelectorAll(target)
    return (elements.length > 1) ? elements : document.querySelector(target)
}

// Initialize materialize attributes
document.addEventListener('DOMContentLoaded', () => {
    M.Modal.init($('.modal'))
    M.Parallax.init($('.parallax'))
    M.Sidenav.init($('.sidenav'))
    M.Slider.init($('.slider'), {
        full_width: true
    })
})

// All DOM Functions
function toggleModal() {
    const instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}