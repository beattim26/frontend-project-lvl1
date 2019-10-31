install:
	npm install

start:
	npx babel-node dist/bin/games/brain-games.js

even:
	npx babel-node dist/bin/games/brain-even.js

calc:
	npx babel-node dist/bin/games/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .