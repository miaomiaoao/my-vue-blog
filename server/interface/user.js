import Router from 'koa-router'
// import UserModel from '../dbs/model/user'

const router = new Router({
  prefix: '/user'
})

router.post('/signup', async (ctx, next) => {
  console.log('xxxx')
  console.log(ctx.request.body)
  let result = {}
  // let [username, password] = [ctx.request.body.username, ctx.request.body.password]
  // const user = await UserModel.findOne({username: username}).exec()
  // if (user) {
  //   result = {
  //     code: '999',
  //     msg: '用户已存在'
  //   }
  // } else {
  //   const usermodel = new UserModel({
  //     username: username,
  //     password: password
  //   })
  //   await usermodel.save((err) => {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       result = {
  //         code: '000',
  //         msg: '保存成功'
  //       }
  //     }
  //   })
  // }
  ctx.body = {
    result
  }
})

export default router
