const months = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  10: "октября",
  11: "ноября",
  12: "декабря",
};

export default function getTime(time) {
  const year = time.slice(0, 4);
  const month = time.slice(5, 7);
  const day = time.slice(8, 10);
  return `${day} ${months[month]}`;
}
