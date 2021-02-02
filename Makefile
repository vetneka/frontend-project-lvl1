# установка зависимостей для проекта
install:
	npm install

# запуск игры brain-games
brain-games:
	node bin/brain-games.js

# запуск игры brain-prime
brain-prime:
	node bin/brain-prime.js

# запуск игры brain-calc
brain-calc:
	node bin/brain-calc.js

# запуск игры brain-even
brain-even:
	node bin/brain-even.js

# запуск игры brain-gcd
brain-gcd:
	node bin/brain-gcd.js

# запуск игры brain-progression
brain-progression:
	node bin/brain-progression.js

# публикация пакета игры
publish:
	npm publish --dry-run

# проверка линтером
lint:
	npx eslint .
