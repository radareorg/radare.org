PAGES=index down docs
REMOTE?=/tmp/www
CC=node

all: node_modules
	for a in ${PAGES} ; do $(CC) pp.js $$a.tmpl ; done

node_modules:
	mkdir -p node_modules
	npm install

indent:
	$(CC) node_modules/.bin/jsfmt -w pp.js

pub up:
	rsync -avz . ${REMOTE}

clean:
	rm -f *.html
