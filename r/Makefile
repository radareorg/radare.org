PAGES=index down docs screen contact talks
REMOTE?=/tmp/www
NODE=$(shell nodejs --help > /dev/null 2>&1 && echo nodejs || echo node)

all: node_modules
	for a in ${PAGES} ; do $(NODE) pp.js $$a.tmpl ; done

node_modules:
	mkdir -p node_modules
	npm install

indent:
	$(NODE) node_modules/.bin/jsfmt -w pp.js

pub up:
	rsync -avz . ${REMOTE}

clean:
	rm -f *.html
