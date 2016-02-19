YEAR=2016
PARTS=head body tail
FILES=$(addprefix $(YEAR)/,$(addsuffix .html,$(PARTS)))

all: node_modules
	mkdir -p $(YEAR)
	rm -rf tmp
	mkdir -p tmp
	node md2html.js $(YEAR)/body.md | node makeindex.js > $(YEAR)/body.html
	cat $(FILES) > $(YEAR)/index.html
	rm -rf tmp
	echo '<meta http-equiv="refresh" content="0; url=$(YEAR)/" />' > index.html

node_modules:
	mkdir node_modules
	npm install node-markdown
