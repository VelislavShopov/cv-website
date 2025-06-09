export default function calculateTopCoordinates(name) {
  const area = document.querySelector(name);
  console.log(area);

  if (area) {
    const rect = area.getBoundingClientRect();

    const scrollTop = window.scrollY;
    const absoluteTop = rect.top + scrollTop;
    return absoluteTop;
  }
}
