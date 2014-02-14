PAD=https://pad.nopcode.org/p/r2gsoc/export/txt
WGET=wget --no-check-certificate

all:
	rm -f body.txt
	$(WGET) -O body.txt $(PAD)
	cat head.html body.txt tail.html > index.html

clean:
	rm -f body.txt index.html
