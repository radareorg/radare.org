PAD=https://pad.nopcode.org/p/r2gsoc/export/txt
WGET=wget --no-check-certificate

all: node_modules
	rm -f body.txt
	$(WGET) -O body.txt $(PAD) 
	node md2html.js > body.html
	cat head.html body.html tail.html > index.html

clean:
	rm -f body.txt index.html body.html

node_modules:
	mkdir node_modules
	npm install node-markdown

while:
	while : ; do $(MAKE) ; sleep 60 ; done
