import { Column, Entity, Index } from "typeorm";

@Index("dept_pkey", ["deptNo"], { unique: true })
@Entity("dept", { schema: "public" })
export class Dept {
  @Column("character varying", { primary: true, name: "deptNo", length: 2 })
  deptNo: string;

  @Column("character varying", { name: "deptName", length: 40 })
  deptName: string;
}
