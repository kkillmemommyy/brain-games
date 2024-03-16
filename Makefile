install:
	npm ci 
	npm publish --dry-run
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .
