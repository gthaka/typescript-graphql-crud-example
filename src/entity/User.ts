import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { LogTrails } from "./LogTrails";

@ObjectType()
@Entity()
export class User extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field(() => Int)
  @Column()
  age: number;

  // Relationship
  @OneToMany(() => LogTrails, logTrails => logTrails.user)
  logTrails: LogTrails[];
}
