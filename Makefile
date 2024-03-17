install:
	npm ci --production
	npm link

uninstall:
	npm uninstall --global @hexlet/code

install-dev:
	npm ci
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .
