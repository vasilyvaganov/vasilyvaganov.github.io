    document.querySelectorAll(".checkbox1").forEach(el => {
        el.onchange = () => {
            localStorage.setItem(el.id, el.checked)
            if (document.documentElement.hasAttribute('data-theme')) {
                document.documentElement.removeAttribute('data-theme')
                localStorage.removeItem('theme')
            } else {
                document.documentElement.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            }
        }
    })

    document.querySelectorAll(".checkbox1").forEach(el => {
        el.checked = localStorage.getItem(el.id) === "true";
    })
    document.querySelectorAll(".checkbox1").forEach(el => {
        el.checked = localStorage.getItem(el.id) === "true";
    })
    if (localStorage.getItem('theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }