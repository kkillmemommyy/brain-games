install:
	npm ci --production
	npm link

install-dev:
	npm ci
	npm link

uninstall:
	npm uninstall --global @hexlet/code

publish:
	npm publish --dry-run

lint:
	npx eslint .
