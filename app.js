const prompt = require("prompt-sync")();
const parse = require("url-parse");



class validateString{
    constructor() {
		this.string = prompt("Enter the string to validate? ");
		this.results = {};
		this.url = parse(this.string, true);
        //console.log(this.url)
		this.parametersList = Object.keys(this.url.query);
        
	}

    

        // main module-----------------------------------------------------------------
    main(){

        if (this.url.protocol === "visma-identity:") {
			if (this.url.host === "login") {
				return this.login();
			}

			if (this.url.host === "confirm") {
				return this.confirm();
			}

			if (this.url.host === "sign") {
				return this.sign();
			}
		}
		return "invalid scheme: " + this.url.protocol;

    }

    // login module -------------------------------------------------------------------------------

    login(){

    }

    //confirm module ----------------------------------------------------------------------------------------

    confirm(){

    }

    //sign module ------------------------------------------------------------------------------------------------------

    sign(){

    }

}

new validateString().main()