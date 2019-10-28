export default function getRandomSugar(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
