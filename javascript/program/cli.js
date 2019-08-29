let params = process.argv;
params = params.splice(2);

function run(test) {
    if(process.argv[1].indexOf('runner.js')!==-1){
        return
    }

    if(params!== undefined || params!== null) {
        let i = -1;
        let args = [];
        params.map(param => {
            if(param === '-a') { 
                i++; 
            } 
            else  {
                if(args[i]) {
                    args[i] = args[i] + ' ' + param;
                }else{
                    args[i] = param;
                }
            }
        });
        if(args.length === 0) {
            console.log('Missing argument(s), probably you forgot to use -a ');
            process.exit(1);
            
        }
        console.log(test(...args));
    }
}

module.exports = {
    run
}