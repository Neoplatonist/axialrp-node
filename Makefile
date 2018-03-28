dockerize:
	# @rm -rf build
	# @rm -rf babel-src
	# @yarn build:client
	@docker build -t axialrp .
	@docker run -d -p 5050:3001  --name axialrp axialrp

clean:
	@rm -rf build
	@rm -rf babel-src