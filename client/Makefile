
SRC = $(wildcard local/app/index.js local/app/js/*.js)
CSS = $(wildcard local/app/css/*.css)
HTML = $(wildcard local/app/templates/*.html)
TEMPLATES = $(HTML:.html=.js)

build: components $(SRC) $(CSS) $(TEMPLATES)
	@component build

components: component.json
	@component install

%.js: %.html
	@component convert $<

clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean
