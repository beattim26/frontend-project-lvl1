install:
	npm install

start:
	npx babel-node src/bin/games/brain-games.js

even:
	npx babel-node src/bin/games/brain-even.js

calc:
	npx babel-node src/bin/games/brain-calc.js

gcd:
	npx babel-node src/bin/games/brain-gcd.js

progression:
	npx babel-node src/bin/games/brain-progression.js

prime:
	npx babel-node src/bin/games/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .