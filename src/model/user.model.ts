import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
class User {
    @PrimaryGeneratedColumn()
    public id?: String;

    @Column()
    public firstname!: String;

    @Column()
    public lastname!: String;
    @Column()
    public age!: number;
}

export default User