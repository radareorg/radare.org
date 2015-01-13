ARCHS=arm aarch64 mips x86
TAGS=unstable stable

STABLE="0.9.8.git"
UNSTABLE="0.9.9-git"

VARS=\
arm_stable=radare2-${STABLE}-android-arm.tar.gz\
arm_unstable=radare2-${UNSTABLE}-android-arm.tar.gz\
\
aarch64_stable=radare2-${STABLE}-android-aarch64.tar.gz\
aarch64_unstable=radare2-${UNSTABLE}-android-aarch64.tar.gz\
\
mips_stable=radare2-${STABLE}-android-mips.tar.gz \
mips_unstable=radare2-${UNSTABLE}-android-mips.tar.gz\
\
x86_stable=radare2-${STABLE}-android-x86.tar.gz \
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
