dockerize:
	@rm -rf build
	# @yarn build:client
	@docker build -t axialrp .
	@docker run -d -p 5050:80  --name axialrp axialrp