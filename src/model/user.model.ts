import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Picture from "./picture.model";

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
    //one to one
    // @OneToOne(()=>Picture)
    // @JoinColumn()
    // public picture!:Picture;

    // one to many
    @OneToMany(() => Picture, (picture) => picture.id)
    public picture!: Array<Picture>;
}

export default User