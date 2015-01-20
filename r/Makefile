PAGES=index down docs pics me talks cmp todo 
PAGES+=license community whouses history
NBIN=node_modules/.bin
REMOTE?=/tmp/www
NODE=$(shell nodejs --help > /dev/null 2>&1 && echo nodejs || echo node)

all: node_modules
	for a in ${PAGES} ; do $(NODE) pp.js $$a.tmpl ; done

node_modules:
	mkdir -p node_modules
	npm install

indent:
	$(NODE) $(NBIN)/jsfmt -w pp.js
	$(NODE) $(NBIN)/js-beautify --type=css -r style.css 

pub up:
	rsync -avz . ${REMOTE}

clean:
	rm -f *.html
