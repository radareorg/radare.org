all: r/node_modules gsoc/node_modules
	$(MAKE) -C gsoc
	$(MAKE) -C r

gsoc/node_modules:
	cd r ; npm install node-markdown

r/node_modules:
	cd r ; npm install markdown
