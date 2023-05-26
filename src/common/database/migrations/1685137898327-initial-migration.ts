import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1685137898327 implements MigrationInterface {
  name = 'initialMigration1685137898327';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "payment_methods" ("payment_method_id" SERIAL NOT NULL, "payment_method_name" character varying NOT NULL, "payment_method_description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_397415468d59f5743a83c6c7bef" PRIMARY KEY ("payment_method_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "payment_status" ("payment_status_id" SERIAL NOT NULL, "payment_status_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_13dc8a50500d73f8513d9a2a21e" PRIMARY KEY ("payment_status_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "payment_history" ("history_id" SERIAL NOT NULL, "order_uuid" uuid NOT NULL, "payment_date" TIMESTAMP NOT NULL, "payment_amount" integer NOT NULL, "payment_method_id" integer, "payment_status_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_37147f8901bbf79d8d9cfa8ae12" PRIMARY KEY ("history_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_order_uuid_ph" ON "payment_history" ("order_uuid") `,
    );
    await queryRunner.query(
      `CREATE TABLE "payments" ("payment_id" SERIAL NOT NULL, "payment_uuid" uuid NOT NULL, "order_uuid" uuid NOT NULL, "payment_date" TIMESTAMP NOT NULL, "payment_amount" integer NOT NULL, "payment_method_id" integer, "payment_status_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_8866a3cfff96b8e17c2b204aae0" PRIMARY KEY ("payment_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_payment_uuid" ON "payments" ("payment_uuid") `,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_order_uuid" ON "payments" ("order_uuid") `,
    );
    await queryRunner.query(
      `CREATE TABLE "payment_transactions" ("transaction_id" SERIAL NOT NULL, "transaction_type" character varying NOT NULL, "transaction_status" character varying NOT NULL, "transaction_message" character varying NOT NULL, "payment_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_b3b7ab417ec54003f231dc75b75" PRIMARY KEY ("transaction_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment_history" ADD CONSTRAINT "FK_cbcb9ce9879ec34031c7f76837a" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("payment_method_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment_history" ADD CONSTRAINT "FK_2fa15919abcbc0505edc65f39db" FOREIGN KEY ("payment_status_id") REFERENCES "payment_status"("payment_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "FK_12fd861c33c885f01b9a7da7d93" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("payment_method_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "FK_554edc6d57ad7e4224865e3c396" FOREIGN KEY ("payment_status_id") REFERENCES "payment_status"("payment_status_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment_transactions" ADD CONSTRAINT "FK_1f4dd90aece142a3a591cf4334b" FOREIGN KEY ("payment_id") REFERENCES "payments"("payment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "payment_transactions" DROP CONSTRAINT "FK_1f4dd90aece142a3a591cf4334b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "FK_554edc6d57ad7e4224865e3c396"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "FK_12fd861c33c885f01b9a7da7d93"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment_history" DROP CONSTRAINT "FK_2fa15919abcbc0505edc65f39db"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment_history" DROP CONSTRAINT "FK_cbcb9ce9879ec34031c7f76837a"`,
    );
    await queryRunner.query(`DROP TABLE "payment_transactions"`);
    await queryRunner.query(`DROP INDEX "idx_order_uuid_ph"`);
    await queryRunner.query(`DROP INDEX "idx_payment_uuid"`);
    await queryRunner.query(`DROP TABLE "payments"`);
    await queryRunner.query(`DROP INDEX "idx_order_uuid"`);
    await queryRunner.query(`DROP TABLE "payment_history"`);
    await queryRunner.query(`DROP TABLE "payment_status"`);
    await queryRunner.query(`DROP TABLE "payment_methods"`);
  }
}
