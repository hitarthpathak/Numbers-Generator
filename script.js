function generate_table() {

    let table_input = document.getElementById("table-input");

    let table_data = document.getElementById("table-data");

    let table = "";

    for (let i = 1; i <= 10; i++) {

        table += table_input.value * i + "<br/> <br/>";

        table_data.innerHTML = table;

    }

}

// ------------------------------------------------------------------------------------------------------------

function generate_even_numbers() {

    let even_input = document.getElementById("even-input");

    let even_data = document.getElementById("even-data");

    let even = "";

    for (let i = 1; i <= even_input.value; i++) {

        if (i % 2 == 0) {

            even += i + "<br/> <br/>";

            even_data.innerHTML = even;

        }

    }

}

// ------------------------------------------------------------------------------------------------------------

function generate_odd_numbers() {

    let odd_input = document.getElementById("odd-input");

    let odd_data = document.getElementById("odd-data");

    let odd = "";

    for (let i = 1; i <= odd_input.value; i++) {

        if (i % 2 != 0) {

            odd += i + "<br/> <br/>";

            odd_data.innerHTML = odd;

        }

    }

}

// ------------------------------------------------------------------------------------------------------------

function generate_prime_numbers() {

    let prime_input = document.getElementById("prime-input").value;

    let prime_data = document.getElementById("prime-data");

    let prime = "";

    function isPrime(prime_input) {

        for (let i = 2; i < prime_input; i++) {

            if (prime_input % i == 0) return false;

        }

        return true;

    }

    for (let i = 2; i < prime_input; i++) {

        if (isPrime(i)) {

            prime += i + "<br/> <br/>";

            prime_data.innerHTML = prime;
            
        }        

    }

}

// ------------------------------------------------------------------------------------------------------------

function generate_fabonacci_numbers() {

    let fabonacci_input = document.getElementById("fabonacci-input");

    let fabonacci_data = document.getElementById("fabonacci-data");

    let fabonacci = "";
    
    let num_1 = 0;

    fabonacci_data.innerHTML = fabonacci += num_1 + "<br> <br>";

    let num_2 = 1;

    fabonacci_data.innerHTML = fabonacci += num_2 + "<br> <br>";

    for (let i = 0; i <= fabonacci_input.value; i++) {

        let num_3 = num_1 + num_2;

        num_1 = num_2;

        num_2 = num_3;

        fabonacci += num_3 + "<br> <br>";

        fabonacci_data.innerHTML = fabonacci;

    }

}

// ------------------------------------------------------------------------------------------------------------

function generate_double_numbers() {

    let double_input = document.getElementById("double-input");

    let double_data = document.getElementById("double-data");

    let num_1 = 0;

    let num_2 = 1;

    let double = "";

    for (let i = 0; i <= double_input.value; i++) {

        let num_3 = num_1 + num_2;

        num_1 = num_3;

        num_2 = num_1;

        double += num_3 + "<br> <br>";

        double_data.innerHTML = double;

    }

}
