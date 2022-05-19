import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class LogTrails {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @ManyToOne(() => User, user => user.logTrails, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    })
    user: User;
}
