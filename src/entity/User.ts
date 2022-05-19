import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { LogTrails } from "./LogTrails";

@ObjectType()
@Entity()
export class User {

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
