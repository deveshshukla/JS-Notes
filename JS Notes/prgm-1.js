'use strict';

function const_ex() {
    const pi = 22/7;
    pi = 7/22;
    console.log(pi);
    // TypeError: Assignment to constant variable.
}

//--------------------------------------------

function let_ex() {

    let my_name = "Devesh"

    my_name = "monu" // Changed
    console.log(my_name);

    // Local Scope
    {
        let my_surname = "shukla"
    }

        my_surname = "chu" // Could not access variables declare inside of scope from global scope or outside of the scope.

        console.log(my_surname);
        //ReferenceError: my_surname is not defined

}

//--------------------------------------------

function var_ex() {

    var my_name = "Devesh"

    my_name = "monu" // Changed
    console.log(my_name);

    // Local Scope
    {
        var my_surname = "shukla"
    }

    my_surname = "chu" // In var it is accessible from global scope or outside of the scope. (Not recommended)

    console.log(my_surname);

}