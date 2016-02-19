YEAR=2016

# TODO: make this dynamic .md
INDEX=$(addprefix $(YEAR)/,$(addsuffix .html,head _index tail))
IDEAS=$(addprefix $(YEAR)/,$(addsuffix .html,head _ideas tail))
TASKS=$(addprefix $(YEAR)/,$(addsuffix .html,head _tasks tail))

all: node_modules
	mkdir -p $(YEAR)
	rm -rf tmp
	mkdir -p tmp
	node md2html.js $(YEAR)/index.md | node makeindex.js > $(YEAR)/_index.html
	cat $(INDEX) > $(YEAR)/index.html
	node md2html.js $(YEAR)/ideas.md | node makeindex.js > $(YEAR)/_ideas.html
	cat $(IDEAS) > $(YEAR)/ideas.html
	node md2html.js $(YEAR)/tasks.md | node makeindex.js > $(YEAR)/_tasks.html
	cat $(TASKS) > $(YEAR)/tasks.html
	rm -rf tmp
	echo '<meta http-equiv="refresh" content="0; url=$(YEAR)/" />' > index.html

node_modules:
	mkdir node_modules
	npm install node-markdown
