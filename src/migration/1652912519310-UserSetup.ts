import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSetup1652912519310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `
            INSERT INTO user (firstName,lastName,age) value ('Peter','Munyua',45),('Paul','Clea',45)
            ,('Kenneth','Kip',45)
            ,('Leo','Leiten',45)
            ,('Strobe','Light',45)
            ,('Courier','Kush',45)
            ,('Dropped','Coins',45);
            `
          );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `TRUNCATE table user;`
        )
    }

}
