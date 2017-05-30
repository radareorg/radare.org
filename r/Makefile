PAGES=index down docs pics me talks cmp todo 
PAGES+=license community whouses history rsoc
PAGES+=blessr2 jobs fileformat arch
NBIN=node_modules/.bin
REMOTE?=/tmp/www
NODE=$(shell nodejs --help > /dev/null 2>&1 && echo nodejs || echo node)
PAGES+=js/index.js

all: node_modules
	for a in ${PAGES} ; do $(NODE) pp.js $$a.tmpl ; done
	mv js/index.js.html js/index.js

doc-zh: node_modules
	find ./zh -name "*.tmpl" |xargs -I {} node pp.js {}
	node pp.js js/index.js.tmpl
	mv js/index.js.html js/index.js

node_modules:
	mkdir -p node_modules
	npm install

indent:
	$(NODE) $(NBIN)/jsfmt -w pp.js
	$(NODE) $(NBIN)/jsfmt -w js/index.js
	$(NODE) $(NBIN)/js-beautify --type=css -r style.css 

pub up:
	rsync -avz . ${REMOTE}

clean:
	rm -f *.html
	rm -f zh/*.html

