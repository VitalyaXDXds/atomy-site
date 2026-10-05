# Сайт Лилии Гуцеловой — Atomy

Одностраничный сайт. Весь код и картинки в одном файле `index.html`.

## Что заменить перед публикацией
В конце `index.html` найдите строку и впишите свои данные:

    var WA="79XXXXXXXXX", TG="your_telegram_username";

- `WA` — номер WhatsApp в формате 79991234567 (без плюса и пробелов)
- `TG` — ник в Telegram без @

## Публикация на GitHub Pages
1. Зарегистрируйтесь на github.com.
2. Нажмите «New repository», назовите, например, `atomy-site`, выберите Public, создайте.
3. Нажмите «uploading an existing file» и загрузите `index.html`, `README.md` и `.nojekyll`. Нажмите «Commit changes».
4. Откройте Settings → Pages. В «Source» выберите «Deploy from a branch», ветка `main`, папка `/ (root)`, нажмите Save.
5. Через 1–2 минуты сайт откроется по адресу `https://ВАШ-ЛОГИН.github.io/atomy-site/`.

Если назвать репозиторий `ВАШ-ЛОГИН.github.io`, адрес будет короче: `https://ВАШ-ЛОГИН.github.io/`.

## Свой домен (по желанию)
Settings → Pages → Custom domain, впишите домен и настройте DNS у регистратора по подсказке GitHub.

## Как обновлять
Откройте `index.html` в репозитории, нажмите значок карандаша, внесите правку и сохраните (Commit). Сайт обновится сам.
