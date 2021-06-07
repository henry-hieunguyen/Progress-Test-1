let staffMindx = [{
    name: 'Name A',
    age: 20,
    salary: 500,
    position: 'Staff 1'},
    {
    name: 'Name B',
    age: 20,
    salary: 500,
    position: 'Staff 2'},
    {
    name: 'Name C',
    age: 20,
    salary: 500,
    position: 'Staff 3'
    }];

    console.log(staffMindx);

    staffMindx.push('Name D');
    staffMindx[staffMindx.length] = 'Name E';
    staffMindx.splice(0,1);
    console.log(staffMindx);