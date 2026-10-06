// ЗАМЕНИТЕ на свои данные (один раз для всех статей):
var WA="79XXXXXXXXX", TG="your_telegram_username";
function ask(t){var m="Здравствуйте, Лилия! Прочитал(а) вашу статью и хочу задать вопрос про Atomy.";window.open(t==='tg'?"https://t.me/"+TG:"https://wa.me/"+WA+"?text="+encodeURIComponent(m),'_blank')}
