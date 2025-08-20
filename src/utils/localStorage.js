function dummy() {
    const array = [
        {
            number: 'one', 
        },
        {
            number: 'two',
        },
    ];

    window.localStorage.setItem('numbers', JSON.stringify(array));
    let received = window.localStorage.getItem('numbers');

    console.log(JSON.parse(received));
}

export { dummy }