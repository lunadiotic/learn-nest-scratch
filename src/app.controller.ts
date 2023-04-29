import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
	@Get('/home')
	getRootRoute() {
		return 'Hello World!';
	}

	@Get('/bye')
	getByeRoute() {
		return 'Bye World!';
	}
}
