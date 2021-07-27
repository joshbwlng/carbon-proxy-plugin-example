import type { CarbonProxyContext, CarbonProxyPlugin } from 'carbon-proxy';
import * as http from 'http';

export class ExamplePlugin implements CarbonProxyPlugin {
	public context: CarbonProxyContext;
	public slug = 'example';
	public filter = {
		method: 'get',
		url: '*',
	};
	public handler = (
		_request: http.IncomingMessage,
		_response: http.ServerResponse,
	): void => {
		this.context.logger.info('ExamplePlugin handler');
	};

	constructor(context: CarbonProxyContext) {
		this.context = context;
	}
}
