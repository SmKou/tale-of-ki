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

const settings = {
    switches: document.querySelectorAll('.setting .toggle-switch'),
    on: document.querySelectorAll('.toggle-switch .on'),
    off: document.querySelectorAll('.toggle-switch .off')
}

const toggle = e => {
    const sec = e.target.innerHTML.toLowerCase()
    console.log(main.ui[sec].classList, main.ui.aside.classList)
    if (main.ui[sec].classList.contains('collapsed')) {
        main.ui[sec].classList.remove('collapsed')
        main.ui.aside.classList.remove('collapsed')
    }
    else {
        main.ui[sec].classList.add('collapsed')
    
        let allCollapsed = true
        document.querySelectorAll('aside section').forEach(section => {
            if (!section.classList.contains('collapsed'))
                allCollapsed = false
        })

        console.log(allCollapsed)
        if (allCollapsed)
            main.ui.aside.classList.remove('collapsed')
    }
}

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

main.ui.ipt.text.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        e.preventDefault()
        main.ui.ipt.btn.click()
    }
})

/* --------------------------------------------- Settings */

// If settings disabled (localstorage inaccessible)

for (let i = 0; i < settings.on.length; ++i) {
    const eSwitch = settings.switches[i]
    settings.on[i].addEventListener('click', () => {
        const [, s, mode] = eSwitch.classList
        if (mode) return;
        eSwitch.classList.toggle('on')
    })
    settings.off[i].addEventListener('click', () => {
        const [, s, mode] = eSwitch.classList
        if (!mode) return;
        eSwitch.classList.toggle('on')
    })
}

// Save to localstorage