ARCHS=arm mips x86
TAGS=hg unstable stable

STABLE="0.9.2"
UNSTABLE="0.9.1git"

VARS=\
arm_stable=radare2-${STABLE}-android-arm.tar.gz\
arm_hg=radare2-${UNSTABLE}-android-arm.tar.gz\
arm_unstable=radare2-${UNSTABLE}-android-arm.tar.gz\
\
mips_stable=radare2-${STABLE}-android-mips.tar.gz \
mips_hg=radare2-${UNSTABLE}-android-mips.tar.gz\
mips_unstable=radare2-${UNSTABLE}-android-mips.tar.gz\
\
x86_stable=radare2-${STABLE}-android-x86.tar.gz \
x86_hg=radare2-${UNSTABLE}-android-x86.tar.gz\
x86_unstable=radare2-${UNSTABLE}-android-x86.tar.gz

S=$
all:
	@export ${VARS} ; \
	for a in ${ARCHS} ; do \
		rm -rf $$a ; \
		for b in ${TAGS} ; do \
			mkdir -p $$a/$$b ; \
			x=$${a}_$${b} ; \
			eval "file=$$"$$x ; \
			[ ! -f ../$$file ] && echo " ** Missing file $$file" ; \
			printf "$$x  \t$${file}\n" ; \
			echo '<? header("Location: /get/pkg/'$${file}'"); ?>' > $$a/$$b/index.php ; \
		done ; \
	done
