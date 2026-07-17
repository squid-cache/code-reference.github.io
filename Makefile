all:
	test -d squid || git clone --depth 1 https://github.com/squid-cache/squid
	cd squid; git pull; if ! test -f include/autoconf.h ; then ./bootstrap.sh ; . ./test-suite/buildtests/layer-02-maximus.opts; eval ./configure $$DISTCHECK_CONFIGURE_FLAGS ; fi
	echo doxygen doxyfile
	cd docs; for f in *.html; do echo $$f ; sed -i~ "/meta name=.generator/a <link rel=\"canonical\" href=\"https://code-reference.squid-cache.org/$$f\" />" $$f; done
