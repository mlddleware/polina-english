# P.lingua: картинки бренда

Всё в стиле сайта: фиолетовый `#8B3FDB`, шрифт Dela Gothic One, доска в точку,
стикеры с рукописным Caveat.

| Файл | Размер | Куда |
| --- | --- | --- |
| `avatar-mono.png` | 640×640 | аватар бота: @BotFather → `/setuserpic` (читается даже в списке чатов) |
| `avatar-bubble.png` | 640×640 | запасной аватар: «P.» в облачке сообщения |
| `bot-cover.png` | 640×360 | картинка в пустом чате с ботом: @BotFather → `/setdescriptionpic` |
| `og.png` | 1200×630 | превью ссылки на сайт в Telegram/WhatsApp (`og:image`) |
| `logo.png`, `logo-white.png` | 1200×400 | логотип на прозрачном фоне: для светлого и тёмного фона |

Исходники в `src/` (HTML + SVG). Поправить текст или цвета и пересобрать:

```bash
bash brand/render.sh
```

## Промпты для нейросетей

На английском: модели (Midjourney, GPT Image, Gemini, Ideogram) лучше понимают его.
Текст на картинках нейросети часто искажают, поэтому в промптах его минимум.

**Аватар бота (3D-стикер):**

```
Square avatar for an online language school "P.lingua". A glossy violet (#8B3FDB) speech-bubble
sticker with a thick white die-cut border, tilted slightly left, holding a bold white letter "P"
followed by a round butter-yellow (#FFEC85) dot. Soft drop shadow, light grey (#EDF0F4) background
with a subtle dotted grid. Playful and friendly, clean flat colors with gentle 3D depth, centered so
it still works cropped to a circle, no other text.
```

**Обложка бота / баннер 16:9:**

```
Wide 16:9 flat illustration of a cozy study corkboard on a light grey dotted wall. Pinned paper
sticky notes in butter yellow, pastel pink, sky blue and lilac, small speech-bubble doodles,
washi tape, a violet (#8B3FDB) accent sticker in the middle. Friendly, airy, lots of empty space
in the center for a logo, soft shadows, no readable text, no people.
```

**Маскот (если нужен персонаж):**

```
Cute mascot for an English language school: a small round violet (#8B3FDB) speech bubble with
tiny arms and legs, big friendly eyes, waving hello, a yellow dot like a cheek blush. Sticker style
with a thick white outline, flat colors, simple shapes, transparent background.
```

Для лица школы лучше настоящее фото Полины, а не сгенерированное: ученики увидят его
на уроке, и подмена будет заметна.
