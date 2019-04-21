all: r/node_modules gsoc/node_modules
	$(MAKE) -C rsoc
	$(MAKE) -C gsoc
	$(MAKE) -C gsod
	$(MAKE) -C r

gsoc/node_modules:
	cd r ; npm install node-markdown

r/node_modules:
	cd r ; npm install markdown
