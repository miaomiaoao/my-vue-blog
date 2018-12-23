import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: Schema.Types.ObjectId, // 主键
  usename: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 中间件
userSchema.pre('save', (next) => {
  if (this.isNew) {
    this.meta.updateAt = this.meta.createAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

// 这是个排序么？
userSchema.statics = {
  fetch(cb) {
    return this.find({}).sort('meta.createAt').exec(cb)
  },
  findById(username, cb) {
    return this.findOne({username: username})
    .sort('meta.createAt')
    .exec(cb)
  }
}

// 将Schema发布为一个model
const User = mongoose.model('User', userSchema)
export default User
