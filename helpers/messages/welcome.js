
import chalk from 'chalk'; // Color text...
import figlet from 'figlet'; // ASCII Text art...

// import Ghost from "figlet/importable-fonts/Ghost.js";

 function displayHeader() {

    return new Promise((resolve, reject) => {
        figlet("Binnacle Bash!", {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'fitted',
        }, async function (err, data) {
            if (err) {
                console.log("Oops! Algo salió mal...");
                console.dir(err);
                reject(err);
                return;
            }
            console.log(chalk.green(data));

            resolve();
        });
    });
}

export { displayHeader }




