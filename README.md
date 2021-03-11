# 実行方法

以下の手順で再現できると思います．
`config/config.json` の `development` は適宜編集してください．

1. MySQL で`create database todo_app;` 

2. 以下を実行
```
npm install
cd client
npm install
cd ..
sequelize db:migrate --env development
npm run
```

