const ui = {
    iaa: {
        ipt: document.getElementById('iaa-ipt'),
        disp: document.getElementById('iaa-name'),
        warn: document.querySelector('.iaa-warn')
    }
}

ui.iaa.ipt.addEventListener('change', e => {
    e.preventDefault()

    const val = e.target.value
    if (!/\d+/.test(val)) {
        ui.iaa.warn.classList.remove('no-disp')
        ui.iaa.warn.innerHTML = 'Invalid name'
        return false
    }
    
    ui.iaa.warn.classList.add('no-disp')
    ui.iaa.disp.innerHTML = val
    localStorage.setItem('iaa-name', val)
})