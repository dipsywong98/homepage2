const updateScroll = () => {
  const hash = window.location.hash
  if (hash.length) {
    const id = hash.split('#')[1]
    const contentEl = document.getElementById('content')
    const idEl = document.getElementById(id)
    if (contentEl && idEl) {
      contentEl.scrollTop = idEl.getBoundingClientRect().top - contentEl.getBoundingClientRect().top
    }
  }
}

export default updateScroll
