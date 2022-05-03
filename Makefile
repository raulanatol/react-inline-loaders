.DEFAULT_GOAL := build

start:
	@npm run start $1

init:
	@echo "Initialising the project"
	@npm run install

clean:
	@echo "🛁 Cleaning..."
	@npm run clean

clean_all:
	@echo "🧨 Clean all"
	@rm -Rf node_modules package-lock.json

test:
	@echo "Testing..."
	@npm run test

check:
	@echo "🧪 Check code"
	@npm run lint
	@npm run type-check

storybook:
	@npm run storybook

build: clean check test
	@echo "👩‍🏭 Building..."
	@npm run dist

publish: build
	@echo "📦 Publish package..."
	@./.scripts/finish-release.sh
