
build:
	rm -rf libs
	npm run build

publish: build
	rm -rf boilerplates/app/dist
	npm publish

publish-sync: publish
	cnpm sync antd-admin-cli
	tnpm sync antd-admin-cli
