const fs = require('fs-extra');
const colors = require('colors/safe');
const tests = require('./tests');
const jsonFormat = require('json-format');
const LOG_FILE_PATH = process.cwd() + '/output';
const PROGRAMS = process.cwd() + '/program';

let params = process.argv;
params = params.splice(2);

const executeable =  getExecutable(params);
let filedata = [];

executeable.tests.map(test => {
    let output = executeable.program.test(test.input);
    let testresult = validate(test,output);
    log(testresult);
    filedata.push(testresult);
})

var file = {
    path : LOG_FILE_PATH,
    program : executeable.name,
    user : new Date().getHours() + '_' + new Date().getMinutes(),
    name : function() {
        return this.path + '/' + this.user + '_' + this.program + '.json'
    }
}
if(params[1]) {
   file. user = params[1];
}

//record(file.name(),jsonFormat(filedata));

function getExecutable (params) {
    let executeable = {
        program : '',
        tests : [],
        name: ''
    }
    let programs = getPrograms().join(',');

    let program = params[0];

    if(program === undefined || programs.indexOf(program) === -1 ){
        console.log('program not valid');
        process.exit(0);
        return;
    }
    
    let testCases = program.split('-');
    let testCasesName = camelCase(testCases[0]+ ' ' + testCases[1]);

    executeable.program = eval(require('./program/'+program));
    executeable.tests = eval('tests.'+testCasesName); 
    executeable.name = program; 
    
    return executeable;
}

function validate (test,output) {
    let expectedOutput = test.output;
    let programOutput = output;

    if(Array.isArray(test.output)){
        expectedOutput = JSON.stringify(test.output)
        programOutput = JSON.stringify(output);
    }
    
    let result  = {
        id  : test.tc,
        input : test.input,
        output : output,
        expected : test.output,
        passed : programOutput === expectedOutput ? true: false
    }
    return result;
}

function log(test) {
    let output = ` Test Case No ${test.id}
    Input       : ${test.input},
    Your Output : ${test.output},
    Expected    : ${test.expected},
    Result      : ${test.passed === true ? 
        colors.bold(colors.bgGreen('PASS')): 
        colors.bold(colors.bgGreen('FAIL'))}`
    console.log(output);            
}

function record(filename,data) {
    fs.writeFileSync(filename,data, 'utf8')
}

function getPrograms() {
    console.log(PROGRAMS);
    let programs = ['letter-changes','longest-word','replace-vowels','match-paranthesis','binary-search'];
    return programs;
}

function camelCase(str) { 
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) 
    { 
        return index == 0 ? word.toLowerCase() : word.toUpperCase(); 
    }).replace(/\s+/g, ''); 
} 
