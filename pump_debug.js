(function () {
	
	// Variables

	var statusBool = 0;
	var statusString = 'off';

	// Methods

	this.status = function () {
		return this.statusBool;
	}

	this.on = function () {
		
		if (!this.statusBool) {
		
			this.statusBool = 1;
			this.statusString = 'on';

			this.info('Debug Tool On');

			return 1;	
		} else {
			return 0;
		}
		
	}

	this.off = function () {

		if (this.statusBool) {

			this.info('Debug Tool Off');
			
			this.statusBool = 0;
			this.statusString = 'off';			

			return 1;
		} else {
			return 0;
		}
		
	}

	this.log = function (message, type) {

		if (this.statusBool) {
			
			switch (type) {
			
				case 'info':
					console.log('%c%s', 'font-weight: bold; color: #00F', message);
					break;

				case 'error':
					console.log('%c%s', 'font-weight: bold; color: #F00', message);
					break;

				case 'warning': 
					console.log('%c%s', 'font-weight: bold; color: #F60', message);
					break;

				default:
					console.log(message);
					break;
			}

			return 1;			
		} else {
			return 0;
		}

	}

	this.error = function (message){
		return this.log(message, 'error');
	}

	this.info = function (message){
		return this.log(message, 'info');
	}

	this.warning = function (message){
		return this.log(message, 'warning');
	}

	this.warn = function (message){
		return this.log(message, 'warning');
	}

	// Constructor

	if (!window._pump) {
		window._pump = this;
	}

}
)();
