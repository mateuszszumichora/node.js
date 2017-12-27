process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
        	case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        	
        	case '/lang':
        	process.stdout.write('Language is:\n');
        	process.stdout.write(process.env.lang + '\n');
        	break;

        	case '/node':
        	process.stdout.write('Node version is:\n');
        	process.stdout.write(process.version  + '\n');
        	break;

        	default:
            process.stderr.write('Wrong instruction!\n');
    }

}
});