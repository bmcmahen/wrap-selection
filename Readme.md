
# wrap-selection

  Wrap the current selection with an element. It behaves a bit weirdly when the selection intersects other elements... notably paragraphs. If someone has a good fix for this, I'll buy you a beer.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/wrap-selection

## Example

```javascript
var wrap = require('wrap-selection');
var el = document.createElement('span');
el.className = 'bacon';
wrap(el);
```

## License

  MIT
