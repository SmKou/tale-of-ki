const main = {
    ctrl: {
        act: document.getElementById('act-btn'),
        stats: document.getElementById('stats-btn'),
        bag: document.getElementById('bag-btn'),
        minmax: document.querySelector('.minmax-btn'),
        set: document.getElementById('set-btn')
    },
    ui: {
        text: document.querySelector('.ui-text'),
        ipt: {
            sec: document.querySelector('.ui-ipt'),
            text: document.querySelector('.ui-ipt textarea'),
            btn: document.querySelector('.ui-ipt button')
        },
        aside: document.querySelector('aside'),
        stats: document.querySelector('.ui-stats'),
        bag: document.querySelector('.ui-bag'),
        act: document.querySelector('.ui-act'),
        set: document.querySelector('.set')
    }
}

const toggle = e => {
    const sec = e.target.innerHTML.toLowerCase()
    if (main.ui[sec].classList.contains('collapsed')) {
        main.ui[sec].classList.remove('collapsed')
        main.ui.aside.classList.remove('collapsed')
    }
    else 
        main.ui[sec].classList.add('collapsed')
    
    let allCollapsed = true
    document.querySelectorAll('aside section').forEach(section => {
        if (!section.classList.contains('collapsed'))
            allCollapsed = false
    })

    if (allCollapsed)
        main.ui.aside.classList.add('collapsed')
}

main.ui.ipt.text.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        e.preventDefault()
        main.ui.ipt.btn.click()
    }
})

main.ui.ipt.btn.addEventListener('click', () => {
    const val = main.ui.ipt.text.value
    const p = document.createElement('p')
    p.setAttribute('class', 'player speech')
    p.append(document.createTextNode(val))
    main.ui.text.append(p)
    main.ui.ipt.text.value = ''
})

main.ctrl.act.addEventListener('click', toggle)
main.ctrl.stats.addEventListener('click', toggle)
main.ctrl.bag.addEventListener('click', toggle)
main.ctrl.set.addEventListener('click', toggle)

main.ctrl.minmax.addEventListener('click', e => {
    const [, mode] = e.target.classList
    if (mode === 'max') {
        e.target.classList.remove('max')
        e.target.classList.add('min')
        document.documentElement.requestFullscreen()
    }
    else {
        e.target.classList.remove('min')
        e.target.classList.add('max')
        document.exitFullscreen()
    }
})