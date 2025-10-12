const actionMenu = document.getElementById('actionMenu')
const actionToggleBtn = document.getElementById('actionToggle')
const actionDeleteMenu = document.getElementById('actionDeleteMenu')
const actionDeleteToggle = document.getElementById('actionDeleteToggle')
const numberInput = document.querySelector('#number')

const DELETE_START = 'start'
const DELETE_END = 'end'

// Função genérica para alternar menus
const toggleMenu = (menu, toggleBtn) => {
  const opened = toggleBtn.getAttribute('aria-expanded') === 'true'
  if (opened) closeMenu(menu, toggleBtn)
  else openMenu(menu, toggleBtn)
}

// Função genérica para abrir menus
const openMenu = (menu, toggleBtn) => {
  menu.classList.remove('opacity-0', 'pointer-events-none', 'scale-90')
  menu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100')
  toggleBtn.setAttribute('aria-expanded', 'true')
}

// Função genérica para fechar menus
const closeMenu = (menu, toggleBtn) => {
  menu.classList.add('opacity-0', 'pointer-events-none', 'scale-90')
  menu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100')
  toggleBtn.setAttribute('aria-expanded', 'false')
}

// Função genérica para fechar menus ao clicar fora
const closeMenusOnClickOutside = (event, menus) => {
  menus.forEach(({menu, toggleBtn}) => {
    if (!toggleBtn.contains(event.target) && !menu.contains(event.target)) {
      closeMenu(menu, toggleBtn)
    }
  })
}

// Desabilita botão com base no valor do input
const disableBtn = () => {
  actionToggleBtn.disabled = numberInput.value === ''
}
numberInput.addEventListener('input', disableBtn)
disableBtn()

// Alterna o menu principal
actionToggleBtn.addEventListener('click', () =>
  toggleMenu(actionMenu, actionToggleBtn)
)

// Alterna o menu de exclusão
actionDeleteToggle.addEventListener('click', () =>
  toggleMenu(actionDeleteMenu, actionDeleteToggle)
)

// Fecha menus ao clicar fora
document.addEventListener('click', e => {
  closeMenusOnClickOutside(e, [
    {menu: actionMenu, toggleBtn: actionToggleBtn},
    {menu: actionDeleteMenu, toggleBtn: actionDeleteToggle},
  ])
})

// Acessibilidade: alterna com teclado
actionToggleBtn.addEventListener('keydown', e => {
  if (['Enter', ' '].includes(e.key)) {
    e.preventDefault()
    toggleMenu(actionMenu, actionToggleBtn)
  } else if (e.key === 'Escape') {
    closeMenu(actionMenu, actionToggleBtn)
  }
})

actionDeleteToggle.addEventListener('keydown', e => {
  if (['Enter', ' '].includes(e.key)) {
    e.preventDefault()
    toggleMenu(actionDeleteMenu, actionDeleteToggle)
  } else if (e.key === 'Escape') {
    closeMenu(actionDeleteMenu, actionDeleteToggle)
  }
})

// Função para ações de exclusão
const onActionDelete = action => {
  closeMenu(actionDeleteMenu, actionDeleteToggle)
  if (action === DELETE_START) {
    alert('Excluir no início acionado')
  } else if (action === DELETE_END) {
    alert('Excluir no fim acionado')
  }
}
