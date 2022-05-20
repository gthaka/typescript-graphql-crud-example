import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class LogTrails extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @ManyToOne(() => User, user => user.logTrails, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    })
    user: User;
}
