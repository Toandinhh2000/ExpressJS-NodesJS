$.ajax({
    url: '/user?page=3',
    type: 'GET'
}).then(data=>{
    console.log(data);
    for(let i = 0; i< data.length;i++) {
        const element = data[i];

        var item$(`
            <h1>${element.username} : ${element.password}
            `)
    }
}