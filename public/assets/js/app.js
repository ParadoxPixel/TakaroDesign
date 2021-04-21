let toggle = document.querySelector('.sidebar-toggle > a')
toggle.onclick = () => {
    document.body.classList.toggle('sidebar-open')
}

let dropdowns = document.querySelectorAll('.dropdown-toggle')
dropdowns.forEach(dropdown => {
    let root = dropdown.parentElement
    let chevron = dropdown.querySelector('.fas')
    dropdown.onclick = () => {
        root.classList.toggle('dropdown-open')
        if(!chevron)
            return

        chevron.classList.toggle('fa-chevron-down')
        chevron.classList.toggle('fa-chevron-up')
    }
})