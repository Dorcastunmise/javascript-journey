const personES6 = {
    firstReader: 'Nick',
    lastName: 'Doe',
    fullName: function() {
        return () => {
            console.log(this);
            console.log(`${this.firstReader} ${this.lastName}`);
        }
    }
}

personES6.fullName()();