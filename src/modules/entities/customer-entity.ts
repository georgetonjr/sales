export class CustormerEntity {
    id?: number;

    name!: string;

    password!: string;

    public constructor(name: string, password: string, id?: number) {
        this.name = name;
        this.password = password;

        if (id) this.id = id;
    }

}