all:
	test -d squid || git clone --depth 1 https://github.com/squid-cache/squid
	cd squid; git pull; ./bootstrap.sh; . ./test-suite/buildtests/layer-02-maximus.opts; eval ./configure $$DISTCHECK_CONFIGURE_FLAGS
	doxygen doxyfile
	cd docs; for f in $(find * -name \*.html); do sed -i~ "s@__filename__@$f@" $f; done ; find . -name \*~ | xargs -n 128 rm -f
