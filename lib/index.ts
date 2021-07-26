import type { CarbonPlugin } from 'carbon-proxy';
import * as http from 'http';

export class ExamplePlugin implements CarbonPlugin {
	public slug = 'example';
	public filter = {
		url: '*',
	};
	public handler = (
		_request: http.IncomingMessage,
		_response: http.ServerResponse,
	): void => {
		console.log('ExamplePlugin handler');
	};
}
