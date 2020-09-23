# docsify-footer

Footer Enhancement plugin for [Docsify](https://docsify.js.org), based on [Docsify example](https://docsify.js.org/#/write-a-plugin?id=example).

## Install

1. Then insert script plugin into Docsify document (index.html)

```html
<script src="//unpkg.com/docsify-footer-enh/dist/docsify-footer-enh.min.js"></script>
```

2. Add configuration

```html
<script>
  window.$docsify = {
    footer: {
      copy: '<span>Acme &copy; 2020</span>',
      auth: 'by Me',
      pre: '<hr/>',
      style: 'text-align: right;',
      class: 'className',
    },
  };
</script>
```

| Config Option | Description               |
| :------------ | :------------------------ |
| copy          | Copyright text to display |
| auth          | Author text               |
| style         | Footer CSS inline style   |
| class         | Footer Classes to include |
| pre           | Html pre footer text      |

## Example

1. Run `npm run build`
1. Run `npm run example`
1. Go to [http://localhost:3000/]()

## License

[Apache License](LICENSE)

## TODO

- Waiting for recommendations.
