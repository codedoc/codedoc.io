
SRC = $(wildcard client/app/js/*.js)
CSS = $(wildcard client/app/css/*.css)
HTML = $(wildcard client/app/templates/*.html)
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
