import { Column, Model, Table } from 'sequelize-typescript'

@Table({ freezeTableName: true, underscored: true, timestamps: false })
export default class User extends Model<User>{
  @Column({
    autoIncrement: true,
    primaryKey: true
  })
  id!: number

  @Column({
    allowNull: false
  })
  email!: string

  @Column({
    allowNull: false
  })
  password!: string

  @Column({
    allowNull: false
  })
  username!: string
  
  @Column({
    allowNull: false
  })
  createdAt!: string

  @Column({
    allowNull: false
  })
  lastLogin!: string

  @Column({
    allowNull: false
  })
  isInitalize!: boolean
}