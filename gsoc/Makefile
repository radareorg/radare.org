NAME=r2ideas
PAD=https://pad.nopcode.org/p/$(NAME)/export/txt
WGET=wget --no-check-certificate

all: node_modules
	node md2html.js > body.html
	node makeindex.js > body2.html
	mv body2.html body.html
	cat head.html body.html tail.html > index.html

node_modules:
	mkdir node_modules
	npm install node-markdown

while:
	while : ; do $(MAKE) ; sleep 60 ; done
