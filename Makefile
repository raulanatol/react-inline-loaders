.DEFAULT_GOAL := build

init:
	@echo "Initialising the project"
	@npm install

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

publish_major: build
	@echo "📦 Publish package..."
	@./.scripts/finish-release.sh major

publish_minor: build
	@echo "📦 Publish package..."
	@./.scripts/finish-release.sh minor

publish_patch: build
	@echo "📦 Publish package..."
	@./.scripts/finish-release.sh patch
