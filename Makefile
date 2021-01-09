# установка зависимостей для проекта
install:
	npm install

# запуск игры
brain-games:
	node bin/brain-games.js

# публикация пакета игры
publish:
	npm publish --dry-run