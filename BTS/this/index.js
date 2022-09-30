var per = {
    firstName: 'John',
    lastName: 'Smith',
    getFullName: function() {
        var that = this;
        console.log(this.firstName + ' ' +
        this.lastName);

        function greet() {
            console.log('Hi ' +
            that.lastName);
        }
        greet();
    }
};

var per1 = {
    firstName: 'Nick',
    lastName: 'Doe'
};

per1.getFullName = per.getFullName;

per.getFullName();
per1.getFullName();
