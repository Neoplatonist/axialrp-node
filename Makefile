dockerize:
	@rm -rf build
	# @yarn build:client
	@docker build -t axialrp .
	@docker run -d -p 5050:3001  --name axialrp axialrp