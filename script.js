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

function generate_even_number() {

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

function generate_odd_number() {

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

function generate_prime_number() {

    let prime_input = document.getElementById("prime-input").value;

    let prime_data = document.getElementById("prime-data");

    let prime = "";

    for (let i = 2; i < prime_input; i++) {

        if (!isPrime(i)) continue;

        prime += i + "<br/> <br/>";

        prime_data.innerHTML = prime;

    }

    function isPrime(prime_input) {

        for (let i = 2; i < prime_input; i++) {

            if (prime_input % i == 0) return false;

        }

        return true;

    }

}