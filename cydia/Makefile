DIST=stable

all:
	${MAKE} mrproper
	#for a in debs/*.deb debs/perl/*.deb ; do
	for a in debs/*.deb ; do \
		${MAKE} add PKG=$$a ; \
	done 
	${MAKE} copy

www:
	python -m SimpleHTTPServer 8000

copy sync:
	#cp -f dists/stable/main/binary-iphoneos-arm/Packages.gz .
	cp -f dists/stable/Release .
	cp dists/stable/main/binary-iphoneos-arm/Packages .
	cp conf/CydiaIcon.png .
	cp conf/sileo-featured.json .
	cp conf/distributions Release
	bzip2 Packages
	echo SHA256: >> Release
	export H=`shasum -a 256 Packages.bz2 | cut -d ' ' -f1` \
	export S=`wc -c < Packages.bz2 | awk '{print $$1}'` \
		echo "S$$S";\
		echo "H$$H";\
		echo " $${H} $${S} Packages.bz2" >> Release

update:
	reprepro -b . update

ifneq (${PKG},)
add:
	reprepro -Vb . --ignore=forbiddenchar includedeb ${DIST} ${PKG}
else
add:
	@echo No PKG defined
endif

ifneq (${PKG},)
del:
	reprepro -Vb . remove ${DIST} ${PKG}
else
del:
	@echo No PKG defined
endif

mrproper:
	rm -rf db dists lists pool
	rm -f CydiaIcon.png Packages*
