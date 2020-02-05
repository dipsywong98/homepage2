const updateScroll = () => {
  const hash = window.location.hash
  if (hash.length) {
    const id = hash.split('#')[1]
    document.getElementById('content').scrollTop = document.getElementById(id).offsetTop
  }
}

export default updateScroll
