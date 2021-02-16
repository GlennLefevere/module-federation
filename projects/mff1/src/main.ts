import {
  defineCustomElements,
  applyPolyfills,
} from '@liantis-ds/webcomponents/dist/loader';
import('./bootstrap')
	.catch(err => console.error(err));

applyPolyfills().then(() => {
  defineCustomElements(window);
});
