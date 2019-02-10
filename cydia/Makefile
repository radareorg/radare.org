DIST=stable

all:
	${MAKE} mrproper
	#for a in debs/*.deb debs/perl/*.deb ; do
	for a in debs/*.deb ; do \
		${MAKE} add PKG=$$a ; \
	done 
	${MAKE} copy

copy sync:
	cp dists/stable/main/binary-iphoneos-arm/Packages.gz .
	cp conf/CydiaIcon.png .

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
