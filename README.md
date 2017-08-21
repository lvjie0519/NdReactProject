# NdReactProject
nd 前端线下考试

# 运行步骤
### npm install
### npm run mock
### npm start

# mock 服务接口

```
// 根据类型查询问题   GET
http://localhost:3003/questions?questionType=0

// 查询所有问题       GET
http://localhost:3003/questions

// 分页查询所有问题       GET
http://localhost:3003/questions?_start=0&_limit=3

// 根据id排序获取信息       GET
http://localhost:3003/questions?_sort=id&_order=DESC

// 更新问题   id=6      PUT
http://localhost:3003/questions/6

// 增加问题     POST
http://localhost:3003/questions
```