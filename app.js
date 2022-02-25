const prompt = require("prompt-sync")();
const parse = require("url-parse");


// class declaration----------------------------------------------------------------------------------
class validateString{
    constructor() {
		this.string = prompt("Enter the string to validate? ");
		this.results = {};
        //console.log(typeof(this.results));
		this.url = parse(this.string, true);
        console.log(this.url);
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

        if (this.parametersList.length === 1) {
			if (this.parametersList[0] === "source") {
				this.results.action = "login";
				this.results.parameters = this.url.query;
				return this.results;
			}
			return (
				"Error!: login action has invalid parameter " + this.parametersList[0]
			);
		}
		return (
			"Error!: login action has invalid number of parameters " +
			this.parametersList.length
		);

    }

    //confirm module ----------------------------------------------------------------------------------------

    confirm(){

        if (this.parametersList.length == 2) {
			if (this.parametersList.includes("source", "paymentnumber")) {
				this.results.action = "confirm";
				this.results.parameters = this.url.query;
				return this.results;
			}
			return (
				"Error!: confirm action has (one or all) invalid parameters" +
				this.parametersList[0] +
				" and " +
				this.parametersList[1]
			);
		}
		return (
			"Error!: confirm action has invalid number of parameters " +
			this.parametersList.length
		);

    }

    //sign module ------------------------------------------------------------------------------------------------------

    sign(){

        if (this.parametersList.length == 2) {
			if (this.parametersList.includes("source", "documentid")) {
				this.results.action = "sign";
				this.results.parameters = this.url.query;
				return this.results;
			}
			return (
				"Error!: sign action has invalid parameters " +
				this.parametersList[0] +
				" and " +
				this.parametersList[1]
			);
		}
		return (
			"Error!: sign action has invalid number of parameters " +
			this.parametersList.length
		);
	}

    

}

console.log(new validateString().main())