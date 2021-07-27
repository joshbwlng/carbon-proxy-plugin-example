import type { CarbonProxyPlugin } from 'carbon-proxy';
import * as http from 'http';

export class ExamplePlugin implements CarbonProxyPlugin {
	public slug = 'example';
	public filter = {
		method: 'get',
		url: '*',
	};
	public handler = (
		_request: http.IncomingMessage,
		_response: http.ServerResponse,
	): void => {
		console.log('ExamplePlugin handler');
	};
}
