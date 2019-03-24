export function getRedircetPath({type, avatr}) {
  let url = (type === 'boss') ? '/boss': '/genius'
  if(!avatr) {
    url += 'info'
  }
  return url
}