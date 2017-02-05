YEAR=2017

# TODO: make this dynamic .md
INDEX=$(addprefix $(YEAR)/,$(addsuffix .tmpl,head index tail))
IDEAS=$(addprefix $(YEAR)/,$(addsuffix .tmpl,head ideas tail))
TASKS=$(addprefix $(YEAR)/,$(addsuffix .tmpl,head tasks tail))

all: node_modules
	mkdir -p $(YEAR)
	rm -rf tmp
	mkdir -p tmp
	node md2html.js $(YEAR)/index.md | node makeindex.js > $(YEAR)/index.tmpl
	cat $(INDEX) > $(YEAR)/index.html
	node md2html.js $(YEAR)/ideas.md | node makeindex.js > $(YEAR)/ideas.tmpl
	cat $(IDEAS) > $(YEAR)/ideas.html
	node md2html.js $(YEAR)/tasks.md | node makeindex.js > $(YEAR)/tasks.tmpl
	cat $(TASKS) > $(YEAR)/tasks.html
	rm -rf tmp
	echo '<meta http-equiv="refresh" content="0; url=$(YEAR)/" />' > index.html

node_modules:
	mkdir node_modules
	npm install node-markdown
