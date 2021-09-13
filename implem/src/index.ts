type Admin = { id:string, kind: 'admin' };
type SuperAdmin = { id:string, kind: 'superadmin', age: number };
type UltraAdmin = { id:string, kind: 'ultradmin', birthDate: Date };
type User = Admin | SuperAdmin | UltraAdmin


function cannotHappen(x: never): never {
    throw new Error(`${x} is not a valid value`);
}

function getAge(user: User): number | null {
    if (user.kind === 'superadmin') {
        return user.age;
    } else if(user.kind === 'admin') {
        return null;
    } else {
        cannotHappen(user);
    }
}
