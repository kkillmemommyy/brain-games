install:
	npm ci --production
	npm link

install-dev:
	npm ci
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .
