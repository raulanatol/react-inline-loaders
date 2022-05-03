.DEFAULT_GOAL := build

start:
	@npm run start $1

init:
	@echo "Initialising the project"
	@yarn install

clean:
	@echo "🛁 Cleaning..."
	@yarn clean

clean_all:
	@echo "🧨 Clean all"
	@rm -Rf node_modules yarn.lock

test:
	@echo "Testing..."
	@yarn test

check:
	@echo "🧪 Check code"
	@yarn lint
	@yarn type-check

storybook:
	@yarn storybook

build: clean check test
	@echo "👩‍🏭 Building..."
	@yarn dist

publish: build
	@echo "📦 Publish package..."
	@./.scripts/finish-release.sh
