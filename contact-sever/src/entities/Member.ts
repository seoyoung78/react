import { Column, Entity, Index } from "typeorm";

@Index("member_pkey", ["id"], { unique: true })
@Entity("member", { schema: "public" })
export class Member {
  @Column("numeric", { primary: true, name: "id", precision: 2, scale: 0 })
  id: string;

  @Column("character varying", { name: "name", length: 40 })
  name: string;

  @Column("character varying", { name: "deptNo", nullable: true, length: 40 })
  deptNo: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 40 })
  phone: string | null;

  @Column("character varying", { name: "mail", nullable: true, length: 40 })
  mail: string | null;

  @Column("character varying", {
    name: "delYN",
    length: 1,
    default: () => "'N'",
  })
  delYn: string;
}
