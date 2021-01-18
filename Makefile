# установка зависимостей для проекта
install:
	npm install

# запуск игры
brain-games:
	node bin/brain-games.js

# публикация пакета игры
publish:
	npm publish --dry-run

# проверка линтером
lint:
	npx eslint .

# тесты
test-games:
	node test/games/brain-calc-game.test.js
	node test/games/brain-even-game.test.js
	node test/games/brain-gcd-game.test.js
	node test/games/brain-prime-game.test.js
	node test/games/brain-progression-game.test.js