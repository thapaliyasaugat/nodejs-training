import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.model";

@Entity('picture')
class Picture {
    @PrimaryGeneratedColumn()
    public id?: String;

    @Column()
    public uri!: String;

    // many to many
    @ManyToOne(() => User, (user) => user.id, { eager: true })
    @JoinColumn({ name: "userId" })
    public user!: User;

    // many to many
    // @ManyToMany(() => User)
    // public users!: Array<User>;

}

export default Picture